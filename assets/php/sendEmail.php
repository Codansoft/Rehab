<?php
/*
 *  This script sends email message from Website
 *  Codansoft 2017
 *  $_REQUEST['message'];
    $_POST['sender']
 */
    //header("Content-Type: application/json; charset=UTF-8");
    //header('Content-Type:text/html');
    header('Content-Type:text/plain; charset=UTF-8');

    $result = '';
    $subject = 'Zapytanie';
    
    $sender = filter_input(INPUT_POST, 'sender'); 
    $from = filter_input(INPUT_POST, 'replyTo');
    $message = filter_input(INPUT_POST, 'message');
    
    if(is_null($sender)) {
        echo 'Empty Sender';
        return;
    }
    
    if(is_null($from)){
        echo 'Empty ReplyTo';
        return;
    }
    
    if(is_null($message)){
        echo 'Empty Message';
        return;
    }    
    
    $to = 'kontakt@rehabilitacjamalbork.pl';
    $webmaster =  'master@rehabilitacjamalbork.pl';

    $headers = 'From: ' . $webmaster . "\r\n" . 'Reply-To: ' . $from . "\r\n";

    try 
    {        
        $accepted = mail($to, $subject, $message, $headers);
        
        if($accepted){
            $result = 'success';
        } else {
            $result = "Mail wasn't accepted for delivery";
        }
    } 
    catch (Exception $ex) 
    {
        $result = $ex->getMessage();
    }
    
    //json_encode($result);
    echo $result;
?> 
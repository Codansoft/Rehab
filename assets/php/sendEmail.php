<?php

    $subject = "Website Visitor";
    $sender = $_POST['sender'];
    $from = $_POST['replyTo'];
    $message = $_POST['message']; 
    //$message = $_REQUEST['message'];
    
    $testText = "Welcome PHP";
    //echo " Subject" . $subject;
    //echo " Sender" . $sender;
    //echo " Message" . $message;
    
    $data = json_encode($testText);
    echo $data;
   

    // Send email message from Website
    //$to = "codansoft@codansoft.eu"; 
    $to = "rehab@rehab.pl"; 
    $webmaster =  "webmaster@rehab.pl";

    $headers = 'From: ' . $webmaster . "\r\n" . 'Reply-To: ' . $from . "\r\n";

    try 
    {
        mail($to, $subject, $message, $headers);
    } 
    catch (Exception $ex) 
    {
        echo $ex->getMessage();
    }

    
?> 
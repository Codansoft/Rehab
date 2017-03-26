<?php
    header("Content-Type: application/json; charset=UTF-8");

    $result->status = "Success";
    
    $subject = "Website Visitor";
    $sender = $_POST['sender'];
    $from = $_POST['replyTo'];
    $message = $_POST['message']; 
    // $_REQUEST['message'];

    //$data = json_encode();

    // Send email message from Website
    $to = "rehab@rehab.pl"; 
    $webmaster =  "webmaster@rehab.pl";

    $headers = 'From: ' . $webmaster . "\r\n" . 'Reply-To: ' . $from . "\r\n";

    try 
    {
        mail($to, $subject, $message, $headers);
    } 
    catch (Exception $ex) 
    {
        $result->status = $ex->getMessage();
    }
    
    echo json_encode($result);
?> 
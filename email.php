<?php

$name =$_POST['cName'];
$email =$_POST['cEmail'];
$cellNo =$_POST['cCellno'];
$subject =$_POST['cSubject'];
$message =$_POST['cMessage'];

$to = "remotelancers@gmail.com";
$from = "github website";

$txt = "Name = " . $name . "\r\n Email = " . $email . "\r\n Cell Number = " . $cellNo  . "\r\n Subject = " . $subject  . "\r\n Message = " . $message;

$headers = "From: noreply@github.com";

if($email != NULL){
    mail($to,$from,$txt,$headers);
}
header("Location:thankyou.html");
?>
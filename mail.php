<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail -> CharSet = 'utf-8';
$name = $_POST['name'];
$email = $_POST['email'];
$theme = $_POST['theme'];
$message = $_POST['message'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'matveym151@mail.ru';
$mail->Password = 'pDsw2JZjvfUZeqWnkyUG';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('matveym151@mail.ru');
$mail->addAddress('matveym151@gmail.com');
$mail->isHTML(true);

$mail->Subject = $theme;
$mail->Body = $name . ' оставил заявку, его email: ' . $email . "\n" . $message;
$mail->AltBody = '';

if(!$mail->send()){
    echo 'Error';
} else {
    if (@$_SERVER['HTTP_REFERER'] != null){
        header("Location: ".$_SERVER["HTTP_REFERER"]);
    }
    Sys::GoHome();
}
?>
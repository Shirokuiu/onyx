<?php

$recepient = "info@onyx.agency";
$sitename = "Новый заказ";

$name = trim($_POST["name"]);
$mail = trim($_POST["email"]);
$tel = trim($_POST["tel"]);
$message = "Имя: $name \nEmail: $mail \nТелефон: $tel";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
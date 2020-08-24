<?php
// $name = $_POST['nombre'];
// $mail = $_POST['email'];
// $phone = $_POST['telefono'];
// $message = $_POST['mensaje'];

// $header = 'From: ' . $mail . " \r\n";
// $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
// $header .= "Mime-Version: 1.0 \r\n";
// $header .= "Content-Type: text/plain";

// $message = "Este mensaje fue enviado por: " . $name . " \r\n";
// $message .= "Su e-mail es: " . $mail . " \r\n";
// $message .= "Teléfono de contacto: " . $phone . " \r\n";
// $message .= "Mensaje: " . $_POST['message'] . " \r\n";
// $message .= "Enviado el: " . date('d/m/Y', time());

// $para = 'w-restler@hotmail.com';
// $asunto = 'Mensaje de PRECOMPC';

// mail($para, $asunto, utf8_decode($message), $header);

// header("Location:index.html");


// El mensaje
$mensaje = "Línea 1\r\nLínea 2\r\nLínea 3";

// Si cualquier línea es más larga de 70 caracteres, se debería usar wordwrap()
$mensaje = wordwrap($mensaje, 70, "\r\n");

// Enviarlo
mail('w-restler@hotmail.com', 'Mi título', $mensaje);
header("Location:index.html");
?>
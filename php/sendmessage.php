<?php
$sendto   = "info@travel-kmv.ru , sale@travel-kmv.ru"; // Обязательно измените e-mail на свой
$username = $_POST['name'];
$userphone = $_POST['phone'];
$userdate = $_POST['date'];
$usercomment = $_POST['comment'];

// Формирование заголовка письма
$subject  = "Заявка с сайта GrandHouse";
$headers .= "From: Строительство домов <info@travel-kmv.ru>\r\n"; 
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новое сообщение</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Номер телефона:</strong> ".$userphone."</p>\r\n";
$msg .= "<p><strong>Дата и время звонка:</strong> ".$userdate."</p>\r\n";
$msg .= "<p><strong>Комментарий:</strong> ".$usercomment."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>

$(document).ready(function() {
$("#form").submit(function() { return false; });
$("#send").on("click", function(){
var name = $("#name").val();
var phone = $("#phone").val();
var date = $("#date").val();
var comment = $("#comment").val();

if ('' === phone) return alert('Введите номер телефона');

$("#send").replaceWith("<em>отправка...</em>");
$.ajax({
type: 'POST',
url: 'sendmessage.php',
data: $("#form").serialize(),
success: function(data) {
if(data == "true") {
$("#form").fadeOut("fast", function(){
$(this).before("<p class='text-center' style='box-shadow: 0 2px 4px rgba(0, 0, 0, .2); padding:10px;'><strong>Заявка отправлена!<br>С вами свяжутся в ближайшее время!</strong></p>");
setTimeout("$.fancybox.close()", 1000);
});
}
}
});
});
});
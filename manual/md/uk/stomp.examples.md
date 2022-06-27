- [« Типи ресурсів](stomp.resources.md)
- [Функції Stomp »] (ref.stomp.md)

- [PHP Manual](index.md)
- [Stomp](book.stomp.md)
- Приклади

# Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$queue  u003d '/queue/foo';$msg   u003d 'bar';/* Підключення */try {    $stomp u003d new Stomp('tcp://localhost:61613' e) {    die('Помилка підключення: ' . $e->getMessage());}/* Відправка повідомлення в черга 'foo' */$stomp->send($queue, $msg); в черги 'foo' */$stomp->subscribe($queue);/* Читання фрейму */$frame u003d $stomp->readFrame();if ($frame->body u003du003du003du003d$msg) {     $frame); /* відповідь, що повідомлення було отримано */   $stomp->ack($frame);}/* Закриття з'єднання**/unset($stomp);?> `

Результатом виконання цього прикладу буде щось подібне:

object(StompFrame)#2 (3) {
["command"]u003d>
string(7) "MESSAGE"
["headers"]u003d>
array(5) {
["message-id"]u003d>
string(41) "ID:php.net-55293-1257226743606-4:2:-1:1:1"
["destination"]u003d>
string(10) "/queue/foo"
["timestamp"]u003d>
string(13) "1257226805828"
["expires"]u003d>
string(1) "0"
["priority"]u003d>
string(1) "0"
}
["body"]u003d>
string(3) "bar"
}

**Приклад #2 Процедурний стиль**

` <?php$queue  u003d '/queue/foo';$msg   u003d 'bar';/* Підключення */$link u003d stomp_connect('ssl://localhost:61612');/* Перевірка підключення !$link) {    die('Помилка підключення: ' . stomp_connect_error());}/* Початок транзакції */stomp_begin($link, 't1');/* Відправка send , $queue, $msg, array('transaction' u003d> 't1'));/* Виконання транзакції */stomp_commit($link, 't1');/* Підписка к повідомлень в'чері $link, $queue);/* Читання фрейму */$frame u003d stomp_read_frame($link);if ($frame['body'] u003du003du003d $msg) {   var_dump($frame); /* відгук, що повідомлення отримало */   stomp_ack($link, $frame['headers']['message-id']);}/* Закриття з'єднання */stomp_close($link);?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
["command"]u003d>
string(7) "MESSAGE"
["body"]u003d>
string(3) "bar"
["headers"]u003d>
array(6) {
["transaction"]u003d>
string(2) "t1"
["message-id"]u003d>
string(41) "ID:php.net-55293-1257226743606-4:3:-1:1:1"
["destination"]u003d>
string(10) "/queue/foo"
["timestamp"]u003d>
string(13) "1257227037059"
["expires"]u003d>
string(1) "0"
["priority"]u003d>
string(1) "0"
}
}

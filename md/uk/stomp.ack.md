- [« Stomp::abort](stomp.abort.md)
- [Stomp::begin »](stomp.begin.md)

- [PHP Manual](index.md)
- [Stomp](class.stomp.md)
- Підтверджує отримання повідомлення

# Stomp::ack

#stomp_ack

(PECL stomp \>u003d 0.1.0)

Stomp::ack -- stomp_ack — Підтверджує отримання повідомлення

### Опис

Об'єктно-орієнтований стиль (метод):

public
**Stomp::ack**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$msg`, array `$headers` u003d ?): bool

Процедурний стиль:

**stomp_ack**(resource `$link`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$msg`, array `$headers` u003d ?): bool

Підтверджує факт отримання повідомлення із черги, використовуючи
підтвердження клієнта.

### Список параметрів

`link`
Тільки для процедурного стилю: ідентифікатор з'єднання stomp,
отриманий із [stomp_connect()](stomp.construct.md).

`msg`
Повідомлення/ідентифікатор повідомлення, отримання якого має бути
підтверджено.

`headers`
Асоціативний масив, що містить додаткові заголовки (приклад:
receipt).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$queue  u003d '/queue/foo';$msg   u003d 'bar';/* підключення */try {    $stomp u003d new Stomp('tcp://localhost:61613' $ e) {    die('Помилка з'єднання: ' . $e->getMessage());}/* відправка повідомлення в черга 'foo' */$stomp->send($queue, $msg); із черги 'foo' */$stomp->subscribe($queue);/* читання фрейму */$frame u003d $stomp->readFrame();if ($frame->body u003du003du003d $msg) {     підтвердження отримання фрейму */    $stomp->ack($frame);}/* скасування підписки до черги */$stomp->unsubscribe($queue);/* закриття підключення */unset($sto

**Приклад #2 Процедурний стиль**

` <?php$queue  u003d '/queue/foo';$msg   u003d 'bar';/* підключення */$link u003d stomp_connect('ssl://localhost:61612');/* перевірка з'єднання */ !$link) {    die('Помилка з'єднання: ' . stomp_connect_error());}/* початок транзакції */stomp_begin($link, 't1');/* відправка sto$'' | , $queue, $msg, array('transaction' u003d> 't1'));/* підтвердження транзакції */stomp_commit($link, 't1');/* підписка на повідомлення з чері $link, $queue);/* читання фрейму */$frame u003d stomp_read_frame($link);if ($frame['body'] u003du003du003du003d$msg) {    /* підтвердження одержання $frame['headers']['message-id']);}/* відміна підписи до черги */stomp_unsubscribe($link, $queue);/* закриття підключення */stomp_close($link);?> `

### Примітки

> **Примітка**:
>
> Також може бути зазначений заголовок транзакції, що означає, що прийом
> повідомлення має бути частиною іменованої транзакції.

**Підказка**

Stomp асинхронний за своєю суттю. Синхронний зв'язок може бути реалізований
додаванням receipt-заголовка. Це змусить методи нічого не повертати,
доки сервер не підтвердить отримання повідомлення або не буде перевищено
час очікування повідомлення.

- [«Stomp](class.stomp.md)
- [Stomp::ack »](stomp.ack.md)

- [PHP Manual](index.md)
- [Stomp](class.stomp.md)
- скасовує виконання поточної транзакції

# Stomp::abort

#stomp_abort

(PECL stomp \>u003d 0.1.0)

Stomp::abort -- stomp_abort — Скасує виконання поточної транзакції

### Опис

Об'єктно-орієнтований стиль (метод):

public **Stomp::abort**(string `$transaction_id`, array `$headers` u003d ?):
bool

Процедурний стиль:

**stomp_abort**(resource `$link`, string `$transaction_id`, array
`$headers` u003d ?): bool

Скасує виконання поточної транзакції.

### Список параметрів

`link`
Тільки для процедурного стилю: ідентифікатор з'єднання stomp,
отриманий із [stomp_connect()](stomp.construct.md).

`transaction_id`
Транзакція, яку слід перервати.

`headers`
Асоціативний масив, що містить додаткові заголовки (приклад:
receipt).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

`<?php/* підключення */try {    $stomp u003d new Stomp('tcp://localhost:61613');} catch(StompException $e) {    die('Помилка$>|| ));}/* початок транзакції */$stomp->begin('t1');/* відправлення повідомлення в черга */$stomp->send('/queue/foo', 'bar', array('transaction ' u003d> 't1'));/* відкат транзакції */$stomp->abort('t1');/* розрив підключення */unset($stomp);?> `

**Приклад #2 Процедурний стиль**

` <?php/* підключення */$link u003d stomp_connect('tcp://localhost:61613');/* перевірка підключення */if (!$link) {    die('Помилка з'єднання: ' . . . . ;}/* початок транзакції */stomp_begin($link, 't1');/* відправлення повідомлення в черга 'foo' */stomp_send($link, '/queue/foo', 'bar', array u003d> 't1'));/* відкат транзакції */stomp_abort($link, 't1');/* розрив підключення */stomp_close($link);?> `

### Примітки

**Підказка**

Stomp асинхронний за своєю суттю. Синхронний зв'язок може бути реалізований
додаванням receipt-заголовка. Це змусить методи нічого не повертати,
доки сервер не підтвердить отримання повідомлення або не буде перевищено
час очікування повідомлення.

- [« Stomp::\_\_destruct](stomp.destruct.md)
- [Stomp::getReadTimeout »](stomp.getreadtimeout.md)

- [PHP Manual](index.md)
- [Stomp](class.stomp.md)
- Повертає останню помилку Stomp

# Stomp::error

#stomp_error

(PECL stomp \>u003d 0.1.0)

Stomp::error -- stomp_error — Повертає останню помилку Stomp

### Опис

Об'єктно-орієнтований стиль (метод):

public **Stomp::error**(): string

Процедурний стиль:

**stomp_error**(resource `$link`): string

Повертає останню помилку Stomp.

### Список параметрів

`link`
Тільки для процедурного стилю: ідентифікатор з'єднання stomp,
отриманий із [stomp_connect()](stomp.construct.md).

### Значення, що повертаються

Повертає текст помилки або **false** у разі виникнення помилки.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php/* підключення */try {    $stomp u003d new Stomp('tcp://localhost:61613');} catch(StompException $e) {    die('Помилка$>|| ));}var_dump($stomp->error());if (!$stomp->abort('unknown-transaction', array('receipt' u003d> 'foo'))) {    var_dump($stomp-> error());}/* Закриття з'єднання*/unset($stomp);?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)
string(43) "Invalid transaction id: unknown-transaction"

**Приклад #2 Процедурний стиль**

` <?php/* підключення */$link u003d stomp_connect('ssl://localhost:61612');/* перевірка з'єднання */if (!$link) {    die('Помилка з'єднання: ' . . . . ;}var_dump(stomp_error($link));if (!stomp_abort($link, 'unknown-transaction', array('receipt' u003d> 'foo'))) {   var_dump(stomp_error($link));}/ * закриття з'єднання*/stomp_close($link);?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)
string(43) "Invalid transaction id: unknown-transaction"

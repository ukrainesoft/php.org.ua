- [« Exception::\_\_construct](exception.construct.md)
- [Exception::getPrevious »](exception.getprevious.md)

- [PHP Manual](index.md)
- [Exception](class.exception.md)
- Отримує повідомлення виключення

# Exception::getMessage

(PHP 5, PHP 7, PHP 8)

Exception::getMessage — Отримує повідомлення про виключення

### Опис

final public **Exception::getMessage**(): string

Повертає повідомлення виключення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає повідомлення виключення у вигляді рядка.

### Приклади

**Приклад #1 Приклад використання **Exception::getMessage()****

` <?phptry {    throw new Exception("Яке-небудь повідомлення про помилки");} catch(Exception $e) {    echo $e->getMessage();}?> `

Результатом виконання цього прикладу буде щось подібне:

Якесь повідомлення про помилку

### Дивіться також

- [Throwable::getMessage()](throwable.getmessage.md) - Отримує
повідомлення помилки

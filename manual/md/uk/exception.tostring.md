- [« Exception::getTraceAsString](exception.gettraceasstring.md)
- [Exception::\_\_clone »](exception.clone.md)

- [PHP Manual](index.md)
- [Exception](class.exception.md)
- Строкове подання виключення

# Exception::\_\_toString

(PHP 5, PHP 7, PHP 8)

Exception::\_\_toString — Строкове представлення винятку

### Опис

public **Exception::\_\_toString**(): string

Повертає виняток у вигляді рядка (string).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає виняток у вигляді рядка (string).

### Приклади

**Приклад #1 Приклад використання **Exception::\_\_toString()****

` <?phptry {    throw new Exception("Яке-небудь повідомлення про помилки");} catch(Exception $e) {    echo $e;}?> `

Результатом виконання цього прикладу буде щось подібне:

exception 'Exception' with message 'Якесь повідомлення про помилку' in /home/bjori/tmp/ex.php:3
Stack trace:
#0 {main}

### Дивіться також

- [Throwable::\_\_toString()](throwable.tostring.md) - Отримує
рядкове уявлення викинутого об'єкта

- [«Error::getTraceAsString](error.gettraceasstring.md)
- [Error::\_\_clone »](error.clone.md)

- [PHP Manual](index.md)
- [Error](class.error.md)
- Строкове подання помилки

# Error::\_\_toString

(PHP 7, PHP 8)

Error::\_\_toString — Строкове подання помилки

### Опис

public **Error::\_\_toString**(): string

Повертає строкове (string) уявлення помилки.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає строкове (string) уявлення помилки.

### Приклади

**Приклад #1 Приклад використання **Error::\_\_toString()****

` <?phptry {    throw new Error("Повідомлення про помилки");} catch(Error $e) {    echo $e;}?> `

Результатом виконання цього прикладу буде щось подібне:

Error: Повідомлення про помилку in /home/bjori/tmp/ex.php:3
Stack trace:
#0 {main}

### Дивіться також

- [Throwable::\_\_toString()](throwable.tostring.md) - Отримує
рядкове уявлення викинутого об'єкта

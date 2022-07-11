- [« Exception::getFile](exception.getfile.md)
- [Exception::getTrace »](exception.gettrace.md)

- [PHP Manual](index.md)
- [Exception](class.exception.md)
- Отримує рядок, у якому виник виняток

# Exception::getLine

(PHP 5, PHP 7, PHP 8)

Exception::getLine — Отримує рядок, у якому виник виняток

### Опис

final public **Exception::getLine**(): int

Отримати номер рядка, де виняток було створено

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає номер рядка, де було створено виняток.

### Приклади

**Приклад #1 Приклад використання **Exception::getLine()****

` <?phptry {    throw new Exception("Яке-небудь повідомлення про помилки");} catch(Exception $e) {    echo "Виняток було створено           $e->getLine();}?> `

Результатом виконання цього прикладу буде щось подібне:

Виняток було створено на рядку: 3

### Дивіться також

- [Throwable::getLine()](throwable.getline.md) - Отримує рядок
скрипта, в якій цей об'єкт був викинутий

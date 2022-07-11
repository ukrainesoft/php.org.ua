- [« Exception::getPrevious](exception.getprevious.md)
- [Exception::getFile »](exception.getfile.md)

- [PHP Manual](index.md)
- [Exception](class.exception.md)
- Отримує код виключення

# Exception::getCode

(PHP 5, PHP 7, PHP 8)

Exception::getCode — Отримує код виключення

### Опис

final public **Exception::getCode**(): int

Повертає код виключення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає код виключення типу int у класу
[Exception](class.exception.md), але у нащадків класу
[Exception](class.exception.md) може бути інший тип (наприклад, типу
string у [PDOException](class.pdoexception.md)).

### Приклади

**Приклад #1 Приклад використання **Exception::getCode()****

` <?phptry {    throw new Exception("Яке-небудь повідомлення про помилки", 30);} catch(Exception $e) {   echo "Код виключення: " $e->getCode();}?> `

Результатом виконання цього прикладу буде щось подібне:

Код виключення: 30

### Дивіться також

- [Throwable::getCode()](throwable.getcode.md) - Повертає код
винятки

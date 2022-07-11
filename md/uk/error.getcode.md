- [«Error::getPrevious](error.getprevious.md)
- [Error::getFile »](error.getfile.md)

- [PHP Manual](index.md)
- [Error](class.error.md)
- Повертає код помилки

# Error::getCode

(PHP 7, PHP 8)

Error::getCode — Повертає код помилки

### Опис

final public **Error::getCode**(): int

Повертає код помилки.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає код помилки типу int

### Приклади

**Приклад #1 Приклад використання**Error::getCode()****

`<?phptry {    throw new Error("Якесь повідомлення про помилки", 30);} catch(Error $e) {    echo "Код помилки: " . $e->getCode();}?> `

Результатом виконання цього прикладу буде щось подібне:

Код помилки: 30

### Дивіться також

- [Throwable::getCode()](throwable.getcode.md) - Повертає код
винятки

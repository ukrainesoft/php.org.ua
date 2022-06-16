- [« Exception::getCode](exception.getcode.md)
- [Exception::getLine »](exception.getline.md)

- [PHP Manual](index.md)
- [Exception](class.exception.md)
- Отримує файл, у якому виник виняток

# Exception::getFile

(PHP 5, PHP 7, PHP 8)

Exception::getFile — Отримує файл, у якому виник виняток

### Опис

final public **Exception::getFile**(): string

Отримати ім'я файлу, де виняток було створено.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я файлу, в якому виняток було створено.

### Приклади

**Приклад #1 Приклад використання **Exception::getFile()****

` <?phptry {   throw new Exception;} catch(Exception $e) {   echo $e->getFile();}?> `

Результатом виконання цього прикладу буде щось подібне:

/home/bjori/tmp/ex.php

### Дивіться також

- [Throwable::getFile()](throwable.getfile.md) - Повертає файл, в
якому викинуто виняток

- [«Error::getCode](error.getcode.md)
- [Error::getLine »](error.getline.md)

- [PHP Manual](index.md)
- [Error](class.error.md)
- Отримує файл, у якому сталася помилка

# Error::getFile

(PHP 7, PHP 8)

Error::getFile — Отримує файл, у якому сталася помилка

### Опис

final public **Error::getFile**(): string

Отримати ім'я файлу, в якому сталася помилка.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я файлу, в якому сталася помилка.

### Приклади

**Приклад #1 Приклад використання **Error::getFile()****

` <?phptry {    throw new Error;} catch(Error $e) {   echo $e->getFile();}?> `

Результатом виконання цього прикладу буде щось подібне:

/home/bjori/tmp/ex.php

### Дивіться також

- [Throwable::getFile()](throwable.getfile.md) - Повертає файл, в
якому викинуто виняток

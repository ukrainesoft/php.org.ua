- [« PharData::decompressFiles](phardata.decompressfiles.md)
- [PharData::delete »](phardata.delete.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Видалити глобальні метадані для zip-архіву

# PharData::delMetadata

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::delMetadata — Видалити глобальні метадані для zip-архіву

### Опис

public **PharData::delMetadata**(): bool

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Видаляє глобальні метадані для zip-архіву

### Список параметрів

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, але краще
використовувати перевірку винятків.

### Помилки

Викидає виняток [PharException](class.pharexception.md)
у разі виникнення помилки під час збереження змін на диск.

### Приклади

**Приклад #1 Приклад використання **PharData::delMetaData()****

`<?phptry {   $phar u003d new PharData('myphar.zip'); var_dump($phar->getMetadata()); $phar->setMetadata("привіт"); var_dump($phar->getMetadata()); $phar->delMetadata(); var_dump($phar->getMetadata());} catch (Exception $e) {    // обробка помилок}?> `

Результат виконання цього прикладу:

NULL
string(8) "привіт"
NULL

### Дивіться також

- [Phar::delMetadata()](phar.delmetadata.md) - Видалити глобальні
метадані в архіві phar

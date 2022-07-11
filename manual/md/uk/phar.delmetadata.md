- [« Phar::decompressFiles](phar.decompressfiles.md)
- [Phar::delete »](phar.delete.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Видалити глобальні метадані в архіві phar

# Phar::delMetadata

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.2.0)

Phar::delMetadata — Видалити глобальні метадані в архіві phar

### Опис

public **Phar::delMetadata**(): bool

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Видаляє глобальні метадані в архіві phar

### Список параметрів

### Значення, що повертаються

Повертає **`true`** в успішне виконання, але краще використовувати
перевірку винятків.

### Помилки

Викидає виняток [PharException](class.pharexception.md)
у разі виникнення помилки під час збереження змін на диск.

### Приклади

**Приклад #1 Приклад використання **Phar::delMetaData()****

`<?phptry {   $phar u003d new Phar('myphar.phar'); var_dump($phar->getMetadata()); $phar->setMetadata("hi there"); var_dump($phar->getMetadata()); $phar->delMetadata(); var_dump($phar->getMetadata());} catch (Exception $e) {    // обробка помилок}?> `

Результат виконання цього прикладу:

NULL
string(8) "hi there"
NULL

### Дивіться також

- [Phar::getMetadata()](phar.getmetadata.md) - Витягти метадані
phar-архіву
- [Phar::setMetadata()](phar.setmetadata.md) - Встановити метадані
phar-архіву
- [Phar::hasMetadata()](phar.hasmetadata.md) - Перевірити, чи містить
чи phar-архів глобальні метадані

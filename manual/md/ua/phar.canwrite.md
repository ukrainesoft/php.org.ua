- [« Phar::canCompress](phar.cancompress.md)
- [Phar::compress »](phar.compress.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Перевіряє, чи підтримує модуль phar збереження та створення
phar-архівів

# Phar::canWrite

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::canWrite — Перевіряє, чи підтримує модуль phar збереження та
створення phar-архівів

### Опис

final public static **Phar::canWrite**(): bool

Цей статичний метод визначає, чи був відключений доступ до запису
системному файлі php.ini з використанням змінної
[phar.readonly](phar.configuration.md#ini.phar.readonly).

### Список параметрів

### Значення, що повертаються

**`true`**, якщо доступ на запис включений, **`false`** у протилежному
випадку.

### Приклади

**Приклад #1 Приклад використання **Phar::canWrite()****

` <?phpif (Phar::canWrite()) {    file_put_contents('phar://myphar.phar/file.txt', 'всем привіт');}?> `

### Дивіться також

- [phar.readonly](phar.configuration.md#ini.phar.readonly)
- [Phar::isWritable()](phar.iswritable.md) - Перевіряє, чи можливо
модифікувати phar-архів

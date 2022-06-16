- [«ltrim](function.ltrim.md)
- [md5»](function.md5.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Повертає MD5-хеш файлу

#md5_file

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

md5_file — Повертає MD5-хеш файлу

### Опис

**md5_file**(string `$filename`, bool `$binary` u003d **`false`**):
string\|false

Обчислює MD5-хеш файлу, ім'я якого задано аргументом `filename`,
використовуючи [» Алгоритм MD5 RSA Data Security,
Inc.](http://www.faqs.org/rfcs/rfc1321) та повертає цей хеш. Хеш
являє собою 32-значне шістнадцяткове число.

### Список параметрів

`filename`
ім'я файлу

`binary`
Якщо має значення **`true`**, то повертається бінарний рядок із 16
символів.

### Значення, що повертаються

Повертає рядок у разі успішного виконання, інакше **false**.

### Приклади

**Приклад #1 Приклад використання **md5_file()****

` <?php$file u003d 'php-5.3.0alpha2-Win32-VC9-x64.zip';echo 'MD5-хеш файла ' . $file . ': ' . md5_file($file);?> `

### Дивіться також

- [md5()](function.md5.md) - Повертає MD5-хеш рядки
- [sha1_file()](function.sha1-file.md) - Повертає SHA1-хеш файлу
- [crc32()](function.crc32.md) - Обчислює поліном CRC32 для рядка

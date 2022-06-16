- [«setlocale](function.setlocale.md)
- [sha1 »](function.sha1.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Повертає SHA1-хеш файлу

#sha1_file

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

sha1_file — Повертає SHA1-хеш файлу

### Опис

**sha1_file**(string `$filename`, bool `$binary` u003d **`false`**):
string\|false

Обчислює SHA1-хеш файлу, ім'я якого задано аргументом `filename`,
використовуючи алгоритм [» US Secure Hash Algorithm
1](http://www.faqs.org/rfcs/rfc3174) та повертає цей хеш. Хеш -
40-символьне шістнадцяткове число.

### Список параметрів

`filename`
Ім'я файлу, що хешується.

`binary`
Якщо встановлено в **`true`**, повертає 20-символьний хеш у бінарному
форматі.

### Значення, що повертаються

Повертає рядок у разі успішного виконання, інакше повертається
**`false`**.

### Приклади

**Приклад #1 Приклад використання **sha1_file()****

` <?phpforeach(glob('/home/Kalle/myproject/*.php') as $ent){   if(is_dir($ent))    {         continue; }   echo $ent . ' (SHA1: ' . sha1_file($ent) . ')', PHP_EOL;}?> `

### Дивіться також

- [sha1()](function.sha1.md) - Повертає SHA1-хеш рядки
- [md5_file()](function.md5-file.md) - Повертає MD5-хеш файлу
- [crc32()](function.crc32.md) - Обчислює поліном CRC32 для рядка

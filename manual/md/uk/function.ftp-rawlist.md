- [«ftp_raw](function.ftp-raw.md)
- [ftp_rename »](function.ftp-rename.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Повертає докладний список файлів у заданій директорії

#ftp_rawlist

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_rawlist — Повертає докладний список файлів у заданій директорії

### Опис

**ftp_rawlist**([FTP\Connection](class.ftp-connection.md) `$ftp`,
string `$directory`, bool `$recursive` u003d **`false`**): array\|false

**ftp_rawlist()** відправляє FTP-серверу команду **LIST** та повертає
результат як масиву.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`directory`
Ім'я директорії на сервері. Може включати аргументи для команди
**LIST**.

`recursive`
Якщо передано значення **`true`**, серверу буде надіслано команду
**LIST-R**.

### Значення, що повертаються

Повертає масив, кожен елемент якого містить один рядок відповіді
сервера. Повертає **`false`**, якщо передана директорія `directory`
не валідна.

Відповідь сервера не обробляється. Для визначення того, як слід
інтерпретувати результат, можна використовувати результат роботи функції
[ftp_systype()](function.ftp-systype.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_rawlist()****

`<?php//установка з'єднання$ftp u003d ftp_connect($ftp_server);// перевірка імені користувача і пароля$login_result u003d ftp_login($ftp, $ftp_user_name, $ftp ($ftp, '/');// закриття з'єднанняftp_close($ftp);// виведення буфераvar_dump($buff);?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
[0]u003d>
string(65) "drwxr-x--- 3 vincent vincent 4096 Jul 12 12:16 public_ftp"
[1]u003d>
string(66) "drwxr-x--- 15 vincent vincent 4096 Nov 3 21:31 public_html"
[2]u003d>
string(73) "lrwxrwxrwx 1 vincent vincent 11 Jul 12 12:16 www -> public_html"
}

### Дивіться також

- [ftp_nlist()](function.ftp-nlist.md) - Повертає список файлів у
заданої директорії
- [ftp_mlsd()](function.ftp-mlsd.md) - Повертає список файлів у
заданої директорії

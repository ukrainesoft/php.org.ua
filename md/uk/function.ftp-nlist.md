- [«ftp_nb_put](function.ftp-nb-put.md)
- [ftp_pasv »](function.ftp-pasv.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Повертає список файлів у заданій директорії

#ftp_nlist

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_nlist — Повертає список файлів у заданій директорії

### Опис

**ftp_nlist**([FTP\Connection](class.ftp-connection.md) `$ftp`, string
`$directory`): array\|false

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`directory`
Ім'я каталогу для отримання списку файлів. Цей параметр також може
включати аргументи, наприклад, `ftp_nlist($conn_id, "-la /your/dir");`.
Зверніть увагу, що цей параметр не проходить екранування
спецсимволів, так що можуть виникнути проблеми з іменами, що містять
прогалини та інші подібні символи.

### Значення, що повертаються

Повертає масив імен файлів у директорії або **`false`** при
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_nlist()****

`<?php// установка з'єднання$ftp u003d ftp_connect($ftp_server);// перевірка імені користувача і пароля$login_result u003d ftp_login($ftp, $ftp_user_name, $ft $v, ".");// виведення $contentsvar_dump($contents);?> `

Наведений вище приклад виведе:

array(3) {
[0]u003d>
string(11) "public_html"
[1]u003d>
string(10) "public_ftp"
[2]u003d>
string(3) "www"

### Дивіться також

- [ftp_rawlist()](function.ftp-rawlist.md) - Повертає докладний
список файлів у заданій директорії
- [ftp_mlsd()](function.ftp-mlsd.md) - Повертає список файлів у
заданої директорії

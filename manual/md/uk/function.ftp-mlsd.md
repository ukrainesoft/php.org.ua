- [«ftp_mkdir](function.ftp-mkdir.md)
- [ftp_nb_continue »](function.ftp-nb-continue.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Повертає список файлів у заданій директорії

#ftp_mlsd

(PHP 7 \>u003d 7.2.0, PHP 8)

ftp_mlsd — Повертає список файлів у заданій директорії

### Опис

**ftp_mlsd**([FTP\Connection](class.ftp-connection.md) `$ftp`, string
`$directory`): array\|false

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`directory`
Директорія, список файлів якої буде повернено.

### Значення, що повертаються

Повертає масив масивів з інформацією про файли із зазначеної
директорії у разі успішного виконання або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_mlsd()****

`<?php// встановити основне з'єднання$ftp u003d ftp_connect($ftp_server);// авторизовуватися на сервері, використовуючи ім'я користувача і пароль$login_result u003d ftp_login$$$ $contents u003d ftp_mlsd($ftp, ".");// виведення $contentsvar_dump($contents);?> `

Результатом виконання цього прикладу буде щось подібне:

array(5) {
[0]u003d>
array(8) {
["name"]u003d>
string(1) "."
["modify"]u003d>
string(14) "20171212154511"
["perm"]u003d>
string(7) "flcdmpe"
["type"]u003d>
string(4) "cdir"
["unique"]u003d>
string(11) "811U5740002"
["UNIX.group"]u003d>
string(2) "33"
["UNIX.mode"]u003d>
string(4) "0755"
["UNIX.owner"]u003d>
string(2) "33"
}
[1]u003d>
array(8) {
["name"]u003d>
string(2) ".."
["modify"]u003d>
string(14) "20171212154511"
["perm"]u003d>
string(7) "flcdmpe"
["type"]u003d>
string(4) "pdir"
["unique"]u003d>
string(11) "811U5740002"
["UNIX.group"]u003d>
string(2) "33"
["UNIX.mode"]u003d>
string(4) "0755"
["UNIX.owner"]u003d>
string(2) "33"
}
[2]u003d>
array(8) {
["name"]u003d>
string(11) "public_html"
["modify"]u003d>
string(14) "20171211171525"
["perm"]u003d>
string(7) "flcdmpe"
["type"]u003d>
string(3) "dir"
["unique"]u003d>
string(11) "811U5740525"
["UNIX.group"]u003d>
string(2) "33"
["UNIX.mode"]u003d>
string(4) "0755"
["UNIX.owner"]u003d>
string(2) "33"
}
[3]u003d>
array(8) {
["name"]u003d>
string(10) "public_ftp"
["modify"]u003d>
string(14) "20171211174536"
["perm"]u003d>
string(7) "flcdmpe"
["type"]u003d>
string(3) "dir"
["unique"]u003d>
string(11) "811U57405EE"
["UNIX.group"]u003d>
string(2) "33"
["UNIX.mode"]u003d>
string(4) "0755"
["UNIX.owner"]u003d>
string(2) "33"
}
[4]u003d>
array(8) {
["name"]u003d>
string(3) "www"
["modify"]u003d>
string(14) "www"
["perm"]u003d>
string(7) "flcdmpe"
["type"]u003d>
string(3) "dir"
["unique"]u003d>
string(11) "811U5740780"
["UNIX.group"]u003d>
string(2) "33"
["UNIX.mode"]u003d>
string(4) "0755"
["UNIX.owner"]u003d>
string(2) "33"
}
}

### Дивіться також

- [ftp_rawlist()](function.ftp-rawlist.md) - Повертає докладний
список файлів у заданій директорії
- [ftp_nlist()](function.ftp-nlist.md) - Повертає список файлів у
заданої директорії

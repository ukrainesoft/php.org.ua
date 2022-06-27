- [«ftp_alloc](function.ftp-alloc.md)
- [ftp_cdup »](function.ftp-cdup.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Додає вміст файлу на кінець іншого файлу на FTP-сервері

#ftp_append

(PHP 7 \>u003d 7.2.0, PHP 8)

ftp_append — Додає вміст файлу до кінця іншого файлу на
FTP-сервері

### Опис

**ftp_append**(
[FTP\Connection](class.ftp-connection.md) `$ftp`,
string `$remote_filename`,
string `$local_filename`,
int `$mode` u003d **`FTP_BINARY`**
): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`remote_filename`

`local_filename`

`mode`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

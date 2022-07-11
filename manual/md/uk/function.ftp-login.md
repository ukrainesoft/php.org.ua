- [«ftp_get](function.ftp-get.md)
- [ftp_mdtm »](function.ftp-mdtm.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Виконує вхід на FTP-сервер

#ftp_login

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_login — Виконує вхід на сервер FTP

### Опис

**ftp_login**([FTP\Connection](class.ftp-connection.md) `$ftp`, string
`$username`, string `$password`): bool

Виконує вхід на сервер FTP.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`username`
Ім'я користувача (USER).

`password`
Пароль (PASS).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Якщо увійти на сервер не вдалося, PHP
виведе попередження.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_login()****

` <?php$ftp_server u003d "ftp.example.com";$ftp_user u003d "foo";$ftp_pass u003d "bar";// установити з'єднання або вийти$ftp u003d ftp_connect($ftp_server) or з'єднання з $ftp_server");
";} else {    echo "Не удалося увійти під іменем $ftp_user
";}// закрити з'єднанняftp_close($ftp);?> `

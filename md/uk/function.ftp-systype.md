- [«ftp_ssl_connect](function.ftp-ssl-connect.md)
- [FTP\Connection »](class.ftp-connection.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Повертає тип операційної системи FTP-сервера

#ftp_systype

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_systype — Повертає тип операційної системи сервера FTP

### Опис

**ftp_systype**([FTP\Connection](class.ftp-connection.md) `$ftp`):
string\|false

Повертає тип операційної системи сервера FTP.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

### Значення, що повертаються

Повертає тип операційної системи FTP-сервера або **`false`** при
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_systype()****

` <?php// установка з'єднання$ftp u003d ftp_connect('ftp.example.com');ftp_login($ftp, 'user', 'password');// отримання типу системиif ($type u003d ftp_systype($ft ) {    echo "example.com використовує $type
";} else {    echo "Не удалося визначити тип системи";}?> `

Результатом виконання цього прикладу буде щось подібне:

example.com використовує UNIX

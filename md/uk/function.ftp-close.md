- [«ftp_chmod](function.ftp-chmod.md)
- [ftp_connect »](function.ftp-connect.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Закриває з'єднання з FTP-сервером

#ftp_close

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

ftp_close — Закриває з'єднання з сервером FTP

### Опис

**ftp_close**([FTP\Connection](class.ftp-connection.md) `$ftp`): bool

**ftp_close()** закриває вказаний ідентифікатор з'єднання із сервером
та звільняє ресурс.

> **Примітка**:
>
> Після виклику цієї функції, з'єднання більше не може бути
> використано, і при необхідності має бути встановлене заново при
> за допомогою функції [ftp_connect()](function.ftp-connect.md).

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_close()****

`<?php//установка з'єднання$ftp u003d ftp_connect($ftp_server);// вхід з іменем користувача і паролем$login_result u003d ftp_login($ftp, $ftp_user_name, $ ; // /// закриття з'єднанняftp_close($ftp);?> `

### Дивіться також

- [ftp_connect()](function.ftp-connect.md) - Встановлює
з'єднання з FTP-сервером

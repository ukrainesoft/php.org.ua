- [«ftp_append](function.ftp-append.md)
- [ftp_chdir »] (function.ftp-chdir.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Переходить до батьківської директорії

#ftp_cdup

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_cdup — Переходить до батьківської директорії

### Опис

**ftp_cdup**([FTP\Connection](class.ftp-connection.md) `$ftp`): bool

Переходить до батьківської директорії.

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

**Приклад #1 Приклад використання функції **ftp_cdup()****

`<?php// установка з'єднання$ftp u003d ftp_connect($ftp_server);// вхід з іменем користувача і паролем$login_result u003d ftp_login($ftp,? , 'html');echo ftp_pwd($ftp); // /html// повернення в батьківську директоріюif (ftp_cdup($ftp)) {  echo "команда cdup виконана успішно
";} else {  echo "команда cdup завершилася невдачею
";}echo ftp_pwd($ftp); // /ftp_close($ftp);?> `

### Дивіться також

- [ftp_chdir()](function.ftp-chdir.md) - Змінює поточну директорію
на FTP-сервері
- [ftp_pwd()](function.ftp-pwd.md) - Повертає поточне ім'я
директорії

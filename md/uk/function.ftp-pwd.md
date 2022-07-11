- [«ftp_put](function.ftp-put.md)
- [ftp_quit »](function.ftp-quit.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Повертає ім'я поточної директорії

#ftp_pwd

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_pwd — Повертає ім'я директорії

### Опис

**ftp_pwd**([FTP\Connection](class.ftp-connection.md) `$ftp`):
string\|false

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

### Значення, що повертаються

Повертає ім'я поточної директорії або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_pwd()****

` <?php// установка з'єднання$ftp u003d ftp_connect($ftp_server);// перевірка імені пользователя і пароля$login_result u003d ftp_login($ftp, $ftp_user_name, $ftp_ 'public_html'); // Висновок ім'я поточної директорії echo ftp_pwd ($ ftp); // /public_html// закриття з'єднанняftp_close($ftp);?> `

### Дивіться також

- [ftp_chdir()](function.ftp-chdir.md) - Змінює поточну директорію
на FTP-сервері
- [ftp_cdup()](function.ftp-cdup.md) - Переходить до батьківської
директорію

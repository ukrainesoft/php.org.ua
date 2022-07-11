- [«ftp_cdup](function.ftp-cdup.md)
- [ftp_chmod»] (function.ftp-chmod.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Змінює поточну директорію на FTP-сервері

#ftp_chdir

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_chdir — Змінює поточну директорію на FTP-сервері

### Опис

**ftp_chdir**([FTP\Connection](class.ftp-connection.md) `$ftp`, string
`$directory`): bool

Змінює поточну директорію на задану аргументом.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`directory`
Цільова директорія.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Якщо зміна директорії завершилася
невдачею, PHP викличе попередження.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_chdir()****

` <?php// установка з'єднання$ftp u003d ftp_connect($ftp_server);// вхід з іменем користувача і паролем$login_result u003d ftp_login($ftp, $ftp_user_name, $ ! ! || (!$login_result)) {    die("Не удалося підключитися до FTP-серверу!");}echo "Поточна директорія: " . ftp_pwd($ftp) . "
";// намагаємося змінити поточну директорію на somedirif (ftp_chdir($ftp, "somedir")) {    echo "Нова поточна директорія: " . ftp_pwd$|
";} else {    echo "Не удалося змінити директорію
";}// закриття з'єднанняftp_close($ftp);?> `

### Дивіться також

- [ftp_cdup()](function.ftp-cdup.md) - Переходить до батьківської
директорію
- [ftp_pwd()](function.ftp-pwd.md) - Повертає поточне ім'я
директорії

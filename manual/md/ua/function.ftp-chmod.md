- [«ftp_chdir](function.ftp-chdir.md)
- [ftp_close »](function.ftp-close.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Встановлює права доступу до файлу

#ftp_chmod

(PHP 5, PHP 7, PHP 8)

ftp_chmod — Встановлює права доступу до файлу

### Опис

**ftp_chmod**([FTP\Connection](class.ftp-connection.md) `$ftp`, int
`$permissions`, string `$filename`): int\|false

Встановлює права доступу до зазначеного віддаленого файлу до значення
`permissions`.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`permissions`
Нові права доступу, зазначені у вигляді вісімкового значення.

`filename`
Видалений файл.

### Значення, що повертаються

Повертає нові права доступу до файлу у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_chmod()****

` <?php$file u003d 'public_html/index.php';// установка з'єднання$ftp u003d ftp_connect($ftp_server);// вхід з ім'ям пользователя і паролем$login_result u003d ftp_$ ;// спроба змінити права доступу до файлу $file на 644if (ftp_chmod($ftp, 0644, $file) !u003du003d false) { echo "Права доступу |
";} else { echo "Не удалося змінити права доступу до файлу $file
";}// закриття з'єднанняftp_close($ftp);?> `

### Дивіться також

- [chmod()](function.chmod.md) - Змінює режим доступу до файлу

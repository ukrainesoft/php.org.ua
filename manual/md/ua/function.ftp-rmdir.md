- [«ftp_rename](function.ftp-rename.md)
- [ftp_set_option »](function.ftp-set-option.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Видаляє директорію

#ftp_rmdir

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_rmdir — Видаляє директорію

### Опис

**ftp_rmdir**([FTP\Connection](class.ftp-connection.md) `$ftp`, string
`$directory`): bool

Видаляє директорію `directory`.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`directory`
Ім'я директорії. Параметр повинен мати відносний або абсолютний
шлях до порожній директорії.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_rmdir()****

` <?php$dir u003d 'www/';// установка з'єднання$ftp u003d ftp_connect($ftp_server);// перевірка імені користувача і пароля$login_result u003d ftp_login($ftp, $ft видалення директорії $dirif (ftp_rmdir($ftp, $dir)) {    echo "Директорія $dir віддалена
";} else {    echo "Не удалося видалити директорію $dir
";}ftp_close($ftp);?> `

### Дивіться також

- [ftp_mkdir()](function.ftp-mkdir.md) - Створює директорію

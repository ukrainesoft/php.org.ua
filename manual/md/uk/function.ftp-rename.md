- [«ftp_rawlist](function.ftp-rawlist.md)
- [ftp_rmdir »] (function.ftp-rmdir.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Перейменовує файл або директорію на FTP-сервері

#ftp_rename

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_rename — Перейменовує файл або директорію на FTP-сервері

### Опис

**ftp_rename**([FTP\Connection](class.ftp-connection.md) `$ftp`,
string `$from`, string `$to`): bool

**ftp_rename()** перейменовує файл або директорію на FTP-сервері.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`from`
Старе ім'я файлу/директорії.

`to`
Нове ім'я.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. У разі виникнення помилки (наприклад
при спробі перейменувати неіснуючий файл) буде викликана помилка
рівня `E_WARNING`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_rename()****

` <?php$old_file u003d 'somefile.txt.bak';$new_file u003d 'somefile.txt';// установка з'єднання$ftp u003d ftp_connect($ftp_server);// перевірка імені користувача ftp, $ftp_user_name, $ftp_user_pass);// спроба перейменувати $olf_file в $new_fileif (ftp_rename($ftp, $old_file, $new_file)) { переменити 
";} else { echo "Не удалося перейменувати $old_file в $new_file
";}// закриття з'єднанняftp_close($ftp);?> `

- [«ftp_connect](function.ftp-connect.md)
- [ftp_exec »](function.ftp-exec.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Видаляє файл на FTP-сервері

#ftp_delete

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_delete — Видалення файлу на FTP-сервері

### Опис

**ftp_delete**([FTP\Connection](class.ftp-connection.md) `$ftp`,
string `$filename`): bool

**ftp_delete()** видаляє файл, заданий аргументом `filename`, з
FTP-сервер.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`filename`
Видалений файл.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_delete()****

` <?php$file u003d 'public_html/old.txt';// установка з'єднання$ftp u003d ftp_connect($ftp_server);// вхід з ім'ям користувача і паролем$login_result u003d ftp_ ;// спроба видалити файлif (ftp_delete($ftp, $file)) { echo "Файл $file віддалений
";} else { echo "Не удалося видалити $file
";}// закриття з'єднанняftp_close($ftp);?> `

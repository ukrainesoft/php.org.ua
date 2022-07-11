- [«ftp_exec](function.ftp-exec.md)
- [ftp_fput »](function.ftp-fput.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Завантажує файл з FTP-сервера і зберігає його попередньо
відкритому файлі

#ftp_fget

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_fget — Завантажує файл з FTP-сервера і зберігає його попередньо
відкритому файлі

### Опис

**ftp_fget**(
[FTP\Connection](class.ftp-connection.md) `$ftp`,
resource `$stream`,
string `$remote_filename`,
int `$mode` u003d **`FTP_BINARY`**,
int `$offset` u003d 0
): bool

**ftp_fget()** завантажує файл `remote_filename` з FTP-сервера та
записує його у переданий файловий дескриптор.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`stream`
Відкритий файловий дескриптор, у якому буде збережено дані.

`remote_filename`
Шлях до віддаленого файлу.

`mode`
Режим передачі. Має бути або **`FTP_ASCII`**, або **`FTP_BINARY`**.

`offset`
Позиція початку завантаження у віддаленому файлі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 7.3.0 | Тепер параметр `mode` опціональний. Раніше він був обов'язковим. |

### Приклади

**Приклад #1 Приклад використання **ftp_fget()****

`<?php//шлях до віддаленого файлу$remote_file u003d 'somefile.txt';$local_file u003d 'localfile.txt';// відкриваємо файл для запису$handle u003d fopen( ' з'єднання$ftp u003d ftp_connect($ftp_server);// вхід з іменем користувача і паролем$login_result u003d ftp_login($ftp, $ftp_user_name, $ftp_user_pass); $handle, $remote_file, FTP_ASCII, 0)) { echo "Зроблено запис в $local_file
";} else { echo "При завантаженні $remote_file в $local_file відбулася проблема
";}// закриття з'єднання і локального файлаftp_close($ftp);fclose($handle);?> `

### Дивіться також

- [ftp_get()](function.ftp-get.md) - Завантажує файл із FTP-сервера
- [ftp_nb_get()](function.ftp-nb-get.md) - Завантажує файл з
FTP-сервера в асинхронному режимі та зберігає його у локальний файл
- [ftp_nb_fget()](function.ftp-nb-fget.md) - Завантажує файл з
FTP-сервера в асинхронному режимі і зберігає його попередньо
відкритому файлі

- [«ftp_fget](function.ftp-fget.md)
- [ftp_get_option »](function.ftp-get-option.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Завантажує заздалегідь відкритий файл на FTP-сервер

#ftp_fput

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_fput — Завантажує попередньо відкритий файл на сервер FTP

### Опис

**ftp_fput**(
[FTP\Connection](class.ftp-connection.md) `$ftp`,
string `$remote_filename`,
resource `$stream`,
int `$mode` u003d **`FTP_BINARY`**,
int `$offset` u003d 0
): bool

**ftp_fput()** завантажує дані з файлового дескриптора у віддалений
файл на сервері FTP.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`remote_filename`
Шлях до віддаленого файлу.

`stream`
Відкритий файловий дескриптор локального файлу. Читання припиняється при
досягненні кінця файлу.

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

**Приклад #1 Приклад використання **ftp_fput()****

` <?php// відкрити файл для читання$file u003d 'somefile.txt';$fp u003d fopen($file, 'r');// установка з'єднання$ftp u003d ftp_connect($ftp_server);|/  користувача і паролем$login_result u003d ftp_login($ftp, $ftp_user_name, $ftp_user_pass);//?
";} else {    echo "При завантаженні $file відбулася проблема
";}// закриваємо з'єднання і дескриптор файлаftp_close($ftp);fclose($fp);?> `

### Дивіться також

- [ftp_put()](function.ftp-put.md) - Завантажує файл на сервер FTP
- [ftp_nb_fput()](function.ftp-nb-fput.md) - Завантажує
попередньо відкритий файл на FTP-сервер в асинхронному режимі
- [ftp_nb_put()](function.ftp-nb-put.md) - Завантажує файл на
FTP-сервер в асинхронному режимі

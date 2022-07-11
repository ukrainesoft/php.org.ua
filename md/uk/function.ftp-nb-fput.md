- [«ftp_nb_fget](function.ftp-nb-fget.md)
- [ftp_nb_get »](function.ftp-nb-get.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Завантажує попередньо відкритий файл на FTP-сервер в асинхронному
режимі

#ftp_nb_fput

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

ftp_nb_fput — Завантажує попередньо відкритий файл на FTP-сервер
асинхронному режимі

### Опис

**ftp_nb_fput**(
[FTP\Connection](class.ftp-connection.md) `$ftp`,
string `$remote_filename`,
resource `$stream`,
int `$mode` u003d **`FTP_BINARY`**,
int `$offset` u003d 0
): int

**ftp_nb_fput()** закачує дані з дескриптора файлу у віддалений
файл на сервері FTP.

Різниця між цією функцією та [ftp_fput()](function.ftp-fput.md)
полягає в тому, що ця функція завантажує файл асинхронно, так що
Ваша програма може виконувати інші операції, поки файл закачується.

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

Повертає **`FTP_FAILED`**, **`FTP_FINISHED`** або **`FTP_MOREDATA`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 7.3.0 | Тепер параметр `mode` опціональний. Раніше він був обов'язковим. |

### Приклади

**Приклад #1 Приклад використання **ftp_nb_fput()****

` <?php$file u003d 'index.php';$fp u003d fopen($file, 'r');$ftp u003d ftp_connect($ftp_server);$login_result u003d ftp_login($ftp, $ftp_user_name, $ftp_user // Початок завантаження$ret u003d ftp_nb_fput($ftp, $file, $fp, FTP_BINARY);while ($ret u003du003d FTP_MOREDATA) {   //  виробляємо                          // продовження завантаження ...   $ret u003d ftp_nb_continue($ftp);}if ($ret !u003d FTP_FINISHED) {   echo "При завантаженні файла відбулася" exit(1);}fclose($fp);?> `

### Дивіться також

- [ftp_nb_put()](function.ftp-nb-put.md) - Завантажує файл на
FTP-сервер в асинхронному режимі
- [ftp_nb_continue()](function.ftp-nb-continue.md) - Продовжує
асинхронну операцію
- [ftp_put()](function.ftp-put.md) - Завантажує файл на сервер FTP
- [ftp_fput()](function.ftp-fput.md) - Завантажує попередньо
відкритий файл на FTP-сервер

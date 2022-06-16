- [«ftp_nb_continue](function.ftp-nb-continue.md)
- [ftp_nb_fput »](function.ftp-nb-fput.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Завантажує файл з FTP-сервера в асинхронному режимі та зберігає його в
попередньо відкритому файлі

#ftp_nb_fget

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

ftp_nb_fget — Завантажує файл із FTP-сервера в асинхронному режимі та
зберігає його у попередньо відкритому файлі

### Опис

**ftp_nb_fget**(
[FTP\Connection](class.ftp-connection.md) `$ftp`,
resource `$stream`,
string `$remote_filename`,
int `$mode` u003d **`FTP_BINARY`**,
int `$offset` u003d 0
): int

**ftp_nb_fget()** завантажує віддалений файл із FTP-сервера.

Різниця між цією функцією та [ftp_fget()](function.ftp-fget.md)
полягає в тому, що ця функція отримує файл асинхронно, так що
Ваша програма може здійснювати інші операції, поки файл завантажується.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`stream`
Відкритий файловий дескриптор для збереження даних.

`remote_filename`
Шлях до віддаленого файлу.

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

**Приклад #1 Приклад використання **ftp_nb_fget()****

` <?php// відкрити файл для запису$file u003d 'index.php';$fp u003d fopen($file, 'w');$ftp u003d ftp_connect($ftp_server);$login_result u003d ftp_login($ft ftp_user_name, $ftp_user_pass); ; // продовження скачування ...   $ret u003d ftp_nb_continue($ftp);}if ($ret !u003d FTP_FINISHED) {   echo "При|завантаженні файлу відбулася..." exit(1);}// закриття файлаfclose($fp);?> `

### Дивіться також

- [ftp_nb_get()](function.ftp-nb-get.md) - Завантажує файл з
FTP-сервера в асинхронному режимі та зберігає його у локальний файл
- [ftp_nb_continue()](function.ftp-nb-continue.md) - Продовжує
асинхронну операцію
- [ftp_fget()](function.ftp-fget.md) - Завантажує файл із FTP-сервера
і зберігає його у попередньо відкритому файлі
- [ftp_get()](function.ftp-get.md) - Завантажує файл із FTP-сервера

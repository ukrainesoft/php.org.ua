- [«ftp_pasv](function.ftp-pasv.md)
- [ftp_pwd »](function.ftp-pwd.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Завантажує файл на FTP-сервер

#ftp_put

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_put — Завантажує файл на сервер FTP

### Опис

**ftp_put**(
[FTP\Connection](class.ftp-connection.md) `$ftp`,
string `$remote_filename`,
string `$local_filename`,
int `$mode` u003d **`FTP_BINARY`**,
int `$offset` u003d 0
): bool

**ftp_put()** завантажує локальний файл на сервер FTP.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`remote_filename`
Шлях до файлу на сервері FTP.

`local_filename`
Шлях до локального файлу.

`mode`
Визначає режим передачі. Може приймати значення **`FTP_ASCII`** або
**`FTP_BINARY`**.

`offset`
Задає позицію у віддаленому файлі, в яку розпочнеться завантаження

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 7.3.0 | Тепер параметр `mode` опціональний. Раніше він був обов'язковим. |

### Приклади

**Приклад #1 Приклад використання **ftp_put()****

` <?php$file u003d 'somefile.txt';$remote_file u003d 'readme.txt';// установка з'єднання$ftp u003d ftp_connect($ftp_server);// перевірка імені користувача і $$ $ftp_user_name, $ftp_user_pass);// завантаження файлаif (ftp_put($ftp, $remote_file, $file, FTP_ASCII)) { echo "$file успішно завантажений на сер
";} else { echo "Не удалося завантажити $file на сервер
";}// закриття з'єднанняftp_close($ftp);?> `

### Дивіться також

- [ftp_pasv()](function.ftp-pasv.md) - Вмикає або вимикає
пасивний режим
- [ftp_fput()](function.ftp-fput.md) - Завантажує попередньо
відкритий файл на FTP-сервер
- [ftp_nb_fput()](function.ftp-nb-fput.md) - Завантажує
попередньо відкритий файл на FTP-сервер в асинхронному режимі
- [ftp_nb_put()](function.ftp-nb-put.md) - Завантажує файл на
FTP-сервер в асинхронному режимі

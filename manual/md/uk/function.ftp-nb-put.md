- [«ftp_nb_get](function.ftp-nb-get.md)
- [ftp_nlist »](function.ftp-nlist.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Завантажує файл на FTP-сервер в асинхронному режимі

#ftp_nb_put

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

ftp_nb_put — Завантажує файл на FTP-сервер в асинхронному режимі

### Опис

**ftp_nb_put**(
[FTP\Connection](class.ftp-connection.md) `$ftp`,
string `$remote_filename`,
string `$local_filename`,
int `$mode` u003d **`FTP_BINARY`**,
int `$offset` u003d 0
): int\|false

**ftp_nb_put()** завантажує локальний файл на сервер FTP.

Відмінність цієї функції від [ftp_put()](function.ftp-put.md) полягає в
те, що завантаження файлу відбувається в асинхронному режимі, що дозволяє
програмі виконувати інші операції під час завантаження.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`remote_filename`
Дорога до файлу на сервері.

`local_file`
Шлях до локального файлу.

`mode`
Режим передачі. Може приймати значення **`FTP_ASCII`** або
**`FTP_BINARY`**.

`offset`
Позиція у віддаленому файлі, в яку починається завантаження

### Значення, що повертаються

Повертає **`FTP_FAILED`**, **`FTP_FINISHED`** або **`FTP_MOREDATA`**
або **`false`** у разі неможливості відкрити локальний файл.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 7.3.0 | Тепер параметр `mode` опціональний. Раніше він був обов'язковим. |

### Приклади

**Приклад #1 Приклад використання **ftp_nb_put()****

` <?php// Початок завантаження$ret u003d ftp_nb_put($ftp, "test.remote", "test.local", FTP_BINARY);while ($ret u003du003d FTP_MOREDATA) {     echo "."; // Продовження завантаження ...   $ret u003d ftp_nb_continue($ftp);}if ($ret !u003d FTP_FINISHED) {   echo "При завантаженні файлу відбулася..." exit(1);}?> `

**Приклад #2 Відновлення завантаження файлу за допомогою **ftp_nb_put()****

` <?php// Начало загрузки$ret u003d ftp_nb_put($ftp, "test.remote", "test.local",                      FTP_BINARY, ftp_size("test.remote"));// ИЛИ: $ret u003d ftp_nb_put($ ftp, "test.remote", "test.local",//                           FTP_BINARY, FTP_AUTORESUME);while ($ret u003du003d FTP_MOREDATA) {   // Производим какие-то действия ...   echo "."; // Продовження завантаження ...   $ret u003d ftp_nb_continue($ftp);}if ($ret !u003d FTP_FINISHED) {   echo "При завантаженні файлу відбулася..." exit(1);}?> `

### Дивіться також

- [ftp_nb_fput()](function.ftp-nb-fput.md) - Завантажує
попередньо відкритий файл на FTP-сервер в асинхронному режимі
- [ftp_nb_continue()](function.ftp-nb-continue.md) - Продовжує
асинхронну операцію
- [ftp_put()](function.ftp-put.md) - Завантажує файл на сервер FTP
- [ftp_fput()](function.ftp-fput.md) - Завантажує попередньо
відкритий файл на FTP-сервер

- [«ftp_nb_fput](function.ftp-nb-fput.md)
- [ftp_nb_put »](function.ftp-nb-put.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Завантажує файл з FTP-сервера в асинхронному режимі та зберігає його в
локальний файл

#ftp_nb_get

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

ftp_nb_get — Завантажує файл із FTP-сервера в асинхронному режимі та
зберігає його у локальний файл

### Опис

**ftp_nb_get**(
[FTP\Connection](class.ftp-connection.md) `$ftp`,
string `$local_filename`,
string `$remote_filename`,
int `$mode` u003d **`FTP_BINARY`**,
int `$offset` u003d 0
): int

**ftp_nb_get()** завантажує віддалений файл з FTP-сервера та зберігає його
у локальний файл.

Різниця між цією функцією та [ftp_get()](function.ftp-get.md)
полягає в тому, що ця функція отримує файл асинхронно, так що
Ваша програма може здійснювати інші операції, поки файл завантажується.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`local_filename`
Шлях до локального файлу (файл буде перезаписано, якщо існує).

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

**Приклад #1 Приклад використання **ftp_nb_get()****

`<?php//Початок скачування$ret u003d ftp_nb_get($ftp, "test", "README", FTP_BINARY);while ($ret u003du003d FTP_MOREDATA) { ...            ; // Продовження завантажування ...   $ret u003d ftp_nb_continue($ftp);}if ($ret !u003d FTP_FINISHED) {   echo "При¦скачуванні файлу відбулася..."; exit(1);}?> `

**Приклад #2 Відновлення завантаження файлу за допомогою **ftp_nb_get()****

` <?php// Начало скачивания$ret u003d ftp_nb_get($ftp, "test", "README", FTP_BINARY,                      filesize("test"));// ИЛИ: $ret u003d ftp_nb_get($ftp, "test", "README",//   FTP_BINARY, FTP_AUTORESUME);while|($ret u003du003d FTP // Продовження завантажування ...   $ret u003d ftp_nb_continue($ftp);}if ($ret !u003d FTP_FINISHED) {   echo "При¦скачуванні файлу відбулася..."; exit(1);}?> `

**Приклад #3 Завантаження файлу починаючи з позиції 100 в новий файл з
допомогою **ftp_nb_get()****

` <?php// Заборона FTP_AUTOSEEKftp_set_option($ftp, FTP_AUTOSEEK, false);// Початок завантаження {   /* ... */   // Продовження скачування ...   $ret u003d ftp_nb_continue($ftp);}?> `

В останньому прикладі, `newfile` буде на 100 байт менше, ніж `README` на
FTP-сервер, тому що завантаження починається зі зміщення 100. Якщо не
заборонити **`FTP_AUTOSEEK`**, перші 100 байт файлу `newfile` будуть
містити `````.

### Дивіться також

- [ftp_nb_fget()](function.ftp-nb-fget.md) - Завантажує файл з
FTP-сервера в асинхронному режимі і зберігає його попередньо
відкритому файлі
- [ftp_nb_continue()](function.ftp-nb-continue.md) - Продовжує
асинхронну операцію
- [ftp_fget()](function.ftp-fget.md) - Завантажує файл із FTP-сервера
і зберігає його у попередньо відкритому файлі
- [ftp_get()](function.ftp-get.md) - Завантажує файл із FTP-сервера

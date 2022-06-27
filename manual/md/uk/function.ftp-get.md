- [«ftp_get_option](function.ftp-get-option.md)
- [ftp_login »](function.ftp-login.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Завантажує файл із FTP-сервера

#ftp_get

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_get — Завантажує файл із FTP-сервера

### Опис

**ftp_get**(
[FTP\Connection](class.ftp-connection.md) `$ftp`,
string `$local_filename`,
string `$remote_filename`,
int `$mode` u003d **`FTP_BINARY`**,
int `$offset` u003d 0
): bool

**ftp_get()** завантажує віддалений файл з FTP-сервера та зберігає його
локально.

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

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 7.3.0 | Тепер параметр `mode` опціональний. Раніше він був обов'язковим. |

### Приклади

**Приклад #1 Приклад використання **ftp_get()****

` <?php// оголошення змінних$local_file u003d 'local.zip';$server_file u003d 'server.zip';// установка з'єднання$conn_id u003d ftp_connect($ftp_server);// вхід з імен ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);
";} else {    echo "Не удалося завершити операцію
";}// закриття з'єднанняftp_close($conn_id);?> `

### Дивіться також

- [ftp_pasv()](function.ftp-pasv.md) - Вмикає або вимикає
пасивний режим
- [ftp_fget()](function.ftp-fget.md) - Завантажує файл із FTP-сервера
і зберігає його у попередньо відкритому файлі
- [ftp_nb_get()](function.ftp-nb-get.md) - Завантажує файл з
FTP-сервера в асинхронному режимі та зберігає його у локальний файл
- [ftp_nb_fget()](function.ftp-nb-fget.md) - Завантажує файл з
FTP-сервера в асинхронному режимі і зберігає його попередньо
відкритому файлі

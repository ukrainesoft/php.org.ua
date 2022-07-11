- [«ftp_site](function.ftp-site.md)
- [ftp_ssl_connect »](function.ftp-ssl-connect.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Повертає розмір вказаного файлу

#ftp_size

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_size — Повертає розмір вказаного файлу

### Опис

**ftp_size**([FTP\Connection](class.ftp-connection.md) `$ftp`, string
`$filename`): int

**ftp_size()** повертає розмір заданого файлу у байтах.

> **Примітка**:
>
> Не всі сервери FTP підтримують цю можливість.

### Список параметрів

`ftp`
An [FTP\Connection](class.ftp-connection.md) instance.

`filename`
Ім'я файлу на сервері.

### Значення, що повертаються

Повертає розмір файлу або -1 у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.1.0 | Параметр `ftp` тепер чекає на екземпляр [FTP\Connection](class.ftp-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_size()****

` <?php$file u003d 'somefile.txt';// установка з'єднання$ftp u003d ftp_connect($ftp_server);// перевірка імені пользователя і пароля$login_result u003d ftp_login($ft$ отримання|розміру| file";}// закриття з'єднанняftp_close($ftp);?> `

### Дивіться також

- [ftp_rawlist()](function.ftp-rawlist.md) - Повертає докладний
список файлів у заданій директорії

- [«ftp_close](function.ftp-close.md)
- [ftp_delete »] (function.ftp-delete.md)

- [PHP Manual](index.md)
- [Функції FTP](ref.ftp.md)
- Встановлює з'єднання з сервером FTP

#ftp_connect

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_connect — Встановлює з'єднання з сервером FTP

### Опис

**ftp_connect**(string `$hostname`, int `$port` u003d 21, int `$timeout` u003d
90): [FTP\Connection](class.ftp-connection.md)\|false

**ftp_connect()** встановлює FTP-з'єднання із вказаним сервером
`hostname`.

### Список параметрів

`hostname`
Адреса FTP-сервера. Цей аргумент не повинен містити слішків наприкінці
префіксу `ftp://` на початку.

`port`
Цей аргумент вказує на альтернативний порт для підключення. Якщо він
опущений або встановлений в нуль, то буде використаний FTP порт
замовчуванням - 21.

`timeout`
Цей аргумент вказує час очікування в секундах для всіх наступних
мережевих операцій. Якщо опущено, використовується значення за промовчанням - 90
секунд. Час очікування може бути змінено та отримано у будь-який момент при
за допомогою функцій [ftp_set_option()](function.ftp-set-option.md) та
[ftp_get_option()](function.ftp-get-option.md) відповідно.

### Значення, що повертаються

Повертає [FTP\Connection](class.ftp-connection.md) у разі
успішного виконання або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------------------------|
| 8.1.0 | Повертає екземпляр [FTP\Connection](class.ftp-connection.md); раніше повертався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **ftp_connect()****

`<?php$ftp_server u003d "ftp.example.com";// встановлює з'єднання або виходить$ftp u003d ftp_connect($ftp_server) or die("Не удалося встановити з'єднання$ftp_server")

### Дивіться також

- [ftp_close()](function.ftp-close.md) - Закриває з'єднання з
FTP-сервером
- [ftp_ssl_connect()](function.ftp-ssl-connect.md) - Встановлює
з'єднання з FTP-сервером через SSL

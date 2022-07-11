- [« Функціонал, оголошений застарілим у PHP
7.2.x](migration72.deprecated.md)
- [Міграція з PHP 7.0.x на PHP 7.1.x »](migration71.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.1.x на PHP 7.2.x](migration72.md)
- Інші зміни

## Інші зміни

### Переміщення [utf8_encode()](function.utf8-encode.md) та [utf8_decode()](function.utf8-decode.md)

Функції [utf8_encode()](function.utf8-encode.md) та
[utf8_decode()](function.utf8-decode.md) були переміщені у стандартну
бібліотеку як функції роботи з рядками. У попередніх
версіях для їх використання необхідно встановити модуль
[XML] (book.xml.md).

### Зміни [mail()](function.mail.md) та [mb_send_mail()](function.mb-send-mail.md)

Параметр $additional_headers функцій [mail()](function.mail.md) та
[mb_send_mail()](function.mb-send-mail.md) тепер також приймає
масив (array) замість рядка (string).

### Підтримка LMDB

Модуль [DBA](book.dba.md) отримав підтримку LMDB.

### Зміни в системі складання PHP

- Unix: Тепер для збирання PHP потрібно autoconf 2.64 або вище.
- Unix: Для параметра конфігурації `--with-pdo-oci` більше не потрібно
вказувати версію Oracle Instant Client.
- Unix: Видалений параметр конфігурації `--enable-gd-native-ttf`. Він не
використовувався з PHP 5.5.0.
- Windows: Доданий параметр конфігурації `--with-config-profile`. Він
може використовуватися для збереження певних конфігурацій, таких
як магічний файл `config.nice.bat`.

### Зміни в [GD](book.image.md)

- Тепер функція [imageantialias()](function.imageantialias.md)
доступна при компіляції із системною бібліотекою libgd.
- Функція [imagegd()](function.imagegd.md) зберігає
truecolor-зображення як справжні truecolor-зображення. Раніше вони
перетворювалися на зображення з фіксованою палітрою.

### Переміщення [MCrypt](book.mcrypt.md) до PECL

Модуль [MCrypt](book.mcrypt.md) був вилучений з ядра PHP і переміщений в
PECL. Бібліотека mcrypt не оновлювалася з 2007 року та використовувати її
украй не рекомендується. Замість неї використовуйте модуль
[OpenSSL](book.openssl.md) або [Sodium](book.sodium.md).

### [session_module_name()](function.session-module-name.md)

Передача значення ``user'` в опцію
[session_module_name()](function.session-module-name.md) тепер
призведе до помилки рівня **`E_RECOVERABLE_ERROR`**. Раніше це просто
ігнорувалося.

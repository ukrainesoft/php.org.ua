- [«PDO_DBLIB DSN](ref.pdo-dblib.connection.md)
- [PDO_FIREBIRD DSN »](ref.pdo-firebird.connection.md)

- [PHP Manual](index.md)
- [Драйвери PDO](pdo.drivers.md)
- Функції Firebird (PDO_FIREBIRD)

# Функції Firebird (PDO_FIREBIRD)

## Вступ

PDO_FIREBIRD - драйвер, що реалізує інтерфейс PHP Data Objects (PDO) для
доступу до баз даних Firebird.

## Установка

Для встановлення модуля PDO Firebird використовуйте опцію
**--with-pdo-firebird\[u003dDIR\]**, де `[u003dDIR]` вказує на директорію
установки Firebird.

$ ./configure --with-pdo-firebird

## Зумовлені константи

Наведені нижче константи визначені даним драйвером і будуть
доступні лише у випадку, якщо PHP був зібраний за допомогою цього модуля,
або цей модуль був динамічно завантажений під час виконання.
До того ж, ці залежні від драйвера константи мають бути використані
тільки разом із цим драйвером. Використання атрибутів, специфічних
для деякого драйвера з іншим драйвером може спричинити несподіване
поведінка. Якщо ваш код виконується з кількома драйверами, можна
використовувати функцію [PDO::getAttribute()](pdo.getattribute.md) для
отримання атрибута **`PDO::ATTR_DRIVER_NAME`** для перевірки драйвера.

**`PDO::FB_ATTR_DATE_FORMAT`** (int)
встановлює формат дати.

**`PDO::FB_ATTR_TIME_FORMAT`** (int)
Встановлює формат часу.

**`PDO::FB_ATTR_TIMESTAMP_FORMAT`** (int)
Встановлює формат тимчасової позначки.

## Зміст

- [PDO_FIREBIRD DSN](ref.pdo-firebird.connection.md) — З'єднання з
базою Firebird

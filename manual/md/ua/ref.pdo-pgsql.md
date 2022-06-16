- [«PDO_ODBC DSN](ref.pdo-odbc.connection.md)
- [PDO_PGSQL DSN »](ref.pdo-pgsql.connection.md)

- [PHP Manual](index.md)
- [Драйвери PDO](pdo.drivers.md)
- Функції PostgreSQL (PDO_PGSQL)

# Функції PostgreSQL (PDO_PGSQL)

## Вступ

PDO_PGSQL – це драйвер, що реалізує інтерфейс [PHP Data Objects
(PDO)](intro.pdo.md) для доступу до баз даних PostgreSQL.

## Типи ресурсів

Цей модуль визначає потоковий ресурс, що повертається
[PDO::pgsqlLOBOpen()](pdo.pgsqllobopen.md).

## Установка

Для встановлення модуля PDO PostgreSQL використовуйте опцію
**--with-pdo-pgsql\[u003dDIR\]**, де `[u003dDIR]` - необов'язкове значення,
що вказує на директорію установки бази PostgreSQL або шлях до
*pg_config*.

$ ./configure --with-pdo-pgsql

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

**`PDO::PGSQL_ATTR_DISABLE_PREPARES`** (int)
Надішліть запит і параметри на сервер разом за один виклик, уникаючи
необхідності окремо створювати іменований підготовлений оператор.
Якщо запит буде виконуватись лише один раз, це може зменшити
затримки, уникаючи непотрібного обходу сервера.

## Загальні зауваження

> **Примітка**:
>
> Поля `bytea` повертаються як потоки.

## Зміст

- [PDO_PGSQL DSN](ref.pdo-pgsql.connection.md) — З'єднання з базою
даних PostgreSQL
- [PDO::pgsqlCopyFromArray](pdo.pgsqlcopyfromarray.md) — Копіювати
масив PHP до таблиці
- [PDO::pgsqlCopyFromFile](pdo.pgsqlcopyfromfile.md) — Скопіювати
дані з файлу до таблиці
- [PDO::pgsqlCopyToArray](pdo.pgsqlcopytoarray.md) — Вивантажити
дані з таблиці до масиву PHP
- [PDO::pgsqlCopyToFile](pdo.pgsqlcopytofile.md) — Вивантаження таблиці
у файл
- [PDO::pgsqlGetNotify](pdo.pgsqlgetnotify.md) — Отримати
асинхронне повідомлення
- [PDO::pgsqlGetPid](pdo.pgsqlgetpid.md) — Отримує PID сервера
- [PDO::pgsqlLOBCreate](pdo.pgsqllobcreate.md) — Створити новий
великий об'єкт (LOB)
- [PDO::pgsqlLOBOpen](pdo.pgsqllobopen.md) — Відкриває потік для
існуючого великого об'єкту
- [PDO::pgsqlLOBUnlink](pdo.pgsqllobunlink.md) — Видалити великий
об'єкт

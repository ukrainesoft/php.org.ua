- [« pg_connect_poll](function.pg-connect-poll.md)
- [pg_connection_busy »](function.pg-connection-busy.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Відкриває з'єднання з базою даних PostgreSQL

#pg_connect

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_connect — Відкриває з'єднання з базою даних PostgreSQL

### Опис

**pg_connect**(string `$connection_string`, int `$flags` u003d 0):
[PgSql\Connection](class.pgsql-connection.md)\|false

**pg_connect()** відкриває з'єднання з базою даних PostgreSQL,
визначений рядком `connection_string`.

При повторному виклику функції **pg_connect()** з тими самими значеннями
параметрів в `connection_string` функція поверне існуюче
підключення. Щоб примусово створити нове з'єднання, необхідно
передати рядок підключення функції **`PGSQL_CONNECT_FORCE_NEW`**
як параметр `flags`.

Колишній синтаксис із безліччю параметрів **$conn u003d pg_connect("host",
"port", "options", "tty", "dbname")** вважається застарілим.

### Список параметрів

`connection_string`
Рядок `connection_string` може бути порожнім рядком або містити
кілька параметрів, розділених пробілами. Кожен параметр вказується
як `keywordu003dvalue`. Прогалини навколо знака "рівно" необов'язкові.
Порожні рядки як значення або значення, що містять пробіли
відокремлюються одинарними лапками, як, наприклад, `keyword u003d 'a value'`.
Для запису одинарних лапок і зворотних слішів як значення, їх
необхідно екранувати зворотним слішем, тобто \' і \\.

Список основних ключових слів: `host`, `hostaddr`, `port`, `dbname`
(значення за замовчуванням для параметра `user`), `user`, `password`,
`connect_timeout`, `options`, `tty` (ігнорується), `sslmode`,
`requiressl` (застаріло у зв'язку з використанням параметра `sslmode`), та
`Service`. Які з цих аргументів буде оброблено, залежить від версії
PostgreSQL.

Параметр `options` служить для встановлення параметрів командного рядка,
які оброблені сервером.

`flags`
Якщо у функцію передано константу **`PGSQL_CONNECT_FORCE_NEW`**, буде
створювати нове підключення, навіть якщо `connection_string` ідентична
рядку існуючого підключення.

Якщо передана константа **`PGSQL_CONNECT_ASYNC`**, то з'єднання
встановлюється асинхронним. Стан з'єднання можна перевірити з
за допомогою функцій [pg_connect_poll()](function.pg-connect-poll.md) або
[pg_connection_status()](function.pg-connection-status.md).

### Значення, що повертаються

Повертає екземпляр [PgSql\Connection](class.pgsql-connection.md)
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- |
| 8.1.0 | Повертає екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше повертався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Використання функції **pg_connect()****

`<?php$dbconn u003d pg_connect("dbnameu003dmary");//підключитися к базі "mary"$dbconn2 u003d pg_connect("hostu003dlocalhost portu003d5432 dbnameu003dmary");//підключитися к базе на хості "localhost", порт "5432"$dbconn3 u003d pg_connect("hostu003dsheep portu003d5432 dbnameu003dmary useru003dlamb passwordu003dfoo"); користувача і пароль$conn_string u003d "hostu003dsheep portu003d5432 dbnameu003dtest useru003dlamb passwordu003dbar";$dbconn4 u003d pg_connect($conn_string);//підключитися к базе я і пароль$dbconn5 u003d pg_connect("hostu003dlocalhost optionsu003d'--client_encodingu003dUTF8'");//підключитися к базі на хості "localhost" і передати параметр командного рядки, <8>

### Дивіться також

- [pg_pconnect()](function.pg-pconnect.md) - Відкриває постійне
з'єднання з сервером PostgreSQL
- [pg_close()](function.pg-close.md) - Закриває з'єднання з базою
даних PostgreSQL
- [pg_host()](function.pg-host.md) - Повертає ім'я хоста,
відповідного підключення
- [pg_port()](function.pg-port.md) - Повертає номер порту,
відповідний заданому з'єднанню
- [pg_tty()](function.pg-tty.md) - Повертає ім'я терміналу TTY,
пов'язане зі з'єднанням
- [pg_options()](function.pg-options.md) - Отримання параметрів
з'єднання з сервером баз даних
- [pg_dbname()](function.pg-dbname.md) - Визначає ім'я бази даних

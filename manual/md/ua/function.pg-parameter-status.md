- [«pg_options](function.pg-options.md)
- [pg_pconnect »](function.pg-pconnect.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Перегляд поточних значень параметрів сервера

#pg_parameter_status

(PHP 5, PHP 7, PHP 8)

pg_parameter_status — Перегляд поточних значень параметрів сервера

### Опис

**pg_parameter_status**([PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d ?, string `$param_name`): string

Отримує поточне значення параметра сервера.

Значення деяких параметрів сервер повідомляє автоматично
встановлення підключення або зміни даних значень. Функція
**pg_parameter_status()** може вимагати подібні значення. Вона
повертає значення параметра, якщо воно визначено, або **`false`**
у разі виникнення помилки.

Список параметрів серверів PostgreSQL версій 8.0 та вище:
`server_version`, `server_encoding`, `client_encoding`, `is_superuser`,
`session_authorization`, `DateStyle`, `TimeZone`, та `integer_datetimes`.
(`server_encoding`, `TimeZone`, та `integer_datetimes` не визначаються
для версій нижче 8.0.) Варто зазначити, що значення `server_version`,
`server_encoding` та `integer_datetimes` не можна змінити після запуску
PostgreSQL.

Незважаючи на те, що PostgreSQL версій 7.3 і нижче не повідомляють значень
своїх параметрів, **pg_parameter_status()** дозволяє визначити
значення параметрів `server_version` та `client_encoding`. Для
визначення значень цих параметрів краще використовувати
**pg_parameter_status()**, ніж спеціально розробляти інші
функції.

**Застереження**

Якщо під час використання сервера PostgreSQL версій 7.4 і нижче змінити
параметр `client_encoding` за допомогою команди сервера `SET` вже після
установки з'єднання, функція **pg_parameter_status()** не зможе
відобразити цей факт.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md). Якщо
`connection` не вказано, використовується стандартне з'єднання.
З'єднання за замовчуванням - це останнє з'єднання, виконане з
за допомогою функцій [pg_connect()](function.pg-connect.md) або
[pg_pconnect()](function.pg-pconnect.md).

**Увага**
Починаючи з версії PHP 8.1.0, використання стандартного з'єднання
застаріло.

`param_name`
Допустимі значення аргументу: `server_version`, `server_encoding`,
`client_encoding`, `is_superuser`, `session_authorization`, `DateStyle`,
`TimeZone` та `integer_datetimes`. Зверніть увагу, що це значення
чутливо до регістру.

### Значення, що повертаються

Значення запитуваного параметра у вигляді рядка, або **`false`**, якщо
переданий неприпустимий параметр.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_parameter_status()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Неможливо з'єднатися з сервером"); echo "Кодування сервера: ", pg_parameter_status($dbconn, "server_encoding");?> `

Результат виконання цього прикладу:

Кодування сервера: SQL_ASCII

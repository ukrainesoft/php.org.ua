- [« pg_escape_bytea](function.pg-escape-bytea.md)
- [pg_escape_literal »](function.pg-escape-literal.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Екранує ідентифікатор для вставки у текстове поле

#pg_escape_identifier

(PHP 5 \>u003d 5.4.4, PHP 7, PHP 8)

pg_escape_identifier — Екранує ідентифікатор для вставлення тексту
поле

### Опис

**pg_escape_identifier**([PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d ?, string `$data`): string

**pg_escape_identifier()** екранує ідентифікатор (наприклад, таблицю,
імена полів) для виконання запиту до бази. Повертає екранований
ідентифікатор рядка для сервера PostgreSQL **pg_escape_identifier()**
додає подвійні лапки до та після даних. Користувачі не повинні
додавати подвійні лапки. Використання цієї функції рекомендується для
параметрів ідентифікаторів у запитах Для SQL-літералів (тобто
параметрів, крім bytea) необхідно використовувати
[pg_escape_literal()](function.pg-escape-literal.md) або
[pg_escape_string()](function.pg-escape-string.md). Для типу поля
bytea потрібно використовувати
[pg_escape_bytea()](function.pg-escape-bytea.md).

> **Примітка**:
>
> Ця функція має внутрішній код екранування і може бути
> використана з PostgreSQL 8.4 та нижче.

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

`data`
Рядок (string), що містить текст, який має бути екранований.

### Значення, що повертаються

Рядок (string), що містить екрановані дані.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад виконання **pg_escape_identifier()****

`<?php  // Встановити з'єднання з базою даних  $dbconn u003d pg_connect('dbnameu003dfoo'); // Екранувати дані імені таблиці  $escaped u003d pg_escape_identifier($table_name); // Вибрати рядки із $table_name  pg_query("SELECT * FROM {$escaped};");?> `

### Дивіться також

- [pg_escape_literal()](function.pg-escape-literal.md) -
Екранувати літерал при вставці у текстове поле
- [pg_escape_bytea()](function.pg-escape-bytea.md) - Екранує
спецсимволи в рядку для вставки в поле типу bytea
- [pg_escape_string()](function.pg-escape-string.md) - Екранування
спецсимволів у рядку запиту

- [« pg_escape_identifier](function.pg-escape-identifier.md)
- [pg_escape_string »](function.pg-escape-string.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Екранувати літерал при вставці у текстове поле

#pg_escape_literal

(PHP 5 \>u003d 5.4.4, PHP 7, PHP 8)

pg_escape_literal — Екранувати літерал під час вставлення в текстове поле

### Опис

**pg_escape_literal**([PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d ?, string `$data`): string

Функція **pg_escape_literal()** екранує літерал на запит бази
даних PostgreSQL. Вона повертає екранований літерал у форматі
PostgreSQL. **pg_escape_literal()** додає лапки до та після даних.
Користувачі не повинні додавати лапки. Рекомендується використовувати цю
функцію замість [pg_escape_string()](function.pg-escape-string.md).
Якщо тип стовпця – bytea, замість нього слід використовувати
[pg_escape_bytea()](function.pg-escape-bytea.md). Для екранування
ідентифікаторів (наприклад, таблиці, імен полів) необхідно використовувати
[pg_escape_identifier()](function.pg-escape-identifier.md).

> **Примітка**:
>
> Ця функція має внутрішній код екранування і може також
> використовуватися з PostgreSQL 8.4 або молодшою версією.

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
Рядок (string), що містить текст для екранування.

### Значення, що повертаються

Рядок (string), що містить екранований текст.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_escape_literal()****

`<?php  // Підключення к базі даних $dbconn u003d pg_connect('dbnameu003dfoo'); // Читання з текстового файла (містить апострофи і зворотні косі риси) $data u003d file_get_contents('letter.txt'); // Екранування текстових даних $escaped u003d pg_escape_literal($data); // Вставка их в базу даних. Зверніть увагу, що навколо u003d $escaped} немає лапок pg_query ("INSERT INTO correspondence (name, data) VALUES ('My letter', {$escaped})");?> ``

### Дивіться також

- [pg_escape_identifier()](function.pg-escape-identifier.md) -
Екранує ідентифікатор для вставки у текстове поле
- [pg_escape_bytea()](function.pg-escape-bytea.md) - Екранує
спецсимволи в рядку для вставки в поле типу bytea
- [pg_escape_string()](function.pg-escape-string.md) - Екранування
спецсимволів у рядку запиту

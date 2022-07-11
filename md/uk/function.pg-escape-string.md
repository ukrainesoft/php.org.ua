- [« pg_escape_literal](function.pg-escape-literal.md)
- [pg_execute »](function.pg-execute.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Екранування спецсимволів у рядку запиту

#pg_escape_string

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_escape_string — Екранування спецсимволів у рядку запиту

### Опис

**pg_escape_string**([PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d ?, string `$data`): string

Функція **pg_escape_string()** екранує спецсимволи у рядку запиту
бази даних. Вона повертає екранований рядок у форматі
PostgreSQL. Функція **pg_escape_string()** є найбільш
кращим способом екранування SQL параметрів для PostgreSQL,
тоді як [addslashes()](function.addslashes.md) не повинна
використовуватися з PostgreSQL. Якщо тип стовпця bytea, то має
використовуватися функція
[pg_escape_bytea()](function.pg-escape-bytea.md) замість
pg_escape_string. Функція
[pg_escape_identifier()](function.pg-escape-identifier.md) має
використовуватись для екранування ідентифікаторів (наприклад, імена таблиць
або полів).

> **Примітка**:
>
> Функція підтримується PostgreSQL версії 7.2 та вище.

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
Вихідний рядок, що екранується.

### Значення, що повертаються

Повертає рядок, де екрановані всі необхідні символи.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_escape_string()****

`<?php  // Підключення к базі даних $dbconn u003d pg_connect('dbnameu003dfoo'); // Читання текстового файла (що містить апострофи і зворотні сліши)  $data u003d file_get_contents('letter.txt'); // Екранування спецсимволів у рядку  $escaped u003d pg_escape_string($data); // Вставка в таблицю бази даних  pg_query("INSERT INTO correspondence (name, data) VALUES ('My letter', '{$escaped}')");?> `

### Дивіться також

- [pg_escape_bytea()](function.pg-escape-bytea.md) - Екранує
спецсимволи в рядку для вставки в поле типу bytea

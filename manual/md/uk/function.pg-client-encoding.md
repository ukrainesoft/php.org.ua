- [« pg_cancel_query](function.pg-cancel-query.md)
- [pg_close »](function.pg-close.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- отримання кодування клієнта.

#pg_client_encoding

(PHP 4 \>u003d 4.0.3, PHP 5, PHP 7, PHP 8)

pg_client_encoding — отримання кодування клієнта.

### Опис

**pg_client_encoding**(?[PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d **`null`**): string

PostgreSQL підтримує автоматичне перетворення наборів символів
між сервером та клієнтом для деяких кодувань.
**pg_client_encoding()** повертає клієнтське кодування у вигляді рядка,
стандартний ідентифікатор кодування PostgreSQL.

> **Примітка**:
>
> Для роботи функції потрібна PostgreSQL версія 7.0 або вище. В разі,
> якщо libpg скомпільована без підтримки багатобайтових кодувань,
> **pg_client_encoding()** завжди повертає `SQL_ASCII`. Набір
> підтримуваних кодувань залежить від версії сервера БД і описаний в
> документації PostgreSQL.
>
> Функція для дзвінка: **pg_clientencoding()**.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md). Якщо параметр
`connection` вказано **`null`**, використовується з'єднання за замовчуванням.
З'єднання за замовчуванням - це останнє з'єднання, виконане з
за допомогою функцій [pg_connect()](function.pg-connect.md) або
[pg_pconnect()](function.pg-pconnect.md).

**Увага**
Починаючи з версії PHP 8.1.0, використання стандартного з'єднання
застаріло.

### Значення, що повертаються

Клієнтське кодування.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `connection` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_client_encoding()****

`<?php// Припустимо, що $conn - з'єднання з базою даних, підтримуючою стандарт ISO-8859-1$encodingu003du003dpg_client_encoding($conn);echo "Кодування    
";?> `

Результат виконання цього прикладу:

Кодування клієнта: ISO-8859-1

### Дивіться також

- [pg_set_client_encoding()](function.pg-set-client-encoding.md) -
Встановлює клієнтське кодування

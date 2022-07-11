- [« pg_client_encoding](function.pg-client-encoding.md)
- [pg_connect_poll »](function.pg-connect-poll.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Закриває з'єднання з базою даних PostgreSQL

#pg_close

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_close — Закриває з'єднання з базою даних PostgreSQL

### Опис

**pg_close**(?[PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d **`null`**): bool

**pg_close()** закриває звичайне (непостійне) з'єднання з базою
даних PostgreSQL, що відповідає екземпляру `connection`.

> **Примітка**:
>
> Використання **pg_close()**, як правило, необов'язково, оскільки
> непостійні з'єднання закриваються автоматично після завершення
> Скрипт роботи.

Якщо зі з'єднанням працюють екземпляри
[PgSql\Lob](class.pgsql-lob.md), то перед закриттям з'єднання
необхідно закрити всі екземпляри [PgSql\Lob](class.pgsql-lob.md).

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

Функція завжди повертає **`true`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `connection` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_close()****

` <?php$dbconn u003d pg_connect("hostu003dlocalhost portu003d5432 dbnameu003dmary")  or die("Неможливо підключитися к БД");echo "Успішно підключено к БД";

Результат виконання цього прикладу:

Успішно підключено до БД

### Дивіться також

- [pg_connect()](function.pg-connect.md) - Відкриває з'єднання з
базою даних PostgreSQL

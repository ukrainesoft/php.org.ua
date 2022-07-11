- [«pg_prepare](function.pg-prepare.md)
- [pg_query_params »](function.pg-query-params.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Передає на PostgreSQL сервер рядок із завершальним нулем

#pg_put_line

(PHP 4 \>u003d 4.0.3, PHP 5, PHP 7, PHP 8)

pg_put_line — Передає на PostgreSQL сервер рядок із завершальним нулем

### Опис

**pg_put_line**([PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d ?, string `$data`): bool

**pg_put_line()** передає на PostgreSQL сервер рядок із завершальним
нулем. Завершення рядка значенням NULL необхідно при її об'єднанні з
командою PostgreSQL `COPY FROM`.

COPY є високошвидкісним інтерфейсом передачі даних,
підтримується PostgreSQL. Дані передаються однією транзакцією і не
розбираються парсером.

Як альтернативу можна використовувати функцію
[pg_copy_from()](function.pg-copy-from.md). Вона значно простіше в
використання.

> **Примітка**:
>
> Перед запуском функції [pg_end_copy()](function.pg-end-copy.md)
> програма повинна повідомити про сервер про завершення передачі даних,
> додавши до кінця останнього рядка символи "\.".

**Увага**

Використання **pg_put_line()** може призвести до відмови операцій
великими об'єктами, що включають функції
[pg_lo_read()](function.pg-lo-read.md) та
[pg_lo_tell()](function.pg-lo-tell.md). Для цих цілей використовуйте
функції [pg_copy_from()](function.pg-copy-from.md) та
[pg_copy_to()](function.pg-copy-to.md).

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
Текстовий рядок для прямого пересилання на сервер. Завершальний `NULL`
додається автоматично.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_put_line()****

` <?php $connu003du003dpg_pconnect("dbnameu003dfoo"); pg_query($conn, "create table bar (a int4, b char(16), d float8)"); pg_query($conn, "copy bar from stdin"); pg_put_line($conn, "3 hello world 4.5
"); pg_put_line($conn, "4 goodbye world 7.11
"); pg_put_line($conn,"".
"); pg_end_copy($conn);?> `

### Дивіться також

- [pg_end_copy()](function.pg-end-copy.md) - Синхронізує з
бекендом PostgreSQL

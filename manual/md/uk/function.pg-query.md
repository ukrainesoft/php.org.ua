- [« pg_query_params](function.pg-query-params.md)
- [pg_result_error_field »](function.pg-result-error-field.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Виконує запит

#pg_query

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_query — Виконує запит

### Опис

**pg_query**([PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d ?, string `$query`):
[PgSql\Result](class.pgsql-result.md)\|false

**pg_query()** виконує `query` до вказаної в `connection` базі даних.
[pg_query_params()](function.pg-query-params.md) має бути
переважно в більшості випадків.

У разі виникнення помилки функція повертає **`false`**, деталі
помилки можна отримати за допомогою функції
[pg_last_error()](function.pg-last-error.md), якщо з'єднання з БД не
порушено.

> **Примітка**: Незважаючи на те, що параметр `connection` може бути
> опущений, так не рекомендується, оскільки це може призвести до
> важким помилкам у скриптах.

> **Примітка**:
>
> Раніше ця функція називалася **pg_exec()**. **pg_exec()** все ще
> доступна для забезпечення сумісності, але краще використовувати
> нове ім'я.

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

`query`
Вираз або вираз SQL для виконання. Якщо передано кілька
виразів вони автоматично виконуються, як одна транзакція якщо явно
не вказано команди BEGIN/COMMIT усередині виразу. Проте,
використовувати кілька транзакцій в одному виклику функції не
рекомендується.

**Увага**
Строкове представлення даних користувача дуже небезпечне і часто
призводить до можливості [SQL
ін'єкції] (security.database.sql-injection.md). В більшості випадків
краще передавати дані користувача параметром в
[pg_query_params()](function.pg-query-params.md), а не підставляти їх
у рядок запиту.

Будь-які дані, що передаються від користувача безпосередньо в рядок
запиту повинні бути [добре
екрановані](function.pg-escape-string.md).

### Значення, що повертаються

Примірник [PgSql\Result](class.pgsql-result.md) у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Повертає екземпляр [PgSql\Result](class.pgsql-result.md); раніше повертався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_query()****

` <?php$conn u003d pg_pconnect("dbnameu003dpublisher");if (!$conn) { echo "Відбулася помилка.
";  exit;}$result u003dpg_query($conn, "SELECT author, email FROM authors");if (!$result) { echo "Відбулася помилка.
";  exit;}while ($row u003d pg_fetch_row($result)) {  echo "Автор: $row[0]  E-mail: $row[1]";  echo "<br />
";}?> `

**Приклад #2 Використання декількох виразів у **pg_query()****

`<?php$conn u003d pg_pconnect("dbnameu003dpublisher");// ці вирази будуть виконані в одні транзакції$query u003d "UPDATE authors SET authoru003dUPPER(author) WHE| UPDATE authors SET authoru003dLOWER(author) WHERE idu003d2;";$query .u003d "UPDATE authors SET authoru003dNULL WHERE idu003d3;";pg_query($conn, $query);?> ``

### Дивіться також

- [pg_connect()](function.pg-connect.md) - Відкриває з'єднання з
базою даних PostgreSQL
- [pg_pconnect()](function.pg-pconnect.md) - Відкриває постійне
з'єднання з сервером PostgreSQL
- [pg_fetch_array()](function.pg-fetch-array.md) - Повертає рядок
результату у вигляді масиву
- [pg_fetch_object()](function.pg-fetch-object.md) - Вибирає рядок
результату запиту та повертає дані у вигляді об'єкта
- [pg_num_rows()](function.pg-num-rows.md) - Повертає кількість
рядків у вибірці
- [pg_affected_rows()](function.pg-affected-rows.md) - Повертає
кількість порушених запитом записів (кортежів)

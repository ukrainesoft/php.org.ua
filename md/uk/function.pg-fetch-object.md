- [« pg_fetch_assoc](function.pg-fetch-assoc.md)
- [pg_fetch_result »](function.pg-fetch-result.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Вибирає рядок результату запиту та повертає дані у вигляді
об'єкта

#pg_fetch_object

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_fetch_object — Вибирає рядок результату запиту та повертає дані
у вигляді об'єкта

### Опис

**pg_fetch_object**(
[PgSql\Result](class.pgsql-result.md) `$result`,
?int `$row` u003d **`null`**,
string `$class` u003d "stdClass",
array `$constructor_args` u003d \[\]
): object \ | false

**pg_fetch_object()** повертає об'єкт, властивості якого відповідають
імен полів вибірки. Також функція може створити екземпляр конкретного
класу та передати параметри його конструктору.

> **Примітка**: Ця функція встановлює NULL-поля у значення
> **`null`** PHP.

За швидкістю функція ідентична
[pg_fetch_array()](function.pg-fetch-array.md) і трохи повільніше
[pg_fetch_row()](function.pg-fetch-row.md) (різниця незначна).

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`row`
Номер вибирається з результату запиту рядка. Нумерація починається з
нуля. Якщо аргумент опущений або дорівнює **`null`**, береться така
черги рядок.

`class`
Ім'я класу об'єкта, що створюється і повертається. Якщо не встановлено, функція
створить екземпляр класу **stdClass**.

`constructor_args`
Необов'язковий аргумент. Масив (array) параметрів для передачі в
конструктор створюваного об'єкта (`class`).

### Значення, що повертаються

Об'єкт (object), імена та значення властивостей якого відповідають іменам
і значення полів результату запиту. Значення NULL бази даних
перетворюються на PHP **`null`**.

**`false`**, коли `row` перевищує кількість рядків у результаті запиту,
коли рядків у результаті не залишилося, та за інших помилок.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_fetch_object()****

` <?php$database u003d "store";$db_conn u003d pg_connect("hostu003dlocalhost portu003d5432 dbnameu003d$database");if (!$db_conn) {  echo "Неможливо з'єднатися с 
";  exit;}$qu u003d pg_query($db_conn, "SELECT * FROM books ORDER BY author");while ($data u003d pg_fetch_object($qu)) ta| ech| ->year . "): "; echo $data->title . "<br />";}pg_free_result($qu);pg_close($db_conn);?> `

### Дивіться також

- [pg_query()](function.pg-query.md) - Виконує запит
- [pg_fetch_array()](function.pg-fetch-array.md) - Повертає рядок
результату у вигляді масиву
- [pg_fetch_assoc()](function.pg-fetch-assoc.md) - Вибирає рядок
результату запиту та поміщає дані в асоціативний масив
- [pg_fetch_row()](function.pg-fetch-row.md) - Вибирає рядок
результату запиту та поміщає дані в масив
- [pg_fetch_result()](function.pg-fetch-result.md) - Повертає
запис з результату запиту

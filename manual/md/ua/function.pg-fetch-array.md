- [« pg_fetch_all](function.pg-fetch-all.md)
- [pg_fetch_assoc »](function.pg-fetch-assoc.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає рядок результату у вигляді масиву

#pg_fetch_array

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_fetch_array — Повертає рядок результату у вигляді масиву

### Опис

**pg_fetch_array**([PgSql\Result](class.pgsql-result.md) `$result`,
?int `$row` u003d **`null`**, int `$mode` u003d **`PGSQL_BOTH`**): array\|false

**pg_fetch_array()** повертає масив, що відповідає обраному рядку
(Записи).

**pg_fetch_array()** розширена версія функції
[pg_fetch_row()](function.pg-fetch-row.md). Ця функція здатна
зберегти дані не лише з цифровими індексами, а й з асоціативними
(ім'я поля). За умовчанням зберігає і ті, й інші.

> **Примітка**: Ця функція встановлює NULL-поля у значення
> **`null`** PHP.

**pg_fetch_array()** виконується незначно повільніше
[pg_fetch_row()](function.pg-fetch-row.md), але значно простіше в
використання.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`row`
Номер рядка в результат для вибірки. Рядки пронумеровані з 0 по
зростання. Якщо параметр опущений або переданий **`null`** буде вибрано
наступний рядок.

`mode`
Необов'язковий параметр для керування типом індексації повертається
масиву (array). Параметр `mode` є обов'язковим і може приймати наступні
значення: **`PGSQL_ASSOC`**, **`PGSQL_NUM`** та **`PGSQL_BOTH`**. При
вказівки **`PGSQL_NUM`**, **pg_fetch_array()** поверне масив з числовими
індексами, у разі **`PGSQL_ASSOC`** поверне лише асоціативні
індекси, а у разі **`PGSQL_BOTH`** (використовується за замовчуванням) -
числові та асоціативні індекси.

### Значення, що повертаються

Масив (array) з числовими індексами (починаючи з 0), або асоціативними
(на ім'я поля), або з обома типами індексів. Кожне значення в
масиві (array) представлено як рядок (string). Значення `NULL`
повертається як **`null`**.

Функція повертає **`false`**, якщо `row` виходить за рамки кількості
рядків у вибірці, або відсутності рядків, або у разі будь-якої іншої помилки.
Вибірка з результату запиту, відмінного від SELECT, також поверне
**`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_fetch_array()****

` <?php$conn u003d pg_pconnect("dbnameu003dpublisher");if (!$conn) { echo "Відбулася помилка.
";  exit;}$result u003dpg_query($conn, "SELECT author, email FROM authors");if (!$result) { echo "Відбулася помилка.
";  exit;}$arru003d pg_fetch_array($result, 0, PGSQL_NUM);echo $arr[0] . " <- Row 1 Author
";echo $arr[1] . " <- Row 1 E-mail
";// Параметр row необов'язковий,// для передачі result_type замість row можна передати NULL.// Успішні дзвінки pg_fetch_array повернення| " <- Row 2 Author
";echo $arr["email"] . " <- Row 2 E-mail
";$arr u003d pg_fetch_array($result);echo $arr["author"] . " <- Row 3 Author
";echo $arr[1] . " <- Row 3 E-mail
";?> `

### Дивіться також

- [pg_fetch_row()](function.pg-fetch-row.md) - Вибирає рядок
результату запиту та поміщає дані в масив
- [pg_fetch_object()](function.pg-fetch-object.md) - Вибирає рядок
результату запиту та повертає дані у вигляді об'єкта
- [pg_fetch_result()](function.pg-fetch-result.md) - Повертає
запис з результату запиту

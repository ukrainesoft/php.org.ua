- [« pg_field_table](function.pg-field-table.md)
- [pg_field_type »](function.pg-field-type.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає ідентифікатор типу заданого поля

#pg_field_type_oid

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

pg_field_type_oid — Повертає ідентифікатор типу заданого поля

### Опис

**pg_field_type_oid**([PgSql\Result](class.pgsql-result.md) `$result`,
int `$field`): string\|int

**pg_field_type_oid()** повертає цілий ідентифікатор базового
типу (OID) значень колонки результату запиту `result` з номером
`field`.

Більш детальну інформацію про тип значень можна отримати, надіславши
запит із отриманим OID до системної таблиці PostgreSQL `pg_type`.
Функція PostgreSQL **format_type()** перетворює OID на стандартне ім'я
типу SQL.

> **Примітка**:
>
> Якщо тип значень використовується PostgreSQL домен (замість
> базового типу), функція поверне OID типу всередині домену, а не OID самого
> домену.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`field`
Порядковий номер поля, починаючи з нуля.

### Значення, що повертаються

Базовий тип OID значень поля.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Отримання інформації про поля вибірки**

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Неможливо з'єднатися з базою"); // Припустимо, 'title' має тип varchar $res u003d pg_query($dbconn, "select title from authors where author u003d 'Orwell'"); echo "Title field type OID: ", pg_field_type_oid($res, 0);?> `

Результат виконання цього прикладу:

Title field type OID: 1043

### Дивіться також

- [pg_field_type()](function.pg-field-type.md) - Повертає назву типу
заданого поля
- [pg_field_prtlen()](function.pg-field-prtlen.md) - Повертає
кількість друкованих символів
- [pg_field_name()](function.pg-field-name.md) - Повертає
найменування поля

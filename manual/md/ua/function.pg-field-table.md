- [« pg_field_size](function.pg-field-size.md)
- [pg_field_type_oid »](function.pg-field-type-oid.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає назву або ідентифікатор таблиці, що містить
задане поле

#pg_field_table

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

pg_field_table — Повертає назву або ідентифікатор таблиці,
містить задане поле

### Опис

**pg_field_table**([PgSql\Result](class.pgsql-result.md) `$result`,
int `$field`, bool `$oid_only` u003d **`false`**): string\|int\|false

**pg_field_table()** повертає ім'я таблиці, якій належить
задане поле. Якщо як аргумент `oid_only` передається
**`true`**, функція поверне oid-ідентифікатор таблиці.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`field`
Порядковий номер поля результату запиту, починаючи з нуля.

`oid_only`
За замовчуванням функція повертає назву таблиці, що містить задану
поле. Якщо параметр `oid_only` дорівнює **`true`**, то функція поверне oid
таблиці.

### Значення, що повертаються

При успішному завершенні назва таблиці або її oid або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Отримання інформації про поле вибірки**

` <?php$dbconn u003d pg_connect("dbnameu003dpublisher") or die("Не удалося з'єднатися з базою");$res u003d pg_query($dbconn, "SELECT bar FROM foo"); );echo pg_field_table($res, 0, true);$res u003d pg_query($dbconn, "SELECT version()");var_dump(pg_field_table($res, 0));?> `

Результатом виконання цього прикладу буде щось подібне:

foo
14379580

bool(false)

### Примітки

> **Примітка**:
>
> Повернення oid таблиці значно швидше, ніж її назви, оскільки
> визначення назви вимагає виконання додаткового запиту до
> системної таблиці бази даних.

### Дивіться також

- [pg_field_name()](function.pg-field-name.md) - Повертає
найменування поля
- [pg_field_type()](function.pg-field-type.md) - Повертає назву типу
заданого поля

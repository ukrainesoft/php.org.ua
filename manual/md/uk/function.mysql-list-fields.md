- [« mysql_list_dbs](function.mysql-list-dbs.md)
- [mysql_list_processes »](function.mysql-list-processes.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає список колонок таблиці

# mysql_list_fields

(PHP 4, PHP 5)

mysql_list_fields — Повертає список колонок таблиці

**Увага**

Ця функція оголошена застарілою в PHP 5.4.0 і разом з [модулем
MySQL](book.mysql.md), видалена PHP в 7.0.0. Замість неї використовуйте
модулі, що активно розвиваються [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Також дивіться розділ [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- SQL запит: `SHOW COLUMNS FROM sometable`

### Опис

**mysql_list_fields**(string `$database_name`, string `$table_name`,
resource `$link_identifier` u003d NULL): resource

Повертає інформацію про таблицю із переданим ім'ям.

Ця функція застаріла. Замість неї рекомендується використовувати
[mysql_query()](function.mysql-query.md) із SQL-запитом
`SHOW COLUMNS FROM table [LIKE 'name']`.

### Список параметрів

`database_name`
Ім'я опитуваної бази даних.

`table_name`
Ім'я таблиці, що опитується.

`link_identifier`
З'єднання MySQL. Якщо ідентифікатор з'єднання не було вказано,
використовується останнє з'єднання, відкрите
[mysql_connect()](function.mysql-connect.md). Якщо таке з'єднання не
було знайдено, функція спробує створити таке, якби
[mysql_connect()](function.mysql-connect.md) була викликана без
параметрів. Якщо з'єднання не було знайдено і не змогло бути створено,
генерується помилка рівня **`E_WARNING`**.

### Значення, що повертаються

Дескриптор результату (resource) у разі успішного виконання, або
**`false`** у разі виникнення помилки.

Результат, що повертається, може бути оброблений за допомогою наступних функцій:
[mysql_field_flags()](function.mysql-field-flags.md),
[mysql_field_len()](function.mysql-field-len.md),
[mysql_field_name()](function.mysql-field-name.md) та
[mysql_field_type()](function.mysql-field-type.md).

### Приклади

**Приклад #1 Приклад використання **mysql_list_fields()****

` <?php$result u003d mysql_query("SHOW COLUMNS FROM sometable");if (!$result) {    echo 'Помилка при виконанні запиту: ' . mysql_error(); exit;}if(mysql_num_rows($result) > 0) {    while ($row u003d mysql_fetch_assoc($result)) {        print_r($row); }}?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[Field] u003d> id
[Type] u003d> int(7)
[Null] u003d>
[Key] u003d> PRI
[Default] u003d>
[Extra] u003d> auto_increment
)
Array
(
[Field] u003d> email
[Type] u003d> varchar(100)
[Null] u003d>
[Key] u003d>
[Default] u003d>
[Extra] u003d>
)

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_listfields()**

### Дивіться також

- [mysql_field_flags()](function.mysql-field-flags.md) - Повертає
прапори, пов'язані із зазначеним полем результату запиту
- [mysql_info()](function.mysql-info.md) - Повертає інформацію про
останньому запиті

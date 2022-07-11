- [«mysql_stat](function.mysql-stat.md)
- [mysql_thread_id »](function.mysql-thread-id.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає ім'я таблиці, що містить вказане поле

# mysql_tablename

(PHP 4, PHP 5)

mysql_tablename — Повертає ім'я таблиці, що містить вказане поле

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- SQL запит: `SHOW TABLES`

### Опис

**mysql_tablename**(resource `$result`, int `$i`): string\|false

Повертає ім'я таблиці з 'result'.

Ця функція застаріла. Замість неї рекомендується використання
[mysql_query()](function.mysql-query.md) із SQL-запитом
`SHOW TABLES [FROM db_name] [LIKE 'pattern']`.

### Список параметрів

`result`
Дескриптор результату типу resource, отриманий із виклику
[mysql_list_tables()](function.mysql-list-tables.md).

`i`
Цілочисельний індекс (номер ряду/таблиці)

### Значення, що повертаються

Ім'я таблиці у разі успішного виконання або **`false`** у разі
виникнення помилки.

Використовуйте функцію mysql_tablename() для роботи з результатом
запиту, або будь-яку іншу функцію, здатну це робити, наприклад,
[mysql_fetch_array()](function.mysql-fetch-array.md).

### Приклади

**Приклад #1 Приклад використання **mysql_tablename()****

` <?phpmysql_connect("localhost", "mysql_user", "mysql_password");$result u003d mysql_list_tables("mydb");$num_rows u003d mysql_num_rows($result);for ($i u003d 0; $$; $i++) {    echo "Table: ", mysql_tablename($result, $i), "
";} mysql_free_result($result);?> `

### Примітки

> **Примітка**:
>
> Для визначення кількості таблиць в результаті запиту можна
> використовувати функцію [mysql_num_rows()](function.mysql-num-rows.md).

### Дивіться також

- [mysql_list_tables()](function.mysql-list-tables.md) - Повертає
список таблиць бази даних MySQL
- [mysql_field_table()](function.mysql-field-table.md) - Повертає
назва таблиці, якій належить зазначене поле
- [mysql_db_name()](function.mysql-db-name.md) - Повертає назву
бази даних із виклику до mysql_list_dbs

- [« mysql_field_seek](function.mysql-field-seek.md)
- [mysql_field_type »](function.mysql-field-type.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає назву таблиці, до якої належить зазначене поле

# mysql_field_table

(PHP 4, PHP 5)

mysql_field_table — Повертає назву таблиці, якій належить
вказане поле

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_fetch_field_direct()](mysqli-result.fetch-field-direct.md)
\[table\] або \[orgtable\]
- [PDOStatement::getColumnMeta()](pdostatement.getcolumnmeta.md)
\[table\]

### Опис

**mysql_field_table**(resource `$result`, int `$field_offset`): string

Повертає назву таблиці, до якої належить зазначене поле.

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

`field_offset`
Числове усунення поля. `field_offset` починається з `0`. Якщо
`field_offset` не існує, генерується помилка рівня
**`E_WARNING`**.

### Значення, що повертаються

Ім'я таблиці у разі успішного виконання.

### Приклади

**Приклад #1 Приклад використання **mysql_field_table()****

`<?php$query u003d "SELECT account.*, country.*FROM account, country WHERE country.name u003d 'Portugal' AND account.country_id u003d накопичувачів.id" $query);// виводить ім'я таблиці і ім'я поляfor ($i u003d 0; $i < mysql_num_fields($result); ++$i) {    $table u003d mysql_field_table $field u003d mysql_field_name($result, $i); echo  "$table: $field
";}?> `

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_fieldtable()**

### Дивіться також

- [mysql_list_tables()](function.mysql-list-tables.md) - Повертає
список таблиць бази даних MySQL

- [«mysql_field_len](function.mysql-field-len.md)
- [mysql_field_seek »](function.mysql-field-seek.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає назву вказаної колонки результату запиту

# mysql_field_name

(PHP 4, PHP 5)

mysql_field_name — Повертає назву вказаної колонки результату
запиту

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_fetch_field_direct()](mysqli-result.fetch-field-direct.md)
\[name\] або \[orgname\]
- [PDOStatement::getColumnMeta()](pdostatement.getcolumnmeta.md)
\[name\]

### Опис

**mysql_field_name**(resource `$result`, int `$field_offset`):
string\|false

**mysql_field_name()** повертає назву колонки із зазначеним індексом.

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

Назва поля за вказаним індексом у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_field_name()****

`<?php/* Таблиця користувачів складається з трьох колонок: *   user_id *   username *   password. */$link u003d Mysql_connect('localhost', Mysql_user', Mysql_password'); $db_selectedu003du003d mysql_select_db($dbname, $link);if (!$db_selected) {    die("Не удалося вибрати базу $dbname: " . mysql_error());}$res u003d mysql| link);echo mysql_field_name($res, 0) . "
";echo mysql_field_name($res, 2);?> `

Результат виконання цього прикладу:

user_id
password

### Примітки

> **Примітка**: Імена полів, що повертаються цією функцією,
> *залежними від регістру*.

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_fieldname()**

### Дивіться також

- [mysql_field_type()](function.mysql-field-type.md) - Повертає
тип вказаного поля з результату запиту
- [mysql_field_len()](function.mysql-field-len.md) - Повертає
довжину вказаного поля

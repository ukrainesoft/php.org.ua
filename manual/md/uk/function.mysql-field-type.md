- [«mysql_field_table](function.mysql-field-table.md)
- [mysql_free_result »](function.mysql-free-result.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає тип вказаного поля із результату запиту

# mysql_field_type

(PHP 4, PHP 5)

mysql_field_type — Повертає тип вказаного поля з результату запиту

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_fetch_field_direct()](mysqli-result.fetch-field-direct.md)
\[type\]
- [PDOStatement::getColumnMeta()](pdostatement.getcolumnmeta.md)
\[driver:decl_type\] або \[pdo_type\]

### Опис

**mysql_field_type**(resource `$result`, int `$field_offset`): string

Функція **mysql_field_type()** аналогічна функції
[mysql_field_name()](function.mysql-field-name.md). Аргументи
однакові, але замість імені колонки повертається її тип.

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

Поля можуть бути наступних типів: 'int', 'real', 'string', 'blob'
та інших, докладно описаних [» документації
MySQL](http://dev.mysql.com/doc/).

### Приклади

**Приклад #1 Приклад використання **mysql_field_type()****

` <?phpmysql_connect("localhost", "mysql_username", "mysql_password");mysql_select_db("mysql");$result u003d mysql_query("SELECT * FROM func");$fields u003d mysql_num_fields mysql_num_rows($result);$table u003d mysql_field_table($result, 0);echo "Ваша таблиця '" . $table . "'містить"". $fields . " поля і " . $rows . "запис
";echo "У таблиці є наступні поля:
";for ($iu003d0; $i < $fields; $i++) {    $type  u003d mysql_field_type($result, $i);   $name  u003d mysql_field_name($result, $  | , $i);   $flags u003d mysql_field_flags($result, $i);   echo $type . " " . $name . " " . $len . " | 
";}mysql_free_result($result);mysql_close();?> `

Результатом виконання цього прикладу буде щось подібне:

Ваша таблиця 'func' містить 4 поля та 1 запис
У таблиці є такі поля:
string name 64 not_null primary_key binary
int ret 1 not_null
string dl 128 not_null
string type 9 not_null enum

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_fieldtype()**

### Дивіться також

- [mysql_field_name()](function.mysql-field-name.md) - Повертає
назва вказаної колонки результату запиту
- [mysql_field_len()](function.mysql-field-len.md) - Повертає
довжину вказаного поля

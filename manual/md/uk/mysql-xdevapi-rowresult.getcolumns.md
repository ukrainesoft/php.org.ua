- [«
RowResult::getColumnNames](mysql-xdevapi-rowresult.getcolumnnames.md)
- [RowResult::getWarnings »](mysql-xdevapi-rowresult.getwarnings.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\RowResult](class.mysql-xdevapi-rowresult.md)
- Отримує метадані стовпця

# RowResult::getColumns

(No version information available, might only be in Git)

RowResult::getColumns — Отримує метадані стовпця

### Опис

public **mysql_xdevapi\RowResult::getColumns**(): array

Отримує метадані стовпців, присутні у наборі результатів.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив об'єктів FieldMetadata, що представляють стовпці в результаті, або
порожній масив, якщо набір результатів порожній.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\RowResult::getColumns()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE addressbook")->execute();$session->sql("CREATE DATABASE foo")->execute();$session->sql("CREATE TABLE foo.test_table(x int)")->execute();$session->sql("INSERT INTO addressbook.names values ('John ', 42), ('Sam', 33)")->execute();$sql u003d $session->sql("SELECT * from addressbook.names")->execute();$cols u003d $sql- >getColumns();print_r($cols); `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> mysql_xdevapi\FieldMetadata Object
(
[type] u003d> 7
[type_name] u003d> BYTES
[name] u003d> name
[original_name] u003d> name
[table] u003d> names
[original_table] u003d> names
[schema] u003d> addressbook
[catalog] u003d> def
[collation] u003d> 255
[fractional_digits] u003d> 0
[length] u003d> 65535
[flags] u003d> 0
[content_type] u003d> 0
)
[1] u003d> mysql_xdevapi\FieldMetadata Object
(
[type] u003d> 1
[type_name] u003d> SINT
[name] u003d> age
[original_name] u003d> age
[table] u003d> names
[original_table] u003d> names
[schema] u003d> addressbook
[catalog] u003d> def
[collation] u003d> 0
[fractional_digits] u003d> 0
[length] u003d> 11
[flags] u003d> 0
[content_type] u003d> 0
)
)

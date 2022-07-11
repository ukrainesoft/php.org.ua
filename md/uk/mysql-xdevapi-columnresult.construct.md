- [«
mysql_xdevapi\ColumnResult](class.mysql-xdevapi-columnresult.md)
- [ColumnResult::getCharacterSetName
»](mysql-xdevapi-columnresult.getcharactersetname.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\ColumnResult](class.mysql-xdevapi-columnresult.md)
- Конструктор класу ColumnResult

# ColumnResult::\_\_construct

(No version information available, might only be in Git)

ColumnResult::\_\_construct - Конструктор класу ColumnResult

### Опис

private **mysql_xdevapi\ColumnResult::\_\_construct**()

Отримує метадані стовпця, такі як набір символів; створюється методом
RowResult::getColumns().

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\ColumnResult::\_\_construct()****

` <?php$sessionu003du003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS nonsense")->execute();$session->sql( "CREATE DATABASE nonsense")->execute();$session->sql("CREATE TABLE nonsense.numbers (hello int, world float unsigned)")->execute();$session->sql("INSERT INTO .numbers values (42, 42)")->execute();$schema u003d $session->getSchema("nonsense");$table  u003d $schema->getTable("numbers");$result1 u003d $table- >select('hello','world')->execute();// Повертає масив об'єктів ColumnResult$columns u003d $result1->getColumns();foreach ($columns as $column) {      
Мітка стовпця " , $column->getColumnLabel();   echo " є типом "       , $column->getType();    echo "> і | "Підписаний.";}// Альтернативний варіант$result2 u003d $session->sql("SELECT * FROM nonsense.numbers")->execute();// Повертає масив об'єктів FieldMetadataprint_r `

Результатом виконання цього прикладу буде щось подібне:


Мітка стовпця hello є типом 19 і підписано.
Мітка стовпця світ є типом 4 і непідписаний.

Array
(
[0] u003d> mysql_xdevapi\FieldMetadata Object
(
[type] u003d> 1
[type_name] u003d> SINT
[name] u003d> hello
[original_name] u003d> hello
[table] u003d> numbers
[original_table] u003d> numbers
[schema] u003d> nonsense
[catalog] u003d> def
[collation] u003d> 0
[fractional_digits] u003d> 0
[length] u003d> 11
[flags] u003d> 0
[content_type] u003d> 0
)
[1] u003d> mysql_xdevapi\FieldMetadata Object
(
[type] u003d> 6
[type_name] u003d> FLOAT
[name] u003d> world
[original_name] u003d> world
[table] u003d> numbers
[original_table] u003d> numbers
[schema] u003d> nonsense
[catalog] u003d> def
[collation] u003d> 0
[fractional_digits] u003d> 31
[length] u003d> 12
[flags] u003d> 1
[content_type] u003d> 0
)
)

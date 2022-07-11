- [«Table::isView](mysql-xdevapi-table.isview.md)
- [Table::update »](mysql-xdevapi-table.update.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Table](class.mysql-xdevapi-table.md)
- Вибрати рядки з таблиці

# Table::select

(No version information available, might only be in Git)

Table::select — Вибрати рядки з таблиці

### Опис

public
**mysql_xdevapi\Table::select**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$columns`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$more_columns`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

Витягує дані з таблиці.

### Список параметрів

`columns`
Стовпчики для вибору даних. Може бути масивом з одним чи кількома
значеннями чи рядком.

`more_columns`
Додаткові визначення параметрів шпальт.

### Значення, що повертаються

Об'єкт TableSelect; використовуйте метод execute() для виконання select та
повернення об'єкта RowResult.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Table::count()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$row u003d $table->select('name', 'age')->execute()->fetchAll();print_r($row); `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[name] u003d> John
[age] u003d> 42
)
[1] u003d> Array
(
[name] u003d> Sam
[age] u003d> 33
)
)

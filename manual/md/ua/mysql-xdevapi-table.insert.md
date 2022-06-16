- [« Table::getSession](mysql-xdevapi-table.getsession.md)
- [Table::isView »](mysql-xdevapi-table.isview.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Table](class.mysql-xdevapi-table.md)
- Вставити рядки таблиці

# Table::insert

(No version information available, might only be in Git)

Table::insert — Вставити рядки таблиці

### Опис

public
**mysql_xdevapi\Table::insert**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$columns`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$more_columns`):
[mysql_xdevapi\TableInsert](class.mysql-xdevapi-tableinsert.md)

Вставляє рядки у таблицю.

### Список параметрів

`columns`
Стовпці для вставлення даних. Може бути масивом з одним чи кількома
значеннями, чи рядком.

`more_columns`
Визначення додаткових шпальт.

### Значення, що повертаються

Об'єкт TableInsert; використовуйте метод execute() для виконання виразу
insert.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Table::insert()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$table ->insert("name", "age") ->values(["Suzanne", 31],["Julie", 43]) ->execute();?> `

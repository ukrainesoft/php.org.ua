- [« Schema::getSession](mysql-xdevapi-schema.getsession.md)
- [Schema::getTables »](mysql-xdevapi-schema.gettables.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)
- Отримати таблицю схеми

# Schema::getTable

(No version information available, might only be in Git)

Schema::getTable — Отримати таблицю схеми

### Опис

public **mysql_xdevapi\Schema::getTable**(string `$name`):
[mysql_xdevapi\Table](class.mysql-xdevapi-table.md)

Отримання об'єкта Table для зазначеної таблиці у схемі.

### Список параметрів

`name`
Ім'я таблиці.

### Значення, що повертаються

Об'єкт Table.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Schema::getTable()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$row u003d $table->select('name', 'age')->execute()->fetchAll();print_r($row);?> `

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

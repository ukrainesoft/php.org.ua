- [«mysql_xdevapi\TableInsert](class.mysql-xdevapi-tableinsert.md)
- [TableInsert::execute »](mysql-xdevapi-tableinsert.execute.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableInsert](class.mysql-xdevapi-tableinsert.md)
- Конструктор класу TableInsert

# TableInsert::\_\_construct

(No version information available, might only be in Git)

TableInsert::\_\_construct - Конструктор класу TableInsert

### Опис

private **mysql_xdevapi\TableInsert::\_\_construct**()

Ініціюється за допомогою методу insert().

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableInsert::\_\_construct()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$table  ->insert("name", "age") ->values(["Suzanne", 31],["Julie", 43]) ->execute();?> `

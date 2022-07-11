- [«TableDelete::bind](mysql-xdevapi-tabledelete.bind.md)
- [TableDelete::execute »](mysql-xdevapi-tabledelete.execute.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)
- Конструктор класу TableDelete

# TableDelete::\_\_construct

(No version information available, might only be in Git)

TableDelete::\_\_construct - Конструктор класу TableDelete

### Опис

private **mysql_xdevapi\TableDelete::\_\_construct**()

Ініціюється за допомогою методу delete().

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableDelete::\_\_construct()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$table->delete() ->where("name u003d :name")  ->bind(['name' u003d> 'John']) ->orderby("age DESC") ->limit(1 )  ->execute();?> `

- [«TableSelect::bind](mysql-xdevapi-tableselect.bind.md)
- [TableSelect::execute »](mysql-xdevapi-tableselect.execute.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)
- Конструктор класу TableSelect

# TableSelect::\_\_construct

(No version information available, might only be in Git)

TableSelect::\_\_construct - Конструктор класу TableSelect

### Опис

private **mysql_xdevapi\TableSelect::\_\_construct**()

Об'єкт, який повертається методом select(); Використовуйте execute() для
виконання запиту.

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableSelect::\_\_construct()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$result u003d $table->select('name','age') ->where('name like :name and age > :age') ->bind(['name' u003d> 'John', 'age' u003d> 42]) ->orderBy('age desc') ->execute();$row u003d $result->fetchAll();print_r($row);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[name] u003d> John
[age] u003d> 42
)
)

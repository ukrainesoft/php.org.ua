- [«mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)
- [TableDelete::\_\_construct
»](mysql-xdevapi-tabledelete.construct.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)
- Зв'язує параметри запиту на видалення

# TableDelete::bind

(No version information available, might only be in Git)

TableDelete::bind — Зв'язує параметри запиту на видалення

### Опис

public **mysql_xdevapi\TableDelete::bind**(array `$placeholder_values`):
[mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)

Прив'язує значення до певного наповнювача.

### Список параметрів

`placeholder_values`
Ім'я заповнювача та значення для прив'язки.

### Значення, що повертаються

Об'єкт TableDelete.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\TableDelete::bind()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$table->delete() ->where("name u003d :name")  ->bind(['name' u003d> 'John']) ->orderby("age DESC") ->limit(1 )  ->execute();?> `

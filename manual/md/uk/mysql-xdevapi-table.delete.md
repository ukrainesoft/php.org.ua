- [«Table::count](mysql-xdevapi-table.count.md)
- [Table::existsInDatabase
»](mysql-xdevapi-table.existsindatabase.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Table](class.mysql-xdevapi-table.md)
- Видалити рядки з таблиці

# Table::delete

(No version information available, might only be in Git)

Table::delete — Видалити рядки з таблиці

### Опис

public **mysql_xdevapi\Table::delete**():
[mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)

Видаляє рядки з таблиці.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт TableDelete; використовуйте метод execute() для виконання запиту
delete

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Table::delete()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$table->delete()->where("name u003d :name")->orderby("age DESC")->limit(1)->bind(['name' u003d> 'John'] )->execute();?> `

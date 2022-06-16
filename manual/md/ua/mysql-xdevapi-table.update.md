- [«Table::select](mysql-xdevapi-table.select.md)
- [mysql_xdevapi\TableDelete »](class.mysql-xdevapi-tabledelete.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Table](class.mysql-xdevapi-table.md)
- Оновити рядки у таблиці

# Table::update

(No version information available, might only be in Git)

Table::update — Оновити рядки у таблиці

### Опис

public **mysql_xdevapi\Table::update**():
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

Оновлює стовпці у таблиці.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт TableUpdate; використовуйте метод execute() для виконання виразу
update.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Table::update()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$table->update()->set('age',34)->where('name u003d "Sam"')->limit(1)->execute();?> `

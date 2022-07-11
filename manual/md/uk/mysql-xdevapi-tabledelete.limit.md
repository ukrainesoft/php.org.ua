- [« TableDelete::execute](mysql-xdevapi-tabledelete.execute.md)
- [TableDelete::orderby »](mysql-xdevapi-tabledelete.orderby.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)
- Обмежує рядки для видалення

# TableDelete::limit

(No version information available, might only be in Git)

TableDelete::limit — Обмежує рядки для видалення

### Опис

public **mysql_xdevapi\TableDelete::limit**(int `$rows`):
[mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)

Встановлює максимальну кількість записів або документів для
видалення.

### Список параметрів

`rows`
Максимальна кількість записів або документів для видалення.

### Значення, що повертаються

Об'єкт TableDelete.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableDelete::limit()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$table->delete() ->where("name u003d :name")  ->bind(['name' u003d> 'John']) ->orderby("age DESC") ->limit(1 )  ->execute();?> `

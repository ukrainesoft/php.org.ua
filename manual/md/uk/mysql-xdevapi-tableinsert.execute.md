- [«
TableInsert::\_\_construct](mysql-xdevapi-tableinsert.construct.md)
- [TableInsert::values »](mysql-xdevapi-tableinsert.values.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableInsert](class.mysql-xdevapi-tableinsert.md)
- Виконує запит вставки

# TableInsert::execute

(No version information available, might only be in Git)

TableInsert::execute — Виконує запит на вставку

### Опис

public **mysql_xdevapi\TableInsert::execute**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

Виконує затвердження.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт Result.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableInsert::execute()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$table  ->insert("name", "age") ->values(["Suzanne", 31],["Julie", 43]) ->execute();?> `

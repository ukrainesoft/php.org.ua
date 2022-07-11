- [«TableInsert::execute](mysql-xdevapi-tableinsert.execute.md)
- [mysql_xdevapi\TableSelect »](class.mysql-xdevapi-tableselect.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableInsert](class.mysql-xdevapi-tableinsert.md)
- Додає значення вставки рядка

# TableInsert::values

(No version information available, might only be in Git)

TableInsert::values — Додає значення вставки рядка

### Опис

public **mysql_xdevapi\TableInsert::values**(array `$row_values`):
[mysql_xdevapi\TableInsert](class.mysql-xdevapi-tableinsert.md)

Встановлює значення для вставлення.

### Список параметрів

`row_values`
Значення (масив) шпальт для вставки.

### Значення, що повертаються

Об'єкт TableInsert.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableInsert::values()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$table  ->insert("name", "age") ->values(["Suzanne", 31],["Julie", 43]) ->execute();?> `

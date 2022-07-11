- [«
TableSelect::lockShared](mysql-xdevapi-tableselect.lockshared.md)
- [TableSelect::orderby »](mysql-xdevapi-tableselect.orderby.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)
- Встановлює межу зміщення

# TableSelect::offset

(No version information available, might only be in Git)

TableSelect::offset — Встановлює межу зміщення

### Опис

public **mysql_xdevapi\TableSelect::offset**(int `$position`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

Пропускає зазначену кількість рядків у результаті.

### Список параметрів

`position`
Межа усунення.

### Значення, що повертаються

Об'єкт TableSelect.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableSelect::offset()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 42)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003du003d$schema->getTable("names ");$result u003d $table->select('name', 'age') ->limit(1) ->offset(1) ->execute();$row u003d $result->fetchAll();print_r ($row);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[name] u003d> Sam
[age] u003d> 42
)
)

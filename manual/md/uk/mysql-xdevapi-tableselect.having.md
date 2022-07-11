- [«TableSelect::groupBy](mysql-xdevapi-tableselect.groupby.md)
- [TableSelect::limit »](mysql-xdevapi-tableselect.limit.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)
- Встановлює вибір із умовою

# TableSelect::having

(No version information available, might only be in Git)

TableSelect::having — Встановлює вибір із умовою

### Опис

public **mysql_xdevapi\TableSelect::having**(string `$sort_expr`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

Встановлює умову для записів для розгляду в операціях
Агрегатної функції.

### Список параметрів

`sort_expr`
Умова для агрегатних функцій, що використовуються в умовах угруповання.

### Значення, що повертаються

Об'єкт TableSelect.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableSelect::having()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 42)")->execute();$session->sql("INSERT INTO addressbook.names values ('Suki', 31)")->execute ();$schema u003d $session->getSchema("addressbook");$table u003d $schema->getTable("names");$result u003d $table->select('count(*) as count', ' age') ->groupBy('age')->orderBy('age asc') ->having('count > 1') ->execute();$row u003d $result->fetchAll();print_r($ row);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[count] u003d> 2
[age] u003d> 42
)
)

- [«TableSelect::having](mysql-xdevapi-tableselect.having.md)
- [TableSelect::lockExclusive
»](mysql-xdevapi-tableselect.lockexclusive.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)
- Обмежує вибрані рядки

# TableSelect::limit

(No version information available, might only be in Git)

TableSelect::limit — Обмежує вибрані рядки

### Опис

public **mysql_xdevapi\TableSelect::limit**(int `$rows`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

Встановлює максимальну кількість записів або документів для
повернення.

### Список параметрів

`rows`
Максимальна кількість записів чи документів.

### Значення, що повертаються

Об'єкт TableSelect.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableSelect::limit()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names" );$result u003d $table->select('name', 'age') ->limit(1)  ->execute();$row u003d $result->fetchAll();print_r($row);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[name] u003d> John
[age] u003d> 42
)
)

- [«mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)
- [TableSelect::\_\_construct
»](mysql-xdevapi-tableselect.construct.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)
- Прив'язує параметри запиту вибірки

# TableSelect::bind

(No version information available, might only be in Git)

TableSelect::bind — Прив'язує параметри запиту вибірки

### Опис

public **mysql_xdevapi\TableSelect::bind**(array `$placeholder_values`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

Прив'язує значення до певного наповнювача.

### Список параметрів

`placeholder_values`
Назва заповнювача та значення для прив'язки.

### Значення, що повертаються

Об'єкт TableSelect.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\TableSelect::bind()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names" );$result u003d $table->select('name','age') ->where('name like :name and age > :age') ->bind(['name' u003d> 'John', ' age' u003d> 42]) ->execute();$row u003d $result->fetchAll();print_r($row);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[name] u003d> John
[age] u003d> 42
)
)

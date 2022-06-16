- [« RowResult::\_\_construct](mysql-xdevapi-rowresult.construct.md)
- [RowResult::fetchOne »](mysql-xdevapi-rowresult.fetchone.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\RowResult](class.mysql-xdevapi-rowresult.md)
- Отримує всі рядки з результату

# RowResult::fetchAll

(No version information available, might only be in Git)

RowResult::fetchAll — Отримує усі рядки з результату

### Опис

public **mysql_xdevapi\RowResult::fetchAll**(): array

Витягує всі рядки з набору результатів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Числовий масив із усіма результатами запиту; кожен результат
є асоціативний масив. Повертається порожній масив,
якщо рядків немає.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\RowResult::fetchAll()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE addressbook")->execute();$session->sql("CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names") ;$row u003d $table->select('name', 'age')->execute()->fetchAll();print_r($row); `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[name] u003d> John
[age] u003d> 42
)
[1] u003d> Array
(
[name] u003d> Sam
[age] u003d> 33
)
)

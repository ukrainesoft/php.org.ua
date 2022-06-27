- [« RowResult::getColumns](mysql-xdevapi-rowresult.getcolumns.md)
- [RowResult::getWarningsCount
»](mysql-xdevapi-rowresult.getwarningscount.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\RowResult](class.mysql-xdevapi-rowresult.md)
- отримує попередження останньої операції

# RowResult::getWarnings

(No version information available, might only be in Git)

RowResult::getWarnings — Отримує попередження останньої операції

### Опис

public **mysql_xdevapi\RowResult::getWarnings**(): array

Отримує попередження від останньої операції RowResult.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив об'єктів Warning останньої операції. Кожен об'єкт визначає
'message' про помилку, 'level' помилки та 'code' помилки. Повертається порожній
масив, якщо помилок немає.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\RowResult::getWarnings()****

` <?php$sessionu003du003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("CREATE DATABASE foo")->execute();$session->sql("CREATE TABLE foo.test_table(x int)")->execute();$schema u003d $session->getSchema("foo");$table  u003d $schema->getTable("test_table");$table->insert( ['x'])->values([1])->values([2])->execute();$res u003d $table->select(['x/0 as bad_x'])->execute ();$warnings u003d $res->getWarnings();print_r($warnings);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> mysql_xdevapi\Warning Object
(
[message] u003d> Division by 0
[level] u003d> 2
[code] u003d> 1365
)
[1] u003d> mysql_xdevapi\Warning Object
(
[message] u003d> Division by 0
[level] u003d> 2
[code] u003d> 1365
)
)

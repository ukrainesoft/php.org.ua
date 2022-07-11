- [«
Result::getGeneratedIds](mysql-xdevapi-result.getgeneratedids.md)
- [Result::getWarningsCount
»](mysql-xdevapi-result.getwarningscount.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Result](class.mysql-xdevapi-result.md)
- отримує попередження останньої операції

# Result::getWarnings

(No version information available, might only be in Git)

Result::getWarnings — Отримує попередження останньої операції

### Опис

public **mysql_xdevapi\Result::getWarnings**(): array

Отримує попередження останньої операції Result.

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

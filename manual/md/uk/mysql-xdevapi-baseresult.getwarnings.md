- [« mysql_xdevapi\BaseResult](class.mysql-xdevapi-baseresult.md)
- [BaseResult::getWarningsCount
»](mysql-xdevapi-baseresult.getwarningscount.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\BaseResult](class.mysql-xdevapi-baseresult.md)
- отримує попередження останньої операції

# BaseResult::getWarnings

(No version information available, might only be in Git)

BaseResult::getWarnings — Отримує попередження останньої операції

### Опис

abstract public **mysql_xdevapi\BaseResult::getWarnings**(): array

Отримує попередження, згенеровані останньою операцією сервера
MySQL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив об'єктів Warning останньої операції. Кожен об'єкт містить
повідомлення про помилку ('message'), рівень помилки ('level') та код помилки
('Code'). Повертається порожній масив якщо помилок немає.

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

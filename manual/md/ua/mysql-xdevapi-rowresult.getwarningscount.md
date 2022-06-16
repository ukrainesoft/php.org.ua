- [« RowResult::getWarnings](mysql-xdevapi-rowresult.getwarnings.md)
- [mysql_xdevapi\Schema »](class.mysql-xdevapi-schema.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\RowResult](class.mysql-xdevapi-rowresult.md)
- Отримує кількість попереджень останньої операції

# RowResult::getWarningsCount

(No version information available, might only be in Git)

RowResult::getWarningsCount — Отримує кількість попереджень
останньої операції

### Опис

public **mysql_xdevapi\RowResult::getWarningsCount**(): int

Отримує кількість попереджень останньої операції RowResult.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Кількість попереджень, згенерованих останньою операцією.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\RowResult::getWarningsCount()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS foo")->execute();$session->sql( "CREATE DATABASE foo")->execute();$session->sql("CREATE TABLE foo.test_table(x int)")->execute();$schema u003d $session->getSchema("foo"); $table u003d $schema->getTable("test_table");$table->insert(['x'])->values([1])->values([2])->execute();$res u003d $table->select(['x/0 as bad_x'])->execute();echo $res->getWarningsCount();?> `

Результатом виконання цього прикладу буде щось подібне:

2

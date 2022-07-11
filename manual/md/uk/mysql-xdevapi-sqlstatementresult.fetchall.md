- [«
SqlStatementResult::\_\_construct](mysql-xdevapi-sqlstatementresult.construct.md)
- [SqlStatementResult::fetchOne
»](mysql-xdevapi-sqlstatementresult.fetchone.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\SqlStatementResult](class.mysql-xdevapi-sqlstatementresult.md)
- Отримує всі рядки з результату

# SqlStatementResult::fetchAll

(No version information available, might only be in Git)

SqlStatementResult::fetchAll — Отримує всі рядки з результату

### Опис

public **mysql_xdevapi\SqlStatementResult::fetchAll**(): array

Витягує всі рядки з набору результатів.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Числовий масив із усіма результатами запиту; кожен результат
є асоціативний масив. Повертається порожній масив,
якщо рядків немає.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\SqlStatementResult::fetchAll()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS dbtest")->execute();$session->sql( "CREATE DATABASE dbtest")->execute();$session->sql("CREATE TABLE dbtest.workers(name text, age int, job text)")->execute();$session->sql("INSERT INTO dbtest.workers values ('John', 42, 'bricklayer'), ('Sam', 33, 'carpenter')")->execute();$schema u003d $session->getSchema("dbtest"); $table u003d $schema->getTable("workers");$rows u003d $session->sql("SELECT * FROM dbtest.workers")->execute()->fetchAll();print_r($rows);? > `

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

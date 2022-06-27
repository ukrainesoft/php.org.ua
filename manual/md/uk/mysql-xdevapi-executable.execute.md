- [« mysql_xdevapi \ Executable] (class.mysql-xdevapi-executable.md)
- [mysql_xdevapi\ExecutionStatus
»](class.mysql-xdevapi-executionstatus.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Executable](class.mysql-xdevapi-executable.md)
- Виконує затвердження

# Executable::execute

(No version information available, might only be in Git)

Executable::execute — Виконує затвердження

### Опис

abstract public **mysql_xdevapi\Executable::execute**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

Виконує затвердження з операції збору чи запиту таблиці; ця
функціональність дозволена для ланцюжка способів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Один з об'єктів Result, наприклад Result або SqlStatementResult.

### Приклади

**Приклад #1 Приклади використання execute()**

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$result_sql u003d $session >sql("CREATE DATABASE addressbook")->execute();var_dump($result_sql);$schema    u003d $session->getSchema("addressbook");$collection u003d$$schema->createCollection(" result_collectionu003du003d$collection->add( '{"name": "Jane",   "jobs": [{"title":"Scientist","Salary":18000}, {"title":"Mother","Sala ":0}],    "hobbies": ["Walking","Making pies"]}');$result_collection_executed u003d $result_collection->execute();var_dump($result_collection);var_dump($result_collection_exe

Результатом виконання цього прикладу буде щось подібне:

object(mysql_xdevapi\SqlStatementResult)#3 (0) {
}

object(mysql_xdevapi\CollectionAdd)#5 (0) {
}

object(mysql_xdevapi\Result)#7 (0) {
}

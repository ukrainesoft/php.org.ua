- [«Schema::dropCollection](mysql-xdevapi-schema.dropcollection.md)
- [Schema::getCollection »](mysql-xdevapi-schema.getcollection.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)
- Перевірити, чи існує у базі даних

# Schema::existsInDatabase

(No version information available, might only be in Git)

Schema::existsInDatabase — Перевірити, чи існує у базі даних

### Опис

public **mysql_xdevapi\Schema::existsInDatabase**(): bool

Перевіряє, чи існує поточний об'єкт (схема, таблиця, колекція або
уявлення) в об'єкті схеми.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо схема, таблиця, колекція чи подання
все ще існують у схемі, інакше повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Schema::getCollection()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS food")->execute();$session->sql( "CREATE DATABASE food")->execute();$session->sql("CREATE TABLE food.fruit(name text, rating text)")->execute();$schema u003d $session->getSchema("food ");$schema->createCollection("trees");// ...$trees u003d $schema->getCollection("trees");// ...//| )?if($trees->existsInDatabase()) {    echo "Так, колекція 'trees' все ще існує.";} `

Результатом виконання цього прикладу буде щось подібне:

Так, колекція 'trees' все ще існує.

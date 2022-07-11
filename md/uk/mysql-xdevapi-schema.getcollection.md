- [«
Schema::existsInDatabase](mysql-xdevapi-schema.existsindatabase.md)
- [Schema::getCollectionAsTable
»](mysql-xdevapi-schema.getcollectionastable.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)
- Отримати колекцію зі схеми

# Schema::getCollection

(No version information available, might only be in Git)

Schema::getCollection — Отримати колекцію зі схеми

### Опис

public **mysql_xdevapi\Schema::getCollection**(string `$name`):
[mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)

Отримати колекцію зі схеми.

### Список параметрів

`name`
Назва колекції для вилучення.

### Значення, що повертаються

Об'єкт Collection для вибраної колекції.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Schema::getCollection()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS food")->execute();$session->sql( "CREATE DATABASE food")->execute();$schema u003d $session->getSchema("food");$schema->createCollection("trees");// ...$trees u003d $schema->getCollection ("trees"); var_dump($trees); `

Результатом виконання цього прикладу буде щось подібне:

object(mysql_xdevapi\Collection)#3 (1) {
["name"]u003d>
string(5) "trees"
}

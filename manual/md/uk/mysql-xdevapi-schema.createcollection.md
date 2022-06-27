- [«Schema::\_\_construct](mysql-xdevapi-schema.construct.md)
- [Schema::dropCollection »](mysql-xdevapi-schema.dropcollection.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)
- Додати колекцію до схеми

# Schema::createCollection

(No version information available, might only be in Git)

Schema::createCollection — Додати колекцію до схеми

### Опис

public **mysql_xdevapi\Schema::createCollection**(string `$name`, string
$validate u003d ?):
[mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)

Створити колекцію усередині схеми.

### Список параметрів

`name`
Ім'я колекції.

`validate`
Визначення перевірки як об'єкт JSON.

### Значення, що повертаються

Об'єкт колекції.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.20 | Доданий необов'язковий параметр validate. |

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Schema::getCollection()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS food")->execute();$session->sql( "CREATE DATABASE food")->execute();$session->sql("CREATE TABLE food.fruit(name text, rating text)")->execute();$schema u003d $session->getSchema("food ");$schema->createCollection("trees");print_r($schema->gettables());print_r($schema->getcollections()); `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[fruit] u003d> mysql_xdevapi\Table Object
(
[name] u003d> fruit
)
)
Array
(
[trees] u003d> mysql_xdevapi\Collection Object
(
[name] u003d> trees
)
)

**Приклад #2 Приклад використання Schema::createCollection з параметром
validate**

 ¦                                org/geo",            "description": "A geographical coordinate",            "type": "object",            "properties": {                "latitude": {                    "type": "number"                },                "longitude": {                    "type" : "number"                }            },            "required": ["latitude", "longitude"]        }    }}');// Успешное выполнение$collection->add('{"latitude": 10, "longitude": 20} ')->execute();// Помилка, неприпустимі типи (не числа)$collection->add('{"latitude": "lat", "longitude": "long"}')->execute(); `

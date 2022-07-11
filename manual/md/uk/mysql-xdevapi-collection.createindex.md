- [«Collection::count](mysql-xdevapi-collection.count.md)
- [Collection::dropIndex »](mysql-xdevapi-collection.dropindex.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Створює індекс для колекції

# Collection::createIndex

(No version information available, might only be in Git)

Collection::createIndex — Створює індекс для колекції

### Опис

public **mysql_xdevapi\Collection::createIndex**(string `$index_name`,
string `$index_desc_json`): void

Створює індекс для колекції.

Видається виняток, якщо індекс з таким ім'ям вже існує, або якщо
визначення індексу сформовано неправильно.

### Список параметрів

`index_name`
Назва індексу, який потрібно створити. Має бути коректним ім'ям
індексу, допустимим для SQL-запиту `CREATE INDEX`.

`index_desc_json`
Визначення індексу для створення. Містить масив об'єктів IndexField, та
кожен об'єкт описує один елемент документа для додавання до індексу,
а також необов'язковий рядок для типу індексу, який може бути INDEX
(за замовчуванням) або SPATIAL.

Один опис IndexField складається з наступних полів:

- `field`: рядок, повний шлях документа до елемента документа чи поля
для індексації

- `type`: рядок, один із підтримуваних типів стовпців SQL для
зіставлення поля. Для числових типів може бути додано
необов'язкове ключове слово UNSIGNED. Для типу TEXT може бути
додано довжину, що враховується для індексації.

- `required`: булеве, (необов'язкове) true, якщо поле має бути
обов'язковим у документі. За замовчуванням використовується значення
**`false`**, за винятком типу `GEOJSON`, де за замовчуванням
використовується значення **`true`**.

- `options`: ціле число, (необов'язкове) прапори спеціальних опцій для
використання при декодуванні даних `GEOJSON`.

- `srid`: ціле число, (необов'язкове) значення srid для
використання при декодуванні даних `GEOJSON`.

Помилково включати інші поля, не описані вище, до документів
IndexDefinition або IndexField.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::createIndex()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003du003d$session->getSchema("addressbook");$collection u003d $schema->createCollection("people");// Створення| (  'myindex1',  '{"fields": [{   "field": "$.name",    "type": "TEXT(25)",    "required": true}],      ;// Просторовий індекс$collection->createIndex( 'myindex2', '{"fields": [{    "field": "$.home",    "type": "GEOJSON",      type": "SPATIAL"}');// Індекс з кількома полями$collection->createIndex(  'myindex3', '{"fields": [    {                  (20)",      "required": true    },    {      "field": "$.age",      "type": "INTEGER"    },    {      "field": "$.job",      "type": "TEXT( 30)",     "required": false   }}  ], "unique": true  }'); `

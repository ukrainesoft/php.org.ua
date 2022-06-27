- [«Schema::getCollection](mysql-xdevapi-schema.getcollection.md)
- [Schema::getCollections »](mysql-xdevapi-schema.getcollections.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)
- Отримати об'єкт таблиці колекції

# Schema::getCollectionAsTable

(No version information available, might only be in Git)

Schema::getCollectionAsTable — Отримати об'єкт таблиці колекції

### Опис

public **mysql_xdevapi\Schema::getCollectionAsTable**(string `$name`):
[mysql_xdevapi\Table](class.mysql-xdevapi-table.md)

Отримати колекцію, але як об'єкт Table замість об'єкта Collection.

### Список параметрів

`name`
Ім'я колекції, з якої створюється екземпляр Table.

### Значення, що повертаються

Об'єкт таблиці для колекції.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Schema::getCollectionAsTable()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");$collect u003d $schema->createCollection("people");$collect->add('{"name ": "Fred",  "age": 21, "job": "Construction"}')->execute();$collect->add('{"name": "Wilma", "age": 23, "job": "Teacher"}')->execute();$table     u003d $schema->getCollectionAsTable("people");$collection u003d $schema->getCollection("people");var_dump($table); var_dump($collection); `

Результатом виконання цього прикладу буде щось подібне:

object(mysql_xdevapi\Table)#4 (1) {
["name"]u003d>
string(6) "people"
}

object(mysql_xdevapi\Collection)#5 (1) {
["name"]u003d>
string(6) "people"
}

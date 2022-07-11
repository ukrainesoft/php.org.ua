- [«Schema::getTable](mysql-xdevapi-schema.gettable.md)
- [mysql_xdevapi\SchemaObject
»](class.mysql-xdevapi-schemaobject.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)
- Отримати таблиці схеми

# Schema::getTables

(No version information available, might only be in Git)

Schema::getTables — Отримати таблиці схеми

### Опис

public **mysql_xdevapi\Schema::getTables**(): array

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив усіх таблиць у цій схемі, де кожне значення елемента масиву
є об'єктом Table з іменем таблиці як ключ.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Schema::getTables()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();$session->sql("INSERT INTO addressbook. names values ('John', 42), ('Sam', 33)")->execute();$session->sql("CREATE TABLE addressbook.cities(name text, population int)")->execute( );$session->sql("INSERT INTO addressbook.names values ('Portland', 639863), ('Seattle', 704352)")->execute();$schema u003d $session->getSche );$tables u003d $schema->getTables();var_dump($tables);?> `

Результатом виконання цього прикладу буде щось подібне:

array(2) {
["cities"]u003d>
object(mysql_xdevapi\Table)#3 (1) {
["name"]u003d>
string(6) "cities"
}

["names"]u003d>
object(mysql_xdevapi\Table)#4 (1) {
["name"]u003d>
string(5) "names"
}
}

- [«
CollectionFind::lockShared](mysql-xdevapi-collectionfind.lockshared.md)
- [CollectionFind::sort »](mysql-xdevapi-collectionfind.sort.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)
- Пропускає вказану кількість елементів, що повертаються.

# CollectionFind::offset

(No version information available, might only be in Git)

CollectionFind::offset — Пропускає вказану кількість повертаних
елементів

### Опис

public **mysql_xdevapi\CollectionFind::offset**(int `$position`):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

Пропускає (зміщує) цю кількість елементів, які в іншому
у разі було б повернено операцією пошуку. Використовуйте спільно з
шляхом limit().

При значенні, що перевищує розмір набору результатів, призводить до порожнього
набір.

### Список параметрів

`position`
Кількість елементів, які необхідно пропустити для операції limit().

### Значення, що повертаються

Об'єкт CollectionFind, який можна використовувати для додаткової
обробки.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionFind::offset()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");$create u003d $schema->createCollection("people");$create  ->add('{"name ": "Alfred", "age": 18, "job": "Butler"}') ->execute();$create  ->add('{"name": "Reginald", "age": 42, "job": "Butler"}') ->execute();// ...$collection u003d $schema->getCollection("people");$result u003d $collection ->find() ->sort(' age asc') ->offset(1) ->limit(1) ->execute();var_dump($result->fetchAll());?> `

Результатом виконання цього прикладу буде щось подібне:

array(1) {
[0]u003d>
array(4) {
["_id"]u003d>
string(28) "00005b6b53610000000000000f3"
["age"]u003d>
int(42)
["job"]u003d>
string(6) "Butler"
["name"]u003d>
string(8) "Reginald"
}
}

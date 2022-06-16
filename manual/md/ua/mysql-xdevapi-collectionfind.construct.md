- [« CollectionFind::bind](mysql-xdevapi-collectionfind.bind.md)
- [CollectionFind::execute
»](mysql-xdevapi-collectionfind.execute.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)
- Конструктор класу CollectionFind

# CollectionFind::\_\_construct

(No version information available, might only be in Git)

CollectionFind::\_\_construct - Конструктор класу CollectionFind

### Опис

private **mysql_xdevapi\CollectionFind::\_\_construct**()

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання CollectionFind**

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");$create u003d $schema->createCollection("people");$result u003d $create  ->ad {"name": "Alfred", "age": 18, "job": "Butler"}') ->execute();// ...$collection u003d $schema->getCollection("people"); $result u003d $collection ->find('job like :job and age > :age') ->bind(['job' u003d> 'Butler', 'age' u003d> 16])  ->execute ($result->fetchAll());?> `

Результатом виконання цього прикладу буде щось подібне:

array(1) {
[0]u003d>
array(4) {
["_id"]u003d>
string(28) "00005b6b53610000000000000cf"
["age"]u003d>
int(18)
["job"]u003d>
string(6) "Butler"
["name"]u003d>
string(6) "Alfred"
}
}

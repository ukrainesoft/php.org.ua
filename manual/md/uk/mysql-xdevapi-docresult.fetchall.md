- [«DocResult::\_\_construct](mysql-xdevapi-docresult.construct.md)
- [DocResult::fetchOne »](mysql-xdevapi-docresult.fetchone.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\DocResult](class.mysql-xdevapi-docresult.md)
- Отримати всі рядки

# DocResult::fetchAll

(No version information available, might only be in Git)

DocResult::fetchAll — Отримати всі рядки

### Опис

public **mysql_xdevapi\DocResult::fetchAll**(): array

Отримати всі результати результуючого набору.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив з усіма результатами із запиту; кожен результат – це
асоціативний масив. Якщо немає строку результату запиту, то повертається
порожній масив.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\DocResult::fetchAll()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");$create u003d $schema->createCollection("people");$create->add('{"name ": "Alfred", "age": 18, "job": "Butler"}')->execute();$create->add('{"name": "Reginald", "age": 42, "job": "Butler"}')->execute();// ...$collection u003d $schema->getCollection("people");// Повертає об'єкт DocResult$result u003d $collection ->find(' job like :job and age > :age') ->bind(['job' u003d> 'Butler', 'age' u003d> 16]) ->sort('age desc') ->execute(); $result->fetchAll());?> `

Результатом виконання цього прикладу буде щось подібне:

array(2) {

[0]u003d>
array(4) {
["_id"]u003d>
string(28) "00005b6b5361000000000000123"
["age"]u003d>
int(42)
["job"]u003d>
string(6) "Butler"
["name"]u003d>
string(8) "Reginald"
}

[1]u003d>
array(4) {
["_id"]u003d>
string(28) "00005b6b5361000000000000122"
["age"]u003d>
int(18)
["job"]u003d>
string(6) "Butler"
["name"]u003d>
string(6) "Alfred"
}

}

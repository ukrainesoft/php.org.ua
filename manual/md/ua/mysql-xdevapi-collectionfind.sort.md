- [« CollectionFind::offset](mysql-xdevapi-collectionfind.offset.md)
- [mysql_xdevapi\CollectionModify
»](class.mysql-xdevapi-collectionmodify.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)
- Встановлює критерії сортування

# CollectionFind::sort

(No version information available, might only be in Git)

CollectionFind::sort — Встановлює критерії сортування

### Опис

public **mysql_xdevapi\CollectionFind::sort**(string `$sort_expr`):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

Сортує набір результатів по полю, вибраному аргументом sort_expr.
Дозволені напрямки: ASC (за зростанням) або DESC (за спаданням).
Операція еквівалентна операції SQL 'ORDER BY' і відповідає тому ж
набору правил.

### Список параметрів

`sort_expr`
Можна вказати один або кілька виразів сортування.
праворуч, кожен вираз має бути розділений комою.

### Значення, що повертаються

Об'єкт CollectionFind, який можна використовувати для виконання команди
або додавання додаткових операцій.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionFind::sort()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");$create u003d $schema->createCollection("people");$create  ->add('{"name ": "Alfred", "age": 18, "job": "Butler"}') ->execute();$create  ->add('{"name": "Reginald", "age": 42, "job": "Butler"}') ->execute();// ...$collection u003d $schema->getCollection("people");$result u003d $collection ->find() ->sort(' job desc', 'age asc') ->execute();var_dump($result->fetchAll());?> `

Результатом виконання цього прикладу буде щось подібне:

array(2) {
[0]u003d>
array(4) {
["_id"]u003d>
string(28) "00005b6b5361000000000000106"
["age"]u003d>
int(18)
["job"]u003d>
string(6) "Butler"
["name"]u003d>
string(6) "Alfred"
}
[1]u003d>
array(4) {
["_id"]u003d>
string(28) "00005b6b5361000000000000107"
["age"]u003d>
int(42)
["job"]u003d>
string(6) "Butler"
["name"]u003d>
string(8) "Reginald"
}
}

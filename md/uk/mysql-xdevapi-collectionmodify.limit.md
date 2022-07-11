- [«
CollectionModify::execute](mysql-xdevapi-collectionmodify.execute.md)
- [CollectionModify::patch
»](mysql-xdevapi-collectionmodify.patch.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)
- Обмежує кількість змінних документів

# CollectionModify::limit

(No version information available, might only be in Git)

CollectionModify::limit — Обмежує кількість документів, що змінюються.

### Опис

public **mysql_xdevapi\CollectionModify::limit**(int `$rows`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

Обмежує кількість документів, які змінюються цією операцією. При
бажанні можна використовувати skip() визначення значення зміщення.

### Список параметрів

`rows`
Максимальна кількість документів для зміни.

### Значення, що повертаються

Об'єкт CollectionModify.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionModify::limit()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$collection->ad ": "Fred",  "age": 21, "job": "Construction"}')->execute();$collection->add('{"name": "Wilma", "age": 23, "job": "Teacher"}')->execute();$collection->add('{"name": "Betty", "age": 24, "job": "Teacher"}')-> execute();$collection ->modify("job u003d :job") ->bind(['job' u003d> 'Teacher']) ->set('job', 'Principal') ->limit(1) ->execute();$result u003d $collection  ->find()  ->execute();print_r($result->fetchAll());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[_id] u003d> 00005b6b5361000000000000118
[age] u003d> 21
[job] u003d> Construction
[name] u003d> Fred
)
[1] u003d> Array
(
[_id] u003d> 00005b6b5361000000000000119
[age] u003d> 23
[job] u003d> Principal
[name] u003d> Wilma
)
[2] u003d> Array
(
[_id] u003d> 00005b6b536100000000000011a
[age] u003d> 24
[job] u003d> Teacher
[name] u003d> Betty
)
)

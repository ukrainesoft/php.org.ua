- [«
CollectionFind::execute](mysql-xdevapi-collectionfind.execute.md)
- [CollectionFind::groupBy
»](mysql-xdevapi-collectionfind.groupby.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)
- Встановлює фільтр поля документа

# CollectionFind::fields

(No version information available, might only be in Git)

CollectionFind::fields — Встановлює фільтр поля документа

### Опис

public **mysql_xdevapi\CollectionFind::fields**(string `$projection`):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

Визначає стовпчики для запиту, які потрібно повернути. Якщо не
певне, то повертаються усі стовпці.

### Список параметрів

`projection`
Може бути одним рядком або масивом рядків, ці рядки визначають
стовпці, які мають бути повернені для кожного документа,
відповідної умови пошуку.

### Значення, що повертаються

Об'єкт CollectionFind, який можна використовувати для подальшого
обробки.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionFind::fields()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");$create u003d $schema->createCollection("people");$create  ->add('{"name ": "Alfred", "age": 18, "job": "Butler"}') ->execute();// ...$collection u003d $schema->getCollection("people");$result u003d $collection  ->find('job like :job and age > :age') ->bind(['job' u003d> 'Butler', 'age' u003d> 16]) -->fields('name')> execute();var_dump($result->fetchAll());?> `

Результатом виконання цього прикладу буде щось подібне:

array(1) {
[0]u003d>
array(1) {
["name"]u003d>
string(6) "Alfred"
}
}

- [«
CollectionAdd::\_\_construct](mysql-xdevapi-collectionadd.construct.md)
- [mysql_xdevapi\CollectionFind
»](class.mysql-xdevapi-collectionfind.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionAdd](class.mysql-xdevapi-collectionadd.md)
- Виконує затвердження

# CollectionAdd::execute

(No version information available, might only be in Git)

CollectionAdd::execute — Виконує затвердження

### Опис

public **mysql_xdevapi\CollectionAdd::execute**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

Метод execute необхідний для надсилання запиту операції CRUD на сервер
MySQL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт Result, який можна використовувати для перевірки стану
операції, наприклад, кількості порушених рядків.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionAdd::execute()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");$create u003d $schema->createCollection("people");$collection u003d $schema->get people");// Добавляємо два документи$collection ->add('{"name": "Fred",  "age": 21, "job": "Construction"}')  ->execute();$collection >add('{"name": "Wilma", "age": 23, "job": "Teacher"}') ->execute();// Додаємо два документи, використовуючи один об'єкт JSON$result ->add(   '{"name": "Bernie",      "jobs": [{"title":"Cat Herder","Salary":42000}, {"title":"Father","Salary":0 }],    "hobbies": ["Sports","Making cupcakes"]}',   '{"name": "Jane",      "jobs": [{"title":"Sciry , {"title":"Mother","Salary":0}],     "hobbies": ["Walking","Making pies"]}') ->execute();// Отримуємо список згенерованих ідентифікації виконання add()$ids u003d $result->getGeneratedIds();print_r($ids);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> 00005b6b5361000000000000056
[1] u003d> 00005b6b5361000000000000057
)

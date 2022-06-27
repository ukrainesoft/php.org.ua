- [«
mysql_xdevapi\CollectionAdd](class.mysql-xdevapi-collectionadd.md)
- [CollectionAdd::execute »](mysql-xdevapi-collectionadd.execute.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionAdd](class.mysql-xdevapi-collectionadd.md)
- Конструктор класу CollectionAdd

# CollectionAdd::\_\_construct

(No version information available, might only be in Git)

CollectionAdd::\_\_construct - Конструктор класу CollectionAdd

### Опис

private **mysql_xdevapi\CollectionAdd::\_\_construct**()

Використовується для додавання документа до колекції; викликається з об'єкту
Збірка.

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionAdd::\_\_construct()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");$create u003d $schema->createCollection("people");$collection u003d $schema->get people");// Добавляємо два документи$collection ->add('{"name": "Fred",  "age": 21, "job": "Construction"}')  ->execute();$collection >add('{"name": "Wilma", "age": 23, "job": "Teacher"}') ->execute();// Додаємо два документи, використовуючи один об'єкт JSON$result ->add(   '{"name": "Bernie",      "jobs": [{"title":"Cat Herder","Salary":42000}, {"title":"Father","Salary":0 }],    "hobbies": ["Sports","Making cupcakes"]}',   '{"name": "Jane",      "jobs": [{"title":"Sciry , {"title":"Mother","Salary":0}],     "hobbies": ["Walking","Making pies"]}') ->execute();// Отримуємо список згенерованих ідентифікації виконання add()$ids u003d $result->getGeneratedIds();print_r($ids);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> 00005b6b5361000000000000056
[1] u003d> 00005b6b5361000000000000057
)

### Примітки

> **Примітка**:
>
> MySQL Server 8.0 або вище генерує унікальний \_id, як показано в
> приклад. Поле \_id має бути визначено вручну, якщо використовується
> MySQL Server 5.7.

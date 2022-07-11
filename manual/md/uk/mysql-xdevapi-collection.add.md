- [« mysql_xdevapi \ Collection] (class.mysql-xdevapi-collection.md)
- [Collection::addOrReplaceOne
»](mysql-xdevapi-collection.addorreplaceone.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Додає документ у колекцію

# Collection::add

(No version information available, might only be in Git)

Collection::add — Додає документ до колекції

### Опис

public
**mysql_xdevapi\Collection::add**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$document`):
[mysql_xdevapi\CollectionAdd](class.mysql-xdevapi-collectionadd.md)

Запускає додавання цього документа (документів) до колекції,
підтримуються кілька варіантів способу. Можливі варіанти:

1. Додавання одного документа у вигляді рядка JSON.

2. Додавання одного документа у вигляді масиву, наприклад:
`['field' u003d> 'value', 'field2' u003d> 'value2' ... ]`

3. В ту саму операцію можна додати, як документ, так і
кілька документів.

### Список параметрів

`document`
Один або кілька документів, це може бути або JSON, або масив
полів із відповідними значеннями. Масив не може бути порожнім.

Сервер MySQL автоматично генерує унікальні значення `_id` для
кожного документа (рекомендується), хоча воно також може бути додане
вручну. Це значення має бути унікальним, інакше операція додавання
не буде виконано.

### Значення, що повертаються

Об'єкт CollectionAdd. Використовуйте execute() для повернення Result, який
можна використовувати для запиту кількості порушених елементів,
кількості попереджень, згенерованих операцією, або для отримання
списку згенерованих ідентифікаторів для доданих документів

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Collection::add()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");$create u003d $schema->createCollection("people");$collection u003d $schema->get people");// Додавання двох документів$collection->add('{"name": "Fred", "age": 21, "job": "Construction"}')->execute();$collection- >add('{"name": "Wilma", "age": 23, "job": "Teacher"}')->execute();// Додавання двох документів використовуючи один об'єкт JSON$result u003d >add(  '{"name": "Bernie",   "jobs": [{"title":"Cat Herder","Salary":42000}, {"title":"Father","Salary":0} ],   "hobbies": ["Sports","Making cupcakes"]}', '{"name": "Jane",   "jobs": [{"title":"Scientist","Salary":18 {"title":"Mother","Salary":0}],    "hobbies": ["Walking","Making pies"]}')->execute();// Отримання списку згенерованих ідентифікаторів останньої операції )$ids u003d $ result->getGeneratedIds();print_r($ids);?> `

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

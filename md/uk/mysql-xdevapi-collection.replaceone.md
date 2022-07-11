- [« Collection::removeOne](mysql-xdevapi-collection.removeone.md)
- [mysql_xdevapi\CollectionAdd
»](class.mysql-xdevapi-collectionadd.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Замінює один документ колекції

# Collection::replaceOne

(No version information available, might only be in Git)

Collection::replaceOne — Замінює один документ колекції

### Опис

public **mysql_xdevapi\Collection::replaceOne**(string `$id`, string
`$doc`): [mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

Оновлює (або замінює) документ за ідентифікатором, якщо він
існує.

### Список параметрів

`id`
Ідентифікатор документа для заміни чи оновлення. Зазвичай це \_id,
який було згенеровано MySQL Server при додаванні запису.

`doc`
Документ колекції для оновлення або заміни документа, відповідного
параметру **id**.

Документ може бути або об'єктом документа, або коректним рядком
JSON, що описує новий документ.

### Значення, що повертаються

Об'єкт Result, який можна використовувати для запиту кількості
порушених елементів та кількості попереджень, згенерованих
операцією.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::replaceOne()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$result u003d $ {"name": "Alfred", "age": 18, "job": "Butler"}')->execute();// Зазвичай _id відомий іншими способами,// но для цього приклада і використовуємо його$ids       u003d $result->getGeneratedIds();$alfred_id u003d $ids[0];// ...$alfred u003d $collection->getOne($alfred_id);$alfred['age']; $alfred['job'] u003d 'Guru';$collection->replaceOne($alfred_id, $alfred);?> `

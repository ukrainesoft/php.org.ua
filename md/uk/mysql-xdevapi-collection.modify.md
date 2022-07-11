- [« Collection::getSession](mysql-xdevapi-collection.getsession.md)
- [Collection::remove »](mysql-xdevapi-collection.remove.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Змінює документи колекції

# Collection::modify

(No version information available, might only be in Git)

Collection::modify — Змінює документи колекції

### Опис

public **mysql_xdevapi\Collection::modify**(string `$search_condition`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

Змінює колекції, які відповідають певним умовам пошуку.
Дозволено кілька операцій, підтримується прив'язка параметрів.

### Список параметрів

`search_condition`
Параметр повинен бути допустимим виразом SQL, що використовується для
відповідності документам, які потрібно змінити. Цей вираз може
бути простим значенням **`true`**, що відповідає всім документам,
або може використовувати функції та оператори, такі як
''CAST(_id AS SIGNED)>u003d 10'', ''age MOD 2 u003d 0 OR age MOD 3 u003d 0'' або
`'_id IN ["2","5","7","10"]'`.

### Значення, що повертаються

Якщо операцію не виконано, функція поверне об'єкт Modify, який можна
використовуватиме додавання додаткових операцій MODIFY.

Якщо операція MODIFY виконана, то об'єкт, що повертається, міститиме
результат операції.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::modify()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$collection->ad ": "Альфред", "age": 18, "job": "Дворецький"}')->execute();$collection->add('{"name": "Боб",    "age": 19, "job": "Художник"}')->execute();// Додавання двох робіт для всіх художників: артист і майстер$collection ->modify("job in ('Дворецький', '>> arrayAppend('job', 'Артист')  ->arrayAppend('job', 'Майстер') ->execute();// Видалення поля 'beer' з всіх документів з віком 2$ 21') ->unset(['beer']) ->execute();?> `

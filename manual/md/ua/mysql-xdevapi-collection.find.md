- [«
Collection::existsInDatabase](mysql-xdevapi-collection.existsindatabase.md)
- [Collection::getName »](mysql-xdevapi-collection.getname.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Шукає документ

# Collection::find

(No version information available, might only be in Git)

Collection::find — Шукає документ

### Опис

public **mysql_xdevapi\Collection::find**(string `$search_condition` u003d
?):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

Шукає документ або набір документів у колекції бази даних. Знайдені
Документи повертаються у вигляді об'єкта CollectionFind, з якого в
надалі можна отримувати результати чи змінювати їх.

### Список параметрів

`search_condition`
Хоча це необов'язково, зазвичай визначається умова, що звужує результати
до підмножини документів.

Умови можуть становити кілька елементів, синтаксис підтримує
прив'язку параметрів. Вираз, який використовується як умова пошуку,
має бути допустимим виразом SQL. Якщо умова пошуку не вказана
(Поле порожнє), мається на увазі find('true').

### Значення, що повертаються

Об'єкт CollectionFind для перевірки операції або отримання знайдених
документів.

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Collection::find()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$collection->ad ": "Альфред",     "age": 18, "job": "Дворецький"}')->execute();$collection->add('{"name": "Боб",        ")"age" "job": "Пловець"}')->execute();$collection->add('{"name": "Фред",       "age": 20, "job": "Будівельник"}')-> execute();$collection->add('{"name": "Вілма",      "age": 21, "job": "Учитель"}')->execute();$collection->add('{ "name": "Джон",       "age": 22, "job": "Учитель"}')->execute();$find  u003d $collection->find('job LIKE :job AND | );$result u003d $find  ->bind(['job' u003d> 'Учитель', 'age' u003d> 20])  ->sort('age DESC') ->limit(2) ->>execute(); print_r($result->fetchAll());?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> Array
(
[_id] u003d> 00005b6b53610000000000000a8
[age] u003d> 22
[job] u003d> Вчитель
[name] u003d> Джон
)
[1] u003d> Array
(
[_id] u003d> 00005b6b5361000000000000007
[age] u003d> 21
[job] u003d> Вчитель
[name] u003d> Вілма
)
)

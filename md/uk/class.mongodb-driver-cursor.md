- [«
MongoDB\Driver\ReadConcern::unserialize](mongodb-driver-readconcern.unserialize.md)
- [MongoDB\Driver\Cursor::\_\_construct
»](mongodb-driver-cursor.construct.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\Cursor

# Клас MongoDB\Driver\Cursor

(mongodb \>u003d1.0.0)

## Вступ

Клас **MongoDB\Driver\Cursor** містить результати команди MongoDB
command або запиту і може бути повернутий
[MongoDB\Driver\Manager::executeCommand()](mongodb-driver-manager.executecommand.md)
або
[MongoDB\Driver\Manager::executeQuery()](mongodb-driver-manager.executequery.md)
відповідно.

## Огляд класів

final class **MongoDB\Driver\Cursor** implements
[MongoDB\Driver\CursorInterface](class.mongodb-driver-cursorinterface.md),
[Iterator](class.iterator.md) {

/\* Методи \*/

final private [\_\_construct](mongodb-driver-cursor.construct.md)()

public [current](mongodb-driver-cursor.current.md)(): array\|object

final public [getId](mongodb-driver-cursor.getid.md)():
[MongoDB\Driver\CursorId](class.mongodb-driver-cursorid.md)

final public [getServer](mongodb-driver-cursor.getserver.md)():
[MongoDB\Driver\Server](class.mongodb-driver-server.md)

final public [isDead](mongodb-driver-cursor.isdead.md)(): bool

public [key](mongodb-driver-cursor.key.md)(): int

public [next](mongodb-driver-cursor.next.md)(): void

public [rewind](mongodb-driver-cursor.rewind.md)(): void

final public [setTypeMap](mongodb-driver-cursor.settypemap.md)(array
`$typemap`): void

final public [toArray](mongodb-driver-cursor.toarray.md)(): array

public [valid](mongodb-driver-cursor.valid.md)(): bool

}

## Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -----------------|
| PECL mongodb 1.9.0 | Реалізує [Iterator](class.iterator.md). |
| PECL mongodb 1.6.0 Реалізує [MongoDB\Driver\CursorInterface](class.mongodb-driver-cursorinterface.md), який успадковує [Traversable](class.traversable.md). |

## Приклади

**Приклад #1 Reading a result set**

Як
[MongoDB\Driver\Manager::executeCommand()](mongodb-driver-manager.executecommand.md),
так
[MongoDB\Driver\Manager::executeQuery()](mongodb-driver-manager.executequery.md),
повертають свої результати як об'єкт **MongoDB\Driver\Cursor**.

Оскільки **MongoDB\Driver\Cursor** реалізує інтерфейс
[Traversable](class.traversable.md), можна ітерувати за набором
результату за допомогою [foreach] (control-structures.foreach.md).

` <?php$manager u003d new MongoDB\Driver\Manager();/* Вставити визначені документи, наш наше запит вернув результати */$bulkWrite u003d new MongoDB\Driver'Bul > 'Ceres', 'size' u003d> 946, 'distance' u003d> 2.766]);$bulkWrite->insert(['name' u003d> 'Vesta', 'size' u003d> 525, 'distance' > ]);$manager->executeBulkWrite("test.asteroids", $bulkWrite);/* Запрос на отримання всіх елементів в колекції */$query u003d new MongoDB\Driver\Query( [ " бази даних "test" */$cursor u003d $manager->executeQuery("test.asteroids", $query);/* Тепер $cursor містить об'єкт, обгорнутий навколо набору з . Використовуйте * foreach() для ітеації по всьому результату */foreach ($cursor as $document) {    print_r($document);}?> `

Результатом виконання цього прикладу буде щось подібне:

stdClass Object
(
[_id] u003d> MongoDB\BSON\ObjectId Object
(
[oid] u003d> 5a4cff2f122d3321565d8cc2
)

[name] u003d> Ceres
[size] u003d> 946
[distance] u003d> 2.766
)
stdClass Object
(
[_id] u003d> MongoDB\BSON\ObjectId Object
(
[oid] u003d> 5a4cff2f122d3321565d8cc3
)

[name] u003d> Vesta
[size] u003d> 525
[distance] u003d> 2.362
}

**Приклад #2 Читання набору результатів для хвостового курсору**

[» Хвостові
курсори](https://www.mongodb.com/docs/manual/core/tailable-cursors) - -
це особливий тип курсору MongoDB, який дозволяє клієнту читати
деякі результати, а потім чекати, доки не з'являться додаткові
документи. Ці курсори в основному використовуються з [» Capped
Collections](https://www.mongodb.com/docs/manual/core/capped-collections)
та [» Change Streams](https://www.mongodb.com/docs/manual/changeStreams).

Хоча звичайні курсори можна ітерувати один раз за допомогою `foreach`,
цей підхід не працюватиме з хвостовими курсорами. Коли `foreach`
використовується з хвостовим курсором, цикл зупиняється після досягнення
кінця початкового набору результатів Спроба продовжити ітерацію курсору
з другим `foreach` викинути виняток, оскільки PHP намагається
перемотати курсор. Подібно до об'єктів результатів в інших драйверах баз
даних, курсори в MongoDB підтримують лише ітерацію вперед, що
означає, що вони не можуть бути перемотані.

Для безперервного зчитування з хвостового курсору об'єкт курсору повинен
бути загорнутий за допомогою [IteratorIterator](class.iteratoriterator.md).
Це дозволяє застосуванню безпосередньо керувати ітерацією курсору, уникати
ненавмисного перемотування курсору і вирішувати, коли чекати нових
результатів або повністю припинити ітерацію.

Щоб продемонструвати хвостовий курсор у дії, будуть
використовуватися два скрипти: "виробник" (producer) та "споживач"
(Consumer). Скрипт продюсера створить нову capped-колекцію, використовуючи
команду
[» create](https://www.mongodb.com/docs/manual/reference/command/create)
і почне вставляти новий документ у цю колекцію кожну секунду.

`<?php$manager u003d new MongoDB\Driver\Manager;$manager->executeCommand('test', new MongoDB\Driver\Command([   'create' u003d> 'asteroids',   ' 'capped ' u003d> 1048576,]));while (true) {    $bulkWrite u003d new MongoDB\Driver\BulkWrite; $bulkWrite->insert(['createdAt' u003d> new MongoDB\BSON\UTCDateTime]); $manager->executeBulkWrite('test.asteroids', $bulkWrite); sleep(1);}?> `

Коли скрипт продюсера (producer) все ще запущено, може бути виконано
другий скрипт для читання вставлених документів з
за допомогою хвостового (tailable) курсору, позначеного параметрами
`tailable` та `awaitData` для
[MongoDB\Driver\Query::\_\_construct()](mongodb-driver-query.construct.md).

` <?php$manager u003d new MongoDB\Driver\Manager;$query u003d new MongoDB\Driver\Query([], [    'tailable' u003d> true,    'awaitData' u003d> $$ | ->executeQuery('test.asteroids', $query); u003d $iterator->current(); printf("Користувачський документ створений: %s
", $document->createdAt);    }}   $iterator->next();}?> `

Скрипт користувача почне з швидкого друку всіх доступних
документів у заблокованій колекції (як би використовувався
`foreach`); однак при досягненні кінця початкового набору результатів він
не завершиться. Оскільки курсор є хвостовим, виклик
[IteratorIterator::valid()](iteratoriterator.valid.md) буде
блокувати та чекати на додаткові результати.
[IteratorIterator::valid()](iteratoriterator.valid.md) також
використовується для перевірки наявності на кожному етапі даних, доступних для
читання.

> **Примітка**: У цьому прикладі використовується опція запиту `awaitData`,
> щоб проінструктувати сервер блокувати протягом короткого
> періоду (наприклад, одну секунду) в кінці набору результатів перед
> поверненням відповіді драйверу. Це використовується для запобігання
> агресивного опитування (polling) сервера за відсутності результатів.
> Параметр `maxAwaitTimeMS` може використовуватись у поєднанні з
> `tailable` та `awaitData`, щоб вказати час, який сервер повинен
> блокувати, коли досягне кінця набору результатів.

## Помилки

При ітерації по об'єкту курсору дані BSON перетворюються на змінні
PHP. Ця ітерація може викликати такі винятки:

- Викидає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо клас на карті типів не може бути створений або не реалізує
[MongoDB\BSON\Unserializable](class.mongodb-bson-unserializable.md).
- Виняток
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md)
викидається, якщо вхідні дані не є рівно одним
документом BSON. Можливі причини включають, але не обмежені
некоректним BSON, зайвими даними або несподіваною помилкою
[» libbson](https://github.com/mongodb/mongo-c-driver/tree/master/src/libbson).

## Зміст

- [MongoDB\Driver\Cursor::\_\_construct](mongodb-driver-cursor.construct.md)
- Створює новий об'єкт Cursor (не використовується)
- [MongoDB\Driver\Cursor::current](mongodb-driver-cursor.current.md)
— Повертає поточний елемент
- [MongoDB\Driver\Cursor::getId](mongodb-driver-cursor.getid.md) -
Повертає ідентифікатор для курсору
- [MongoDB\Driver\Cursor::getServer](mongodb-driver-cursor.getserver.md)
— Повертає сервер, пов'язаний із курсором
- [MongoDB\Driver\Cursor::isDead](mongodb-driver-cursor.isdead.md) -
Перевіряє, чи курсор вичерпано або може містити додаткові
результати
- [MongoDB\Driver\Cursor::key](mongodb-driver-cursor.key.md) -
Повертає індекс поточного результату у курсорі
- [MongoDB\Driver\Cursor::next](mongodb-driver-cursor.next.md) -
Переміщує курсор на наступний результат
- [MongoDB\Driver\Cursor::rewind](mongodb-driver-cursor.rewind.md) -
Переміщує курсор до першого результату
- [MongoDB\Driver\Cursor::setTypeMap](mongodb-driver-cursor.settypemap.md)
— Встановлює карту типу для десеріалізації BSON
- [MongoDB\Driver\Cursor::toArray](mongodb-driver-cursor.toarray.md)
— Повертає масив, який містить усі результати курсору
- [MongoDB\Driver\Cursor::valid](mongodb-driver-cursor.valid.md) -
Перевіряє, чи поточна позиція курсору коректна

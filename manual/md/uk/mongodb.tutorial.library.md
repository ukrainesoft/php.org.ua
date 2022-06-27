- [« Навчальні матеріали](mongodb.tutorial.md)
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM) »](mongodb.tutorial.apm.md)

- [PHP Manual](index.md)
- [Навчальні матеріали](mongodb.tutorial.md)
- Використання бібліотеки PHP для MongoDB (PHPLIB)

# Використання бібліотеки PHP для MongoDB (PHPLIB)

Після початкового настроювання драйвера, ми продовжимо пояснювати, як
почати роботу з драйвером MongoDB та відповідною користувальницькою
бібліотекою для створення нашого першого проекту.

## Встановлення бібліотеки PHP за допомогою Composer

Останнє, що нам необхідно встановити, перш ніж почати писати
наша програма - встановити бібліотеку PHP.

Бібліотеку встановлюватимемо за допомогою пакетного менеджера
[»Composer](https://getcomposer.org/). Інструкції з встановлення Composer
шукайте на його веб-сайті.

Встановлюємо бібліотеку так:

`` shellcode
$ composer require mongodb/mongodb
````

Буде виведено щось на кшталт:

``` textcode
./composer.json has been created
Loading composer repositories with package information
Updating dependencies (including require-dev)
- Installing mongodb/mongodb (1.0.0)
Downloading: 100%

Writing lock file
Generating autoload files
````

Composer створить кілька файлів: `composer.json`, `composer.lock` та
директорію `vendor`, що містить саму бібліотеку та інші залежності,
які будуть потрібні у вашому проекті.

## Використання бібліотеки PHP

Крім управління залежностями, Composer також надає
автопідвантажувач класів для цих залежностей. Переконайтеся, що ви увімкнули
цей автозавантажувач на початок свого скрипта або код bootstrap() вашого
програми:

` <?php// Цей шлях повинен вказувати на автозавантажувач Composerrequire 'vendor/autoload.php'; `

Після цього можна використовувати будь-який функціонал, описаний у
[» документації з
бібліотеці](https://www.mongodb.com/docs/php-library/current/).

Якщо ви раніше використовували старіший драйвер (тобто модуль `mongo`),
то API бібліотеки має бути вам знайоме. Воно містить клас
[» Client](https://www.mongodb.com/docs/php-library/master/reference//class/MongoDBClient/)
для з'єднання з MongoDB, клас
[»Database](https://www.mongodb.com/docs/php-library/master/reference//class/MongoDBDatabase/)
для операцій рівня бази даних (тобто команди, управління колекціями) та
клас
[» Collection](https://www.mongodb.com/docs/php-library/master/reference//class/MongoDBCollection)
для операцій рівня колекції (тобто методи
[»CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete),
управління індексами). Різні методи Collection були перейменовані
для більшої зрозумілості та відповідності мовно-незалежної
[» спеціфікації](https://github.com/mongodb/specifications/blob/master/source/crud/crud.rst).

Приклад, як вставити документ до колекції *beers* бази даних *demo*:

`<?phprequire 'vendor/autoload.php'; // підключаємо автопідвантажувач класів Composer$client u003d new MongoDB\Client("mongodb://localhost:27017");$collection u003d $client->demo->beers;$result u003d $collection->insertOne'' u003d> 'Hinterland', 'brewery' u003d> 'BrewDog' ] );echo "Ідентифікатор вставленого документу '{$result->getInsertedId()}'";?> `

Замість ін'єкції згенерованого поля `_id` у вхідний документ (як
це робилося в старих версіях драйвера), тепер можна це робити з
за допомогою методу `insertOne` повернутого об'єкта.

Після вставки ви, звичайно ж, можете запросити щойно вставлені
дані. Для цього використовуйте метод find, який повертає
курсор, що ітерується:

`<?phprequire 'vendor/autoload.php'; // підключаємо автопідвантажувач класів Composer$client u003d new MongoDB\Client("mongodb://localhost:27017");$collection u003d $client->demo->beers;$result u003d $collection->find(' ' u003d> 'Hinterland', 'brewery' u003d> 'BrewDog' ] );foreach ($result as $entry) {    echo $entry['_id'], ': ', $entry['name'], '
";}?> `

Хоч із прикладу це і не очевидно, але документи BSON та масиви
замовчуванням десеріалізовані як типи класів у бібліотеці. Ці класи
гарантують, що значення збережуть свої типи, коли будуть
серіалізуватися назад у BSON, що дозволяє уникнути проблеми старих
драйверів, коли масиви могли перетворитися на документи і навпаки.
Крім того, класи успадковують [ArrayObject](class.arrayobject.md) для
більшої зручності використання. Докладніше про серіалізацію та
десеріалізації між змінними PHP та BSON можна прочитати в
специфікації [Постійні дані](mongodb.persistence.md).

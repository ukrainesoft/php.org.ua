- [« Використання Phar-архівів: обгортка потоку
phar](phar.using.stream.md)
- [Створення Phar-архівів»] (phar.creating.md)

- [PHP Manual](index.md)
- [Використання Phar-архівів](phar.using.md)
- Використання Phar-архівів: класи Phar та PharData

## Використання Phar-архівів: класи Phar та PharData

Клас [Phar](class.phar.md) підтримує читання та обробку
Phar-архівів, а також ітерацію через успадковану функціональність
класу
[RecursiveDirectoryIterator](class.recursivedirectoryiterator.md).
Завдяки підтримці інтерфейсу [ArrayAccess](class.arrayaccess.md),
доступ до файлів всередині Phar-архіву може бути отриманий, якби вони
були частиною асоціативного масиву.

Клас [PharData](class.phardata.md) розширює клас
[Phar](class.phar.md) і дозволяє створювати та змінювати нездійснювані
tar- та zip-архіви даних навіть у тому випадку, якщо параметр
`phar.readonly`u003d1 у php.ini. Фактично функції
[PharData::setAlias()](phardata.setalias.md) та
[PharData::setStub()](phardata.setstub.md) відключені, оскільки
концепція псевдоніма та заглушки є унікальною для виконуваних
phar-архівів.

При створенні Phar-архіву в конструктор об'єкта
[Phar](class.phar.md) має бути переданий повний шлях. Спроби
ініціалізації об'єкта Phar з відносними шляхами зазнають невдачі.

Припустимо, що $p є об'єкт Phar, ініціалізований, як показано
нижче:

` <?php$p u003d new Phar('/шлях/к/myphar.phar', 0, 'myphar.phar');?> `

Порожній Phar-архів буде створено в `/шлях/к/myphar.phar`, або якщо файл
`/path/to/myphar.phar` вже існує, він буде відкрито повторно.
Використання `myphar.phar` показує концепцію псевдоніма, який
може бути використаний для вказівки на `/шлях/к/myphar.phar` в
URL-адреси, подібно до того, як показано нижче:

¦<?php//ці два дзвінки file_get_contents() рівнозначні в том випадку, якщо// /шлях/к/myphar.phar має явно заданий псевдонім будь? Phar,// як показано в попередньому прикладі$f u003d file_get_contents('phar:///шлях/к/myphar.phar/whatever.txt');$f u003d file_get_contents('phar://myphar.phar/whate txt');?> `

З щойно створеним об'єктом `$p` класу [Phar](class.phar.md)
можливе наступне:

- `$a u003d $p['file.php']` створить об'єкт класу
[PharFileInfo](class.pharfileinfo.md), який посилатиметься на
вміст `phar://myphar.phar/file.php`
- `$p['file.php'] u003d $v` створить новий файл
(`phar://myphar.phar/file.php`) або перезапише існуючий усередині
`myphar.phar`. `$v` може бути рядком або вказівником на відкритий
файл. В останньому випадку для створення нового файлу буде
використано весь вміст відкритого файлу. Зверніть увагу, що
функціонально еквівалентним цьому буде виклик
`$p->addFromString('file.php', $v)`. Також є можливість
додавання вмісту файлу за допомогою
`$p->addFile('/path/to/file.php', 'file.php')`. Зрештою, порожній
каталог може бути створений за допомогою $p->addEmptyDir('empty')`.
- `isset($p['file.php'])` може бути використане для визначення
існування файлу `phar://myphar.phar/file.php` всередині
`myphar.phar`.
- `unset($p['file.php'])` видаляє файл `phar://myphar.phar/file.php`
з `myphar.phar`.

Крім того, використання об'єкта [Phar](class.phar.md) є
єдиним способом отримати доступ до метаданих архіву (через
[Phar::getMetadata()](phar.getmetadata.md)) і єдиним способом
встановити або отримати заглушку Phar-архіву через
[Phar::getStub()](phar.getstub.md) та
[Phar::setStub()](phar.setstub.md). До того ж, працювати зі стисненням
цілого Phar-архіву можна лише використовуючи клас [Phar](class.phar.md).

Повний перелік функціоналу об'єкта [Phar](class.phar.md)
задокументовано нижче.

Клас [PharFileInfo](class.pharfileinfo.md) розширює клас
[SplFileInfo](class.splfileinfo.md) і додає кілька методів для
роботи з деталями, властивими файлам, які містяться в Phar-архіві,
такими як робота зі стисненням та метаданими.

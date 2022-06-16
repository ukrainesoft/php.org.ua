- [« PharData::buildFromDirectory](phardata.buildfromdirectory.md)
- [PharData::compress »](phardata.compress.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Створення tar/zip-архіву за допомогою ітератора

# PharData::buildFromIterator

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::buildFromIterator — Створення tar/zip-архіву за допомогою
ітератора

### Опис

public
**PharData::buildFromIterator**([Traversable](class.traversable.md)
`$iterator`, ?string `$baseDirectory` u003d **`null`**): array

Заповнення архів tar або zip за допомогою ітератора. Підтримуються два
типу ітераторів: ітератор, який зв'язує файл на диску з файлом усередині
архів та ітератор у стилі DirectoryIterator, який повертає об'єкти
SplFileInfo. Для ітераторів, що повертають об'єкти SplFileInfo, другий
параметр є обов'язковим.

### Список параметрів

`iterator`
Ітератор, що надає зв'язки ключ u003d значення, або об'єкти
SplFileInfo

`baseDirectory`
Для ітераторів, що повертають об'єкти SplFileInfo, частина повного шляху
файлів, що додаються, яка буде видалятися з повного шляху всередині
архів.

### Значення, що повертаються

**PharData::buildFromIterator()** повертає асоціативний масив,
пов'язує шлях до файлу всередині архіву з повним шляхом до файлу на диску.

### Помилки

Метод викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
ітератор повернув некоректне значення, наприклад цілісний ключ
замість рядка. Виняток
[BadMethodCallException](class.badmethodcallexception.md)
викидається коли заданий ітератор, який повертає об'єкти SplFileInfo без
завдання параметра `baseDirectory`. У разі проблем із записом на диск
кидається виняток [PharException](class.pharexception.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --------------------------------------|
| 8.1.0 | **PharData::buildFromIterator()** більше не повертає значення **`false`**. |
| 8.0.0 | `baseDirectory` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **PharData::buildFromIterator()** з
SplFileInfo**

Для більшості tar/zip-архівів, структура відображає наявне дерево
директорій на файловій системі. Наприклад, для створення tar/zip-архіву,
що містить наступну структуру директорій та файлів:

``` examplescode
/path/to/project/
config/
dist.xml
debug.xml
lib/
file1.php
file2.php
src/
processthing.php
www/
index.php
cli/
index.php
````

Потрібно використовувати такий код для створення архіву "project.tar":

`<?php$phar u003d new PharData('project.tar');$phar->buildFromIterator(    new RecursiveIteratorIterator(     new )RecursiveDirectoryIterator('/path/to/'') ?> `

Файл `project.tar` можна використовувати одразу ж після його створення.
**PharData::buildFromIterator()** не здійснює налаштування стиснення або
додавання метаданих. Ці дії необхідно зробити
самостійно, після створення архіву.

Цікаве зауваження: **PharData::buildFromIterator()** також можна
використовувати для копіювання контенту вже існуючого phar, tar або
zip-архіву, так як об'єкт PharData успадковує від
[DirectoryIterator](class.directoryiterator.md):

` <?php$phar u003d new PharData('project.tar');$phar->buildFromIterator(    new RecursiveIteratorIterator(    new Phar('/path/to/anotherphar.ph')) to/anotherphar.phar/path/to/project');$phar->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));?> `

**Приклад #2 Приклад використання **PharData::buildFromIterator()** з
іншим ітератором**

Можна використовувати ітератори, що повертають зв'язку "ключ" u003d\> "значення",
наприклад, [ArrayIterator](class.arrayiterator.md):

`<?php$phar u003d new PharData('project.tar');$phar->buildFromIterator(   new ArrayIterator(     array(      )) another/file.jpg' u003d> fopen('/path/to/bigfile.jpg', 'rb'),     ))));?> `

### Дивіться також

- [Phar::buildFromIterator()](phar.buildfromiterator.md) - Створює
phar-архів з ітератора

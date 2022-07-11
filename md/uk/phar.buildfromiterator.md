- [« Phar::buildFromDirectory](phar.buildfromdirectory.md)
- [Phar::canCompress »](phar.cancompress.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Створює phar-архів із ітератора

# Phar::buildFromIterator

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::buildFromIterator — Створює phar-архів з ітератора

### Опис

public **Phar::buildFromIterator**([Traversable](class.traversable.md)
`$iterator`, ?string `$baseDirectory` u003d **`null`**): array

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Заповнює phar-архів із ітератора. Підтримуються ітератори двох типів:
такі, у яких відображається відповідність імені файлу всередині
phar-архів до файлу на диску, і такі як DirectoryIterator, які
повертають об'єкти SplFileInfo. Для ітераторів, які повертають
об'єкти SplFileInfo, другий параметр є обов'язковим.

### Список параметрів

`iterator`
Будь-який ітератор, який або асоціативно відображає шляхи до файлів усередині
phar-архів до файлів на диску, або повертає об'єкти SplFileInfo.

`baseDirectory`
Для ітераторів, що повертають об'єкти SplFileInfo, частина повного шляху
кожного файлу, яка має бути видалена під час його додавання в
phar-архів.

### Значення, що повертаються

**Phar::buildFromIterator()** повертає асоціативний масив, в якому
відображаються відповідності шляху до файлу всередині архіву до шляху до файлу
файлової системи.

### Помилки

Цей метод викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), коли
ітератор повертає некоректні значення, такі як цілісний ключ
замість рядка. Виняток
[BadMethodCallException](class.badmethodcallexception.md) буде
кинуто, коли ітератор, що базується на SplFileInfo, використовується без
параметра `baseDirectory`. Виняток
[PharException](class.pharexception.md) викидається у разі помилок
збереження phar-архіву.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----------------------------------|
| 8.1.0 | **Phar::buildFromIterator()** більше не повертає значення **`false`**. |
| 8.0.0 | `baseDirectory` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **Phar::buildFromIterator()** з
об'єктами SplFileInfo**

Для більшості phar-архівів, архів відображатиме фактичну структуру
директорії, а другий тип ітератора буде найбільш корисним. Наприклад, він
буде корисним для створення phar-архіву, що містить файли зі структурою
директорій як у цьому прикладі:

``` examplescode
/шлях/до/проекту/
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

Додавання цих файлів в phar-архів "project.phar" може бути
використаний наступний код:

`<?php// створити з псевдонімом "project.phar"$phar u003d new Phar('project.phar', 0, 'project.phar');$phar->buildFromIterator( Itor(Retore /к/проекту')),   '/шлях/к/проекту');$phar->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));?> `

Після цього файл project.phar можна використовувати негайно. Такі
значення як стиснення та метадані не встановлюються методом
**Phar::buildFromIterator()** і можуть бути встановлені після створення
phar-архіву.

Як цікаве зауваження можна відзначити, що
**Phar::buildFromIterator()** також може бути використаний для
копіювання вмісту існуючого phar-архіву, оскільки клас Phar
є нащадком [DirectoryIterator](class.directoryiterator.md):

`<?php// створити з псевдонімом "project.phar"$pharu003du003dNew Phar('project.phar', 0, 'project.phar'); /к/anotherphar.phar')),   'phar:///шлях/к/anotherphar.phar/шлях/к/проекту');$phar->setStub($phar->createDefaultStub('cli/index.php ', 'www/index.php'));?> `

**Приклад #2 Приклад використання **Phar::buildFromIterator()** з іншими
типами ітераторів**

Другий тип передбачає використання будь-якого ітератора, що повертаються
значення якого відображають відповідність імені файлу всередині phar-архіву
до файлу на диску, як у випадку з
[ArrayIterator](class.arrayiterator.md):

`<?php// створити с псевдонімом "project.phar"$phar u003d new Phar('project.phar', 0, 'project.phar');$phar->buildFromIterator(                         /архіва/file.php' u003d> dirname(__FILE__) . '/somefile.php',       ''друг/шлях/всередині/архіву/file.jpg' u003d> fopen('/шлях/к/bigfile.jpg', ' rb'),     )));$phar->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));?> `

### Дивіться також

- [Phar::buildFromDirectory()](phar.buildfromdirectory.md) - Створює
phar-архів із файлів, розташованих усередині директорії

- [« PharData::addFromString](phardata.addfromstring.md)
- [PharData::buildFromIterator »](phardata.buildfromiterator.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Створює tar/zip-архів із файлів у директорії

# PharData::buildFromDirectory

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::buildFromDirectory — Створює tar/zip-архів із файлів у
директорії

### Опис

public **PharData::buildFromDirectory**(string `$directory`, string
`$pattern` u003d ""): array

Наповнює tar/zip-архів вмістом директорії. Другий опціональний
Параметр є регулярним виразом (pcre). Файли, імена яких
підходять під регулярне вираження, будуть включені до архіву, а всі
решта немає. Якщо при створенні архіву потрібна велика вибірковість,
то використовуйте метод
[PharData::buildFromIterator()](phardata.buildfromiterator.md).

### Список параметрів

`directory`
Повний або відносний шлях до каталогу, файли з якого будуть
додано до архіву.

`pattern`
Регулярний вираз, який визначає, які файли необхідно включати в
архів.

### Значення, що повертаються

[Phar::buildFromDirectory()](phar.buildfromdirectory.md) повертає
асоціативний масив, що зв'язує шлях до файлу всередині архіву з повним
шляхом до файлу на диску або **`false`** у разі виникнення помилки.

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), якщо не
вдається ініціалізувати внутрішні ітератори директорії. Виняток
[PharException](class.pharexception.md) викидається при помилках
запису на диск.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------------|
| 8.1.0 | **PharData::buildFromDirectory()** більше не повертає значення **`false`**. |

### Приклади

**Приклад #1 Приклад використання **PharData::buildFromDirectory()****

` <?php$phar u003d new PharData('project.tar');// додамо всі файли в проект$phar->buildFromDirectory(dirname(__FILE__) . '/project');$phar2 u003d new PharData zip');// додамо в проект тільки .php файли$phar2->buildFromDirectory(dirname(__FILE__) . '/project', '/\.php$/');?> `

### Дивіться також

- [Phar::buildFromDirectory()](phar.buildfromdirectory.md) - Створює
phar-архів із файлів, розташованих усередині директорії
- [PharData::buildFromIterator()](phardata.buildfromiterator.md) -
Створення tar/zip-архіву за допомогою ітератора

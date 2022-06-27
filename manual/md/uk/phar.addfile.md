- [« Phar::addEmptyDir](phar.addemptydir.md)
- [Phar::addFromString »](phar.addfromstring.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Додає в phar-архів файл із файлової системи

# Phar::addFile

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::addFile — Додає в phar-архів файл із файлової системи

### Опис

public **Phar::addFile**(string `$filename`, ?string `$localName` u003d
**`null`**): void

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

За допомогою цього методу в phar-архів може бути доданий будь-який файл або
вміст, доступний URL. Якщо вказано необов'язковий другий параметр
`localName`, то файл буде збережено в архіві з таким ім'ям, в іншому
випадку як шлях для збереження всередині архіву буде використаний
параметр `file`. При додаванні вмісту, доступного за URL-адресою, параметр
`localname` має бути вказано, інакше буде викинуто виняток. Цей
метод аналогічний [ZipArchive::addFile()](ziparchive.addfile.md).

### Список параметрів

`filename`
Повний або відносний шлях до файлу у файловій системі, який має
бути доданий до phar-архіву.

`localName`
Шлях, яким файл буде збережено в архіві.

### Значення, що повертаються

Немає значення, що повертається, у разі виникнення помилки викидається
виняток.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----|
| 8.0.0 | `localName` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **Phar::addFile()****

`<?phptry {    $a u003d new Phar('/шлях/к/phar.phar'); $a->addFile('/повний/шлях/до/файлу'); // показує, як зберігається цей файл    $b u003d $a['повний/шлях/к/файлу']->getContent(); $a->addFile('/повний/шлях/до/файлу', 'моя_папка/file.txt'); $c u003d $a['моя_папка/file.txt']->getContent(); // показує використання URL    $a->addFile('http://www.example.com', 'example.md');} catch (Exception $e) {    // обробка помилок}?> `

### Примітки

> **Примітка**: **Phar::addFile()**,
> [Phar::addFromString()](phar.addfromstring.md) та
> [Phar::offsetSet()](phar.offsetset.md) зберігає новий phar-архів
> щоразу під час їх виклику. Якщо продуктивність викликає
> занепокоєння, натомість слід використовувати
> [Phar::buildFromDirectory()](phar.buildfromdirectory.md) або
> [Phar::buildFromIterator()](phar.buildfromiterator.md).

### Дивіться також

- [Phar::offsetSet()](phar.offsetset.md) - Зміна вмісту
файлу
- [PharData::addFile()](phardata.addfile.md) - Додати існуючі
файли до tar/zip-архіву
- [Phar::addFromString()](phar.addfromstring.md) - Додає до
phar-архів файл з рядка
- [Phar::addEmptyDir()](phar.addemptydir.md) - Додає до
phar-архів порожню директорію

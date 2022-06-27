- [« PharData::addEmptyDir](phardata.addemptydir.md)
- [PharData::addFromString »](phardata.addfromstring.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Додати існуючі файли до tar/zip-архіву

# PharData::addFile

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::addFile — Додати існуючі файли до tar/zip-архіву

### Опис

public **PharData::addFile**(string `$filename`, ?string `$localName` u003d
**`null`**): void

За допомогою цього методу можна додати до архіву будь-які файли чи URL-адреси. Якщо
заданий опціональний параметр `localname`, то файл буде додано до архіву
із зазначеним ім'ям, інакше буде використано оригінальне ім'я з
параметра `file`. Для URL локальне ім'я має бути вказано у
обов'язковому порядку, інакше буде викинуто виняток. Метод аналогічний
[ZipArchive::addFile()](ziparchive.addfile.md).

### Список параметрів

`filename`
Повний чи відносний шлях до файлу на диску.

`localName`
Шлях, яким файл необхідно додати до архіву.

### Значення, що повертаються

Нічого не повертає, а у разі виникнення помилки викидає
виняток.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----|
| 8.0.0 | `localName` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **PharData::addFile()****

` <?phptry {   $a u003d new PharData('/path/to/my.tar'); $a->addFile('/full/path/to/file'); // додавання файлу    $b u003d $a['full/path/to/file']->getContent(); $a->addFile('/full/path/to/file', 'my/file.txt'); $c u003d $a['my/file.txt']->getContent(); // додавання URL   $a->addFile('http://www.example.com', 'example.md');} catch (Exception $e) {    // обробка  помилок}?>

### Примітки

> **Примітка**: **PharData::addFile()**,
> [PharData::addFromString()](phardata.addfromstring.md) and
> [PharData::offsetSet()](phardata.offsetset.md) save a new phar
> archive each time вони є called. If performance is a concern,
> [PharData::buildFromDirectory()](phardata.buildfromdirectory.md) or
> [PharData::buildFromIterator()](phardata.buildfromiterator.md)
> should be used instead.

### Дивіться також

- [PharData::offsetSet()](phardata.offsetset.md) - Зміна
вмісту файлу
- [Phar::addFile()](phar.addfile.md) - Додає в phar-архів файл
з файлової системи
- [PharData::addFromString()](phardata.addfromstring.md) - Створити
файл із заданим вмістом у tar/zip-архіві
- [PharData::addEmptyDir()](phardata.addemptydir.md) - Додати
порожню директорію в tar/zip-архів

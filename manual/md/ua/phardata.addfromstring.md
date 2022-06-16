- [« PharData::addFile](phardata.addfile.md)
- [PharData::buildFromDirectory »](phardata.buildfromdirectory.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Створити файл із заданим вмістом у tar/zip-архіві

# PharData::addFromString

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::addFromString — Створити файл із заданим вмістом у
tar/zip-архіві

### Опис

public **PharData::addFromString**(string `$localName`, string
`$contents`): void

Цей метод дозволяє створити всередині архіву файл із заданим текстом. Файл
буде збережено на шляху `localname`. Цей метод аналогічний
[ZipArchive::addFromString()](ziparchive.addfromstring.md).

### Список параметрів

`localName`
Шлях створюваного файлу.

`contents`
Вміст файлу у вигляді рядка

### Значення, що повертаються

Нічого не повертає, у разі виникнення помилки викидає
виняток.

### Приклади

**Приклад #1 Приклад використання **PharData::addFromString()****

` <?phptry {   $a u003d new PharData('/path/to/my.tar'); $a->addFromString('path/to/file.txt', 'my simple file'); $b u003d $a['path/to/file.txt']->getContent(); // Для додавання вмісту через струмову обертку для великих файлів, використовуйтеoffsetSet()   $c u003dfopen('/path/to/hugefile.bin'); $a['largefile.bin'] u003d $c; fclose($c);} catch (Exception $e) {    // обробка помилок}?> `

### Примітки

> **Примітка**: [PharData::addFile()](phardata.addfile.md),
> **PharData::addFromString()** and
> [PharData::offsetSet()](phardata.offsetset.md) save a new phar
> archive each time вони є called. If performance is a concern,
> [PharData::buildFromDirectory()](phardata.buildfromdirectory.md) or
> [PharData::buildFromIterator()](phardata.buildfromiterator.md)
> should be used instead.

### Дивіться також

- [PharData::offsetSet()](phardata.offsetset.md) - Зміна
вмісту файлу
- [Phar::addFromString()](phar.addfromstring.md) - Додає до
phar-архів файл з рядка
- [PharData::addFile()](phardata.addfile.md) - Додати існуючі
файли до tar/zip-архіву
- [PharData::addEmptyDir()](phardata.addemptydir.md) - Додати
порожню директорію в tar/zip-архів

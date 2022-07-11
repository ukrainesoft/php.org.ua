- [« Phar::addFile](phar.addfile.md)
- [Phar::apiVersion »](phar.apiversion.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Додає в phar-архів файл із рядка

# Phar::addFromString

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::addFromString — Додає в phar-архів файл з рядка

### Опис

public **Phar::addFromString**(string `$localName`, string `$contents`):
void

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

За допомогою цього методу в phar-архів може бути доданий будь-який рядок.
Файл буде збережено в архіві під ім'ям, вказаним у параметрі
`localname`. Цей метод аналогічний
[ZipArchive::addFromString()](ziparchive.addfromstring.md).

### Список параметрів

`localName`
Шлях, яким файл буде збережено в архіві.

`contents`
Вміст файлу для збереження.

### Значення, що повертаються

Немає значення, що повертається, у разі виникнення помилки викидається
виняток.

### Приклади

**Приклад #1 Приклад використання **Phar::addFromString()****

`<?phptry {    $a u003d new Phar('/шлях/к/phar.phar'); $a->addFromString('шлях/к/file.txt', 'мій простий файл'); $b u003d $a['шлях/к/file.txt']->getContent(); // для додавання вміст із дескриптора потоку для великих файлів використовуйтеoffsetSet()    $c u003d fopen('/шлях/к/hugefile.bin'); $a['largefile.bin'] u003d $c; fclose($c);} catch (Exception $e) {    // обробка помилок}?> `

### Примітки

> **Примітка**: [Phar::addFile()](phar.addfile.md),
> **Phar::addFromString()** і [Phar::offsetSet()](phar.offsetset.md)
> зберігає новий phar-архів щоразу під час їх виклику. Якщо
> продуктивність викликає занепокоєння, натомість слід
> використовувати
> [Phar::buildFromDirectory()](phar.buildfromdirectory.md) або
> [Phar::buildFromIterator()](phar.buildfromiterator.md).

### Дивіться також

- [Phar::offsetSet()](phar.offsetset.md) - Зміна вмісту
файлу
- [PharData::addFromString()](phardata.addfromstring.md) - Створити
файл із заданим вмістом у tar/zip-архіві
- [Phar::addFile()](phar.addfile.md) - Додає в phar-архів файл
з файлової системи
- [Phar::addEmptyDir()](phar.addemptydir.md) - Додає до
phar-архів порожню директорію

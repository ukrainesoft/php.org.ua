- [«PharData](class.phardata.md)
- [PharData::addFile »](phardata.addfile.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Додати порожню директорію до tar/zip-архіву

# PharData::addEmptyDir

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::addEmptyDir — Додати порожню директорію до tar/zip-архіву

### Опис

public **PharData::addEmptyDir**(string `$directory`): void

За допомогою цього місця можна створити директорію на шляху `dirname`. Цей
метод аналогічний
[ZipArchive::addEmptyDir()](ziparchive.addemptydir.md).

### Список параметрів

`directory`
Шлях створюваної директорії

### Значення, що повертаються

Нічого не вертає. У разі помилок викидає виняток.

### Приклади

**Приклад #1 Приклад використання **PharData::addEmptyDir()****

` <?phptry {   $a u003d new PharData('/path/to/my.tar'); $a->addEmptyDir('/full/path/to/file'); // показує, як зберігається файл    $b u003d $a['full/path/to/file']->isDir();} catch (Exception $e) {    // обробляємо?

### Дивіться також

- [Phar::addEmptyDir()](phar.addemptydir.md) - Додає до
phar-архів порожню директорію
- [PharData::addFile()](phardata.addfile.md) - Додати існуючі
файли до tar/zip-архіву
- [PharData::addFromString()](phardata.addfromstring.md) - Створити
файл із заданим вмістом у tar/zip-архіві

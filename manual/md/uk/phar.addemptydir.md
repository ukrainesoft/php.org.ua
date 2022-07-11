- [«Phar](class.phar.md)
- [Phar::addFile »](phar.addfile.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Додає в phar-архів порожню директорію

# Phar::addEmptyDir

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::addEmptyDir — Додає в phar-архів порожню директорію

### Опис

public **Phar::addEmptyDir**(string `$directory`): void

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

За допомогою цього методу створюється порожня директорія, шлях до якої
вказано в `dirname`. Цей метод аналогічний
[ZipArchive::addEmptyDir()](ziparchive.addemptydir.md).

### Список параметрів

`directory`
Ім'я порожнього каталогу, який має бути створений у phar-архіві.

### Значення, що повертаються

Немає значення, що повертається, у разі виникнення помилки викидається
виняток.

### Приклади

**Приклад #1 Приклад використання **Phar::addEmptyDir()****

`<?phptry {    $a u003d new Phar('/шлях/к/phar.phar'); $a->addEmptyDir('/повний/шлях/до/файлу'); // показує, як зберігається цей файл    $b u003d $a['повний/шлях/к/файлу']->isDir();} catch (Exception $e) {     // об

### Дивіться також

- [PharData::addEmptyDir()](phardata.addemptydir.md) - Додати
порожню директорію в tar/zip-архів
- [Phar::addFile()](phar.addfile.md) - Додає в phar-архів файл
з файлової системи
- [Phar::addFromString()](phar.addfromstring.md) - Додає до
phar-архів файл з рядка

- [« Phar::isCompressed](phar.iscompressed.md)
- [Phar::isValidPharFilename »](phar.isvalidpharfilename.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Перевірити, що phar-архів має заданий формат (tar/phar/zip)

# Phar::isFileFormat

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::isFileFormat — Перевірити, що phar-архів має заданий формат
(tar/phar/zip)

### Опис

public **Phar::isFileFormat**(int `$format`): bool

### Список параметрів

`format`
`Phar::PHAR`, `Phar::TAR` або `Phar::ZIP`, залежно від випробуваного
формату.

### Значення, що повертаються

Повертає **`true`**, якщо phar-архів має вказаний формат

### Помилки

У разі завдання некоректного формату викидається виняток
[PharException](class.pharexception.md).

### Дивіться також

- [Phar::convertToExecutable()](phar.converttoexecutable.md) -
Конвертує phar-архів в інший формат файлу.
- [Phar::convertToData()](phar.converttodata.md) - Конвертує
phar-архів у нездійсненний tar- або zip-файл

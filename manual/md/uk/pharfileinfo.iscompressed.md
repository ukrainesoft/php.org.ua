- [« PharFileInfo::isCRCChecked](pharfileinfo.iscrcchecked.md)
- [PharFileInfo::setMetadata »](pharfileinfo.setmetadata.md)

- [PHP Manual](index.md)
- [PharFileInfo](class.pharfileinfo.md)
- Перевірити, чи стиснутий файл

# PharFileInfo::isCompressed

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

PharFileInfo::isCompressed — Перевірити, чи стиснений файл

### Опис

public **PharFileInfo::isCompressed**(?int `$compression` u003d **`null`**):
bool

Перевіряє, чи стиснений файл усередині Phar-архіву за допомогою Gzip або Bzip2.

### Список параметрів

`compression`
Одна з констант **`Phar::GZ`** або **`Phar::BZ2`**. За замовчуванням -
будь-який тип стиснення.

### Значення, що повертаються

**`true`**, якщо файл стиснутий і **`false`** в іншому випадку.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------|
| 8.0.0 | `compression` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **PharFileInfo::isCompressed()****

`<?phptry {    $p u003d new Phar('/path/to/my.phar', 0, 'my.phar'); $p['myfile.txt'] u003d 'hi'; $p['myfile2.txt'] u003d 'hi'; $p['myfile2.txt']->setCompressedGZ(); $fileu003du003d$p['myfile.txt']; $file2 u003d $p['myfile2.txt']; var_dump($file->isCompressed()); var_dump($file2->isCompressed());} catch (Exception $e) {    echo 'Не удалося створити/змінити phar my.phar: ', $e;}?> `

Результат виконання цього прикладу:

bool(false)
bool(true)

### Дивіться також

- [PharFileInfo::getCompressedSize()](pharfileinfo.getcompressedsize.md) -
Отримати реальний розмір файлу на диску з урахуванням стиснення
- [PharFileInfo::decompress()](pharfileinfo.decompress.md) -
Розтискає поточний файл
- [PharFileInfo::compress()](pharfileinfo.compress.md) - Стиснути
поточний файл за допомогою zlib або bzip2
- [Phar::decompress()](phar.decompress.md) - Розпаковує весь
Phar-архів
- [Phar::compress()](phar.compress.md) - Стискає весь Phar-архів з
за допомогою Gzip- або Bzip2-стиснення
- [Phar::canCompress()](phar.cancompress.md) - Перевіряє,
підтримує модуль phar стиснення з використанням zlib або bzip2
- [Phar::isCompressed()](phar.iscompressed.md) - Повертає Phar::GZ
або PHAR::BZ2, якщо phar-архів стиснутий повністю (.tar.gz/tar.bz і так
далі)
- [Phar::getSupportedCompression()](phar.getsupportedcompression.md) -
Повертає масив підтримуваних алгоритмів стиснення
- [Phar::decompressFiles()](phar.decompressfiles.md) - Розпаковує
всі файли в поточному Phar-архіві
- [Phar::compressFiles()](phar.compressfiles.md) - Стискає всі файли
у поточному Phar-архіві

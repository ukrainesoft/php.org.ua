- [« Phar::getStub](phar.getstub.md)
- [Phar::getSupportedSignatures »](phar.getsupportedsignatures.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Повертає масив підтримуваних алгоритмів стиснення

# Phar::getSupportedCompression

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.2.0)

Phar::getSupportedCompression — Повертає масив підтримуваних
алгоритмів стиснення

### Опис

final public static **Phar::getSupportedCompression**(): array

### Список параметрів

Немає параметрів.

### Значення, що повертаються

Повертає масив, що містить будь-яке з значень `Phar::GZ` або
`Phar::BZ2` залежно від доступності модулів [zlib](book.zlib.md)
та [bz2](book.bzip2.md).

### Дивіться також

- [PharFileInfo::getCompressedSize()](pharfileinfo.getcompressedsize.md) -
Отримати реальний розмір файлу на диску з урахуванням стиснення
- [PharFileInfo::isCompressed()](pharfileinfo.iscompressed.md) -
Перевірити, чи стиснутий файл
- [PharFileInfo::compress()](pharfileinfo.compress.md) - Стиснути
поточний файл за допомогою zlib або bzip2
- [PharFileInfo::decompress()](pharfileinfo.decompress.md) -
Розтискає поточний файл
- [Phar::compress()](phar.compress.md) - Стискає весь Phar-архів з
за допомогою Gzip- або Bzip2-стиснення
- [Phar::decompress()](phar.decompress.md) - Розпаковує весь
Phar-архів
- [Phar::canCompress()](phar.cancompress.md) - Перевіряє,
підтримує модуль phar стиснення з використанням zlib або bzip2
- [Phar::isCompressed()](phar.iscompressed.md) - Повертає Phar::GZ
або PHAR::BZ2, якщо phar-архів стиснутий повністю (.tar.gz/tar.bz і так
далі)
- [Phar::compressFiles()](phar.compressfiles.md) - Стискає всі файли
у поточному Phar-архіві
- [Phar::decompressFiles()](phar.decompressfiles.md) - Розпаковує
всі файли в поточному Phar-архіві

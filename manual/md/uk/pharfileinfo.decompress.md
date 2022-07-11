- [« PharFileInfo::\_\_construct](pharfileinfo.construct.md)
- [PharFileInfo::delMetadata »](pharfileinfo.delmetadata.md)

- [PHP Manual](index.md)
- [PharFileInfo](class.pharfileinfo.md)
- Розтискає поточний файл

# PharFileInfo::decompress

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharFileInfo::decompress — Розтискає поточний файл

### Опис

public **PharFileInfo::decompress**(): bool

Цей метод розтискає файл усередині phar-архіву. Залежно від,
яким методом файл був стиснутий, потрібна наявність модулів
[bzip2](ref.bzip2.md) або [zlib](ref.zlib.md). Бо ця
функціональність змінює phar-архів, необхідно, щоб опція
[phar.readonly](phar.configuration.md#ini.phar.readonly) була
відключена, інакше внести зміни до архіву [Phar](class.phar.md) не
вийде. На архіви [PharData](class.phardata.md) обмеження на
запис не поширюється.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), якщо опція
[phar.readonly](phar.configuration.md#ini.phar.readonly) включена,
або відповідний модуль
[bzip2](ref.bzip2.md)/[zlib](ref.zlib.md) недоступний.

### Приклади

**Приклад #1 Приклад використання **PharFileInfo::decompress()****

`<?phptry {    $p u003d new Phar('/path/to/my.phar', 0, 'my.phar'); $p['myfile.txt'] u003d 'hi'; $fileu003du003d$p['myfile.txt']; $file->compress(Phar::GZ); var_dump($file->isCompressed()); $p['myfile.txt']->decompress(); var_dump($file->isCompressed());} catch (Exception $e) {    echo 'Не удалося створити/змінити my.phar: ', $e;}?> `

Результат виконання цього прикладу:

int(4096)
bool(false)

### Дивіться також

- [PharFileInfo::getCompressedSize()](pharfileinfo.getcompressedsize.md) -
Отримати реальний розмір файлу на диску з урахуванням стиснення
- [PharFileInfo::isCompressed()](pharfileinfo.iscompressed.md) -
Перевірити, чи стиснутий файл
- [PharFileInfo::compress()](pharfileinfo.compress.md) - Стиснути
поточний файл за допомогою zlib або bzip2
- [Phar::canCompress()](phar.cancompress.md) - Перевіряє,
підтримує модуль phar стиснення з використанням zlib або bzip2
- [Phar::isCompressed()](phar.iscompressed.md) - Повертає Phar::GZ
або PHAR::BZ2, якщо phar-архів стиснутий повністю (.tar.gz/tar.bz і так
далі)
- [Phar::compressFiles()](phar.compressfiles.md) - Стискає всі файли
у поточному Phar-архіві
- [Phar::decompressFiles()](phar.decompressfiles.md) - Розпаковує
всі файли в поточному Phar-архіві
- [Phar::compress()](phar.compress.md) - Стискає весь Phar-архів з
за допомогою Gzip- або Bzip2-стиснення
- [Phar::decompress()](phar.decompress.md) - Розпаковує весь
Phar-архів
- [Phar::getSupportedCompression()](phar.getsupportedcompression.md) -
Повертає масив підтримуваних алгоритмів стиснення

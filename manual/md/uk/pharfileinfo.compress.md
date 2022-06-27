- [« PharFileInfo::chmod](pharfileinfo.chmod.md)
- [PharFileInfo::\_\_construct »](pharfileinfo.construct.md)

- [PHP Manual](index.md)
- [PharFileInfo](class.pharfileinfo.md)
- Стиснути поточний файл за допомогою zlib або bzip2

# PharFileInfo::compress

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharFileInfo::compress — Стиснути поточний файл за допомогою zlib або bzip2

### Опис

public **PharFileInfo::compress**(int `$compression`): bool

Цей метод стискає файл усередині phar-архіву за допомогою bzip2 або zlib. Для
конкретних алгоритмів стиснення необхідно, щоб були підключені модулі
[bzip2](ref.bzip2.md) або [zlib](ref.zlib.md) відповідно. Також,
якщо файл вже стислий, то для його розтискання буде потрібно відповідний
модуль. Оскільки ця функціональність змінює вміст архіву,
його нормальної роботи необхідно, щоб INI-опція
[phar.readonly](phar.configuration.md#ini.phar.readonly) була
відключена, інакше не вдасться внести зміни до архіву
[Phar](class.phar.md). Файли [PharData](class.phardata.md) не мають
обмежень, пов'язаних із настроюванням у php.ini.

### Список параметрів

`compression`
Стиснення має бути **`Phar::GZ`** або **`Phar::BZ2`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидає [BadMethodCallException](class.badmethodcallexception.md),
якщо INI-опція
[phar.readonly](phar.configuration.md#ini.phar.readonly) включена, або
якщо відповідний модуль
[bzip2](ref.bzip2.md)/[zlib](ref.zlib.md) недоступний.

### Приклади

**Приклад #1 Приклад використання **PharFileInfo::compress()****

`<?phptry {    $p u003d new Phar('/path/to/my.phar', 0, 'my.phar'); $p['myfile.txt'] u003d 'hi'; $fileu003du003d$p['myfile.txt']; var_dump($file->isCompressed(Phar::BZ2)); $p['myfile.txt']->compress(Phar::BZ2); var_dump($file->isCompressed(Phar::BZ2));} catch (Exception $e) {   echo 'Операції створення/зміни на my.phar завершилися помилкою: ',>$

Результат виконання цього прикладу:

bool(false)
bool(true)

### Дивіться також

- [PharFileInfo::getCompressedSize()](pharfileinfo.getcompressedsize.md) -
Отримати реальний розмір файлу на диску з урахуванням стиснення
- [PharFileInfo::isCompressed()](pharfileinfo.iscompressed.md) -
Перевірити, чи стиснутий файл
- [PharFileInfo::decompress()](pharfileinfo.decompress.md) -
Розтискає поточний файл
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

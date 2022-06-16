- [« PharData::compress](phardata.compress.md)
- [PharData::\_\_construct »](phardata.construct.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Стиснути всі файли в поточному tar/zip-архіві

# PharData::compressFiles

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::compressFiles — Стиснути всі файли у поточному tar/zip-архіві

### Опис

public **PharData::compressFiles**(int `$compression`): void

Для tar-архівів цей метод викине виняток
[BadMethodCallException](class.badmethodcallexception.md), оскільки
Стиснення окремих файлів у tar-архіві не підтримується форматом файлу.
Використовуйте [PharData::compress()](phardata.compress.md) для стиснення
всього tar-архіву.

Для Zip-архівів цей метод стисне всі файли, використовуючи заданий тип
стиску. Для коректної роботи потрібні увімкнені модулі
[zlib](ref.zlib.md) або [bzip2](ref.bzip2.md), залежно від типу
стиску. Також, якщо деякі файли вже були стиснуті, необхідно, щоб
відповідний модуль був увімкнений, інакше не вдасться обробити.

### Список параметрів

`compression`
Одна з констант: `Phar::GZ`, `Phar::BZ2` або `Phar::NONE`, для скасування
стиску.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md) якщо
вимкнена INI-опція
[phar.readonly](phar.configuration.md#ini.phar.readonly), якщо
відсутній необхідний модуль [zlib](ref.zlib.md) або
[bzip2](ref.bzip2.md).

### Приклади

**Приклад #1 Приклад використання **PharData::compressFiles()****

` <?php$p u003d new Phar('/path/to/my.phar', 0, 'my.phar');$p['myfile.txt'] u003d 'hi';$p['myfile2. txt']u003du003d 'hi';foreach ($p as $file) {   var_dump($file->getFileName()); var_dump($file->isCompressed()); var_dump($file->isCompressed(Phar::BZ2)); var_dump($file->isCompressed(Phar::GZ));}$p->compressFiles(Phar::GZ);foreach ($p as $file) {    var_dump($file->getFileName()); var_dump($file->isCompressed()); var_dump($file->isCompressed(Phar::BZ2)); var_dump($file->isCompressed(Phar::GZ));}?> `

Результат виконання цього прикладу:

string(10) "myfile.txt"
bool(false)
bool(false)
bool(false)
string(11) "myfile2.txt"
bool(false)
bool(false)
bool(false)
string(10) "myfile.txt"
int(4096)
bool(false)
bool(true)
string(11) "myfile2.txt"
int(4096)
bool(false)
bool(true)

### Дивіться також

- [PharFileInfo::getCompressedSize()](pharfileinfo.getcompressedsize.md) -
Отримати реальний розмір файлу на диску з урахуванням стиснення
- [PharFileInfo::isCompressed()](pharfileinfo.iscompressed.md) -
Перевірити, чи стиснутий файл
- [PharFileInfo::compress()](pharfileinfo.compress.md) - Стиснути
поточний файл за допомогою zlib або bzip2
- [PharFileInfo::decompress()](pharfileinfo.decompress.md) -
Розтискає поточний файл
- [Phar::canCompress()](phar.cancompress.md) - Перевіряє,
підтримує модуль phar стиснення з використанням zlib або bzip2
- [Phar::isCompressed()](phar.iscompressed.md) - Повертає Phar::GZ
або PHAR::BZ2, якщо phar-архів стиснутий повністю (.tar.gz/tar.bz і так
далі)
- [PharData::decompressFiles()](phardata.decompressfiles.md) -
Розпакувати всі файли в поточному zip-архіві
- [Phar::getSupportedCompression()](phar.getsupportedcompression.md) -
Повертає масив підтримуваних алгоритмів стиснення
- [PharData::compress()](phardata.compress.md) - Стискає весь архів
tar/zip, використовуючи стиснення Gzip або Bzip2
- [PharData::decompress()](phardata.decompress.md) - Розпакувати
весь Phar-архів

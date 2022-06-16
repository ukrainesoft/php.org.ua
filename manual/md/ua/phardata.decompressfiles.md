- [« PharData::decompress](phardata.decompress.md)
- [PharData::delMetadata »](phardata.delmetadata.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Розпакувати всі файли у поточному zip-архіві

# PharData::decompressFiles

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::decompressFiles — Розпакувати всі файли у поточному zip-архіві

### Опис

public **PharData::decompressFiles**(): bool

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Для tar-архівів цей метод викине виняток
[BadMethodCallException](class.badmethodcallexception.md), оскільки
Стиснення окремих файлів у tar-архіві не підтримується форматом файлу.
Використовуйте [PharData::compress()](phardata.compress.md) для стиснення
всього tar-архіву.

Для Zip-архівів цей метод розпакує всі файли вказаним шляхом. Для
коректної роботи потрібні увімкнені модулі [zlib](ref.zlib.md) або
[bzip2](ref.bzip2.md), в залежності від типу стиснення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), якщо
відсутній необхідний модуль [zlib](ref.zlib.md) або
[bzip2](ref.bzip2.md).

### Приклади

**Приклад #1 Приклад використання **PharData::decompressFiles()****

` <?php$p u003d new PharData('/path/to/my.zip');$p['myfile.txt'] u003d 'hi';$p['myfile2.txt'] u003d 'hi'; $p->compressFiles(Phar::GZ);foreach ($p as $file) {    var_dump($file->getFileName()); var_dump($file->isCompressed()); var_dump($file->isCompressed(Phar::BZ2)); var_dump($file->isCompressed(Phar::GZ));}$p->decompressFiles();foreach ($p as $file) {   var_dump($file->getFileName()); var_dump($file->isCompressed()); var_dump($file->isCompressed(Phar::BZ2)); var_dump($file->isCompressed(Phar::GZ));}?> `

Результат виконання цього прикладу:

string(10) "myfile.txt"
int(4096)
bool(false)
bool(true)
string(11) "myfile2.txt"
int(4096)
bool(false)
bool(true)
string(10) "myfile.txt"
bool(false)
bool(false)
bool(false)
string(11) "myfile2.txt"
bool(false)
bool(false)
bool(false)

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
- [PharData::compressFiles()](phardata.compressfiles.md) - Стиснути все
файли у поточному tar/zip-архіві
- [Phar::getSupportedCompression()](phar.getsupportedcompression.md) -
Повертає масив підтримуваних алгоритмів стиснення
- [PharData::compress()](phardata.compress.md) - Стискає весь архів
tar/zip, використовуючи стиснення Gzip або Bzip2
- [PharData::decompress()](phardata.decompress.md) - Розпакувати
весь Phar-архів

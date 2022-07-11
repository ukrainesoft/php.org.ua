- [« Phar::isBuffering](phar.isbuffering.md)
- [Phar::isFileFormat »](phar.isfileformat.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Повертає Phar::GZ або PHAR::BZ2, якщо phar-архів стиснутий повністю
(.tar.gz/tar.bz і так далі)

# Phar::isCompressed

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::isCompressed — Повертає Phar::GZ або PHAR::BZ2, якщо phar-архів
стиснутий повністю (.tar.gz/tar.bz і так далі)

### Опис

public **Phar::isCompressed**(): int\|false

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Повертає Phar::GZ або PHAR::BZ2, якщо phar-архів стиснутий повністю
(.tar.gz/tar.bz тощо). Phar-архіви, що базуються на zip, не можуть
бути стиснуті цілком, тому цей метод завжди повертає **`false`**,
якщо він був викликаний на phar-архіві на zip.

### Список параметрів

Немає параметрів.

### Значення, що повертаються

`Phar::GZ`, `Phar::BZ2` або **`false`**.

### Приклади

**Приклад #1 Приклад використання **Phar::isCompressed()****

`<?phptry {   $phar1 u003d new Phar('myphar.zip.phar'); var_dump($phar1->isCompressed()); $phar2u003du003dnewPhar('myuncompressed.tar.phar'); var_dump($phar2->isCompressed()); $phar2->compress(Phar::GZ); var_dump($phar2->isCompressed() u003du003d Phar::GZ);} catch (Exception $e) {}?> `

Результат виконання цього прикладу:

bool(false)
bool(false)
bool(true)

### Дивіться також

- [PharFileInfo::getCompressedSize()](pharfileinfo.getcompressedsize.md) -
Отримати реальний розмір файлу на диску з урахуванням стиснення
- [PharFileInfo::isCompressed()](pharfileinfo.iscompressed.md) -
Перевірити, чи стиснутий файл
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
- [Phar::compressFiles()](phar.compressfiles.md) - Стискає всі файли
у поточному Phar-архіві
- [Phar::decompressFiles()](phar.decompressfiles.md) - Розпаковує
всі файли в поточному Phar-архіві
- [Phar::getSupportedCompression()](phar.getsupportedcompression.md) -
Повертає масив підтримуваних алгоритмів стиснення

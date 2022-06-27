- [« PharData::copy](phardata.copy.md)
- [PharData::decompressFiles »](phardata.decompressfiles.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Розпакувати весь Phar-архів

# PharData::decompress

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::decompress — Розпакувати весь Phar-архів

### Опис

public **PharData::decompress**(?string `$extension` u003d **`null`**):
?[PharData](class.phardata.md)

Для архівів типу tar цей метод розпаковує весь архів.

Для архівів типу Zip цей метод викине виняток. Для розтискання
gzip-архівів має бути включений модуль [zlib](ref.zlib.md), а для
bzip2, відповідно, модуль [bzip2](ref.bzip2.md).

Також цей метод автоматично змінює розширення файлу, за замовчуванням
`.tar`. Розширення можна вказати явно за допомогою параметра extension.

### Список параметрів

`extension`
За замовчуванням при розпакуванні файлу змінюється розширення на '.tar'. З
за допомогою цього параметра можна вказати нове розширення. Будьте
обережні, тільки архіви, що запускаються, можуть містити `.phar` у своїх
іменах.

### Значення, що повертаються

Повертає об'єкт типу [PharData](class.phardata.md) у випадку
успішного виконання та **`null`** у разі виникнення помилки.

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), якщо
відсутній модуль, необхідний для розпакування: [zlib](ref.zlib.md)
або [bzip2](ref.bzip2.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----|
| 8.0.0 | ` extension ` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **PharData::decompress()****

` <?php$p u003d new PharData('/path/to/my.tar.gz');$p->decompress(); // creates /path/to/my.tar?> `

### Дивіться також

- [PharFileInfo::getCompressedSize()](pharfileinfo.getcompressedsize.md) -
Отримати реальний розмір файлу на диску з урахуванням стиснення
- [PharFileInfo::isCompressed()](pharfileinfo.iscompressed.md) -
Перевірити, чи стиснутий файл
- [PharFileInfo::compress()](pharfileinfo.compress.md) - Стиснути
поточний файл за допомогою zlib або bzip2
- [PharFileInfo::decompress()](pharfileinfo.decompress.md) -
Розтискає поточний файл
- [PharData::compress()](phardata.compress.md) - Стискає весь архів
tar/zip, використовуючи стиснення Gzip або Bzip2
- [Phar::canCompress()](phar.cancompress.md) - Перевіряє,
підтримує модуль phar стиснення з використанням zlib або bzip2
- [Phar::isCompressed()](phar.iscompressed.md) - Повертає Phar::GZ
або PHAR::BZ2, якщо phar-архів стиснутий повністю (.tar.gz/tar.bz і так
далі)
- [PharData::compress()](phardata.compress.md) - Стискає весь архів
tar/zip, використовуючи стиснення Gzip або Bzip2
- [Phar::getSupportedCompression()](phar.getsupportedcompression.md) -
Повертає масив підтримуваних алгоритмів стиснення
- [PharData::compressFiles()](phardata.compressfiles.md) - Стиснути все
файли у поточному tar/zip-архіві
- [PharData::decompressFiles()](phardata.decompressfiles.md) -
Розпакувати всі файли в поточному zip-архіві

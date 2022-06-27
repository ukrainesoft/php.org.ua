- [« Phar::createDefaultStub](phar.createdefaultstub.md)
- [Phar::decompressFiles »](phar.decompressfiles.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Розпаковує весь Phar-архів

# Phar::decompress

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::decompress — Розпаковує весь Phar-архів

### Опис

public **Phar::decompress**(?string `$extension` u003d **`null`**):
?[Phar](class.phar.md)

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Що стосується phar-архівами, заснованими на tar чи phar, цей метод
розпаковує весь архів.

У випадку з phar-архівами, що базуються на zip, виклик даного методу
зазнає невдачі і буде кинуто виняток. Для розпакування архіву,
стисненого за алгоритмом gzip, повинен бути включений модуль
[zlib](ref.zlib.md); для розпакування архіву, стисненого за алгоритмом
bzip2, має бути включений модуль [bzip2](ref.bzip2.md). як і в
у випадку з іншим функціоналом, що модифікує вміст phar-архіву,
успішної роботи даного методу необхідно, щоб INI-змінна
[phar.readonly](phar.configuration.md#ini.phar.readonly) була
відключено.

Крім того, цей метод автоматично змінює розширення файлу архіву:
замовчуванням `.phar` для phar-архівів та `.phar.tar` для phar-архівів,
заснованих на tar. Як альтернатива розширення файлу може бути
встановлено за допомогою другого параметра.

### Список параметрів

`extension`
Розширення розпакованого файлу за замовчуванням є `.phar` і
`.phar.tar`. Цей параметр може бути використаний для завдання іншого
розширення розпакованого файлу. Майте на увазі, що всі виконувані
phar-архіви повинні містити `.phar` у імені файлу.

### Значення, що повертаються

Повертає об'єкт [Phar](class.phar.md) у разі успішного виконання
і **`null`** у разі виникнення помилки.

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), якщо
INI-змінна
[phar.readonly](phar.configuration.md#ini.phar.readonly) включена,
модуль [zlib](ref.zlib.md) недоступний або модуль
[bzip2](ref.bzip2.md) не увімкнено.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----|
| 8.0.0 | ` extension ` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **Phar::decompress()****

` <?php$p u003d new Phar('/шлях/к/my.phar', 0, 'my.phar.gz');$p['myfile.txt'] u003d 'привіт';$p[' myfile2.txt'] u003d 'привіт';$p3 u003d $p2->decompress(); // створить /шлях/к/my.phar?> `

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
- [Phar::compress()](phar.compress.md) - Стискає весь Phar-архів з
за допомогою Gzip- або Bzip2-стиснення
- [Phar::getSupportedCompression()](phar.getsupportedcompression.md) -
Повертає масив підтримуваних алгоритмів стиснення
- [Phar::compressFiles()](phar.compressfiles.md) - Стискає всі файли
у поточному Phar-архіві
- [Phar::decompressFiles()](phar.decompressfiles.md) - Розпаковує
всі файли в поточному Phar-архіві

- [« Phar::compress](phar.compress.md)
- [Phar::\_\_construct »](phar.construct.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Стискає всі файли у поточному Phar-архіві

# Phar::compressFiles

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::compressFiles — Стискає всі файли в поточному Phar-архіві

### Опис

public **Phar::compressFiles**(int `$compression`): void

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

У разі використання з phar-архівами, що базуються на tar, цей метод
викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), оскільки
стиснення окремих файлів усередині tar-архіву не підтримується даними
форматом. Для стиснення цілого phar-архіву, заснованого на tar, використовуйте
[Phar::compress()](phar.compress.md).

У разі використання з phar-архівами, що базуються на zip або phar,
цей метод стискає всі файли в Phar-архіві, використовуючи вказаний алгоритм
стиску. Для можливості скористатися даним методом має бути
увімкнено модуль [zlib](ref.zlib.md) або [bzip2](ref.bzip2.md). Крім
якщо будь-які файли в архіві вже стиснуті з використанням
bzip2/zlib-стискання, то для їх розпакування перед повторним стисненням повинен
бути увімкнений відповідний модуль. Як і у випадку з іншим
функціоналом, що модифікує зміст phar-архіву, для успішної роботи
даного методу необхідно, щоб INI-змінна
[phar.readonly](phar.configuration.md#ini.phar.readonly) була
відключено.

### Список параметрів

`compression`
Стиснення має бути визначено однією з констант: `Phar::GZ`, `Phar::BZ2`
для використання використання відповідного алгоритму стиснення, або
`Phar::NONE` для розпакування.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), якщо
INI-змінна
[phar.readonly](phar.configuration.md#ini.phar.readonly) включена,
модуль [zlib](ref.zlib.md) недоступний або якщо будь-які файли
всередині архіву були стиснуті за допомогою bzip2-стиснення та модуль
[bzip2](ref.bzip2.md) не увімкнено.

### Приклади

**Приклад #1 Приклад використання **Phar::compressFiles()****

` <?php$p u003d new Phar('/шлях/к/my.phar', 0, 'my.phar');$p['myfile.txt'] u003d 'привіт';$p['myfile2. txt'] u003d 'привіт';foreach ($p as $file) {   var_dump($file->getFileName()); var_dump($file->isCompressed()); var_dump($file->isCompressed(Phar::BZ2)); var_dump($file->isCompressed(Phar::GZ));}$p->compressFiles(Phar::GZ);foreach ($p as $file) {    var_dump($file->getFileName()); var_dump($file->isCompressed()); var_dump($file->isCompressed(Phar::BZ2)); var_dump($file->isCompressed(Phar::GZ));}?> `

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
- [Phar::decompressFiles()](phar.decompressfiles.md) - Розпаковує
всі файли в поточному Phar-архіві
- [Phar::getSupportedCompression()](phar.getsupportedcompression.md) -
Повертає масив підтримуваних алгоритмів стиснення
- [Phar::compress()](phar.compress.md) - Стискає весь Phar-архів з
за допомогою Gzip- або Bzip2-стиснення
- [Phar::decompress()](phar.decompress.md) - Розпаковує весь
Phar-архів

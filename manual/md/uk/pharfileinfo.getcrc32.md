- [« PharFileInfo::\_\_destruct](pharfileinfo.destruct.md)
- [PharFileInfo::getCompressedSize
»](pharfileinfo.getcompressedsize.md)

- [PHP Manual](index.md)
- [PharFileInfo](class.pharfileinfo.md)
- Отримати контрольну суму CRC32

# PharFileInfo::getCRC32

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

PharFileInfo::getCRC32 — Отримати контрольну суму CRC32

### Опис

public **PharFileInfo::getCRC32**(): int

Повертає контрольну суму [crc32()](function.crc32.md) для файлу в
Phar-архів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Контрольна сума [crc32()](function.crc32.md) для файлу в
Phar-архів.

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), якщо не
вдалося верифікувати контрольну суму CRC32. Цього практично
неможливо досягти при звичайній роботі, оскільки контрольна сума
перевіряється під час читання та запису файлу.

### Приклади

**Приклад #1 Приклад використання **PharFileInfo::getCRC32()****

`<?phptry {    $p u003d new Phar('/path/to/my.phar', 0, 'my.phar'); $p['myfile.txt'] u003d 'hi'; $fileu003du003d$p['myfile.txt']; echo $file->getCRC32();} catch (Exception $e) {    echo 'Операції запису на my.phar завершилися помилкою: ', $e;}?> `

Результат виконання цього прикладу:

3633523372

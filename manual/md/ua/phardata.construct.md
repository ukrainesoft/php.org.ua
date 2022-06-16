- [« PharData::compressFiles](phardata.compressfiles.md)
- [PharData::convertToData »](phardata.converttodata.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Конструктор об'єкта PharData

# PharData::\_\_construct

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::\_\_construct — Конструктор об'єкта PharData

### Опис

public **PharData::\_\_construct**(
string `$filename`,
int `$flags` u003d FilesystemIterator::SKIP_DOTS \|
FilesystemIterator::UNIX_PATHS,
?string `$alias` u003d **`null`**,
int `$format` u003d 0
)

### Список параметрів

`filename`
Шлях або до існуючого tar/zip-архіву, або до новоствореного

`flags`
Прапори для передачі батьківського класу [Phar](class.phar.md)
[RecursiveDirectoryIterator](class.recursivedirectoryiterator.md).

`alias`
Псевдонім, який необхідно призначити phar-архіву для використання в
потокових обгортках.

`format`
Одна з [констант формату
файлів](phar.constants.md#phar.constants.fileformat) доступна для
класу [Phar](class.phar.md).

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), якщо викликаний
двічі; Викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
Phar-архів неможливо відкрити.

### Приклади

**Приклад #1 Приклад використання **PharData::\_\_construct()****

`<?phptry {   $p u003d new PharData('/path/to/my.tar', Phar::CURRENT_AS_FILEINFO | Phar::KEY_AS_FILENAME);} catch (UnexpectedValue          ');} catch (BadMethodCallException $e) {    echo 'Технічно, ніколи не відбудеться';}echo file_get_contents('phar:///path/to/my.tar/'t'>?

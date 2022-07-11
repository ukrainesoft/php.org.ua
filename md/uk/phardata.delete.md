- [« PharData::delMetadata](phardata.delmetadata.md)
- [PharData::\_\_destruct »](phardata.destruct.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Видалити файл із tar/zip-архіву

# PharData::delete

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::delete — Видалити файл із tar/zip-архіву

### Опис

public **PharData::delete**(string `$localName`): bool

Видаляє файл у архіві. Функціонально аналогічно виклику
[unlink()](function.unlink.md) на еквіваленті потокової обгортки, як
показано на прикладі нижче.

### Список параметрів

`localName`
Шлях до файлу, що видаляється.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, але краще
використовувати перевірку винятків.

### Помилки

Викидає виняток [PharException](class.pharexception.md)
у разі виникнення помилки під час збереження змін на диск.

### Приклади

**Приклад #1 Приклад використання **PharData::delete()****

`<?phptry {   $phar u003d new PharData('myphar.zip'); $phar->delete('unlink/me.php'); // аналог наступного коду:   unlink('phar://myphar.phar/unlink/me.php');} catch (Exception $e) {    // обробка помилок}?> `

### Дивіться також

- [Phar::delete()](phar.delete.md) - Видаляє файл усередині phar-архіву

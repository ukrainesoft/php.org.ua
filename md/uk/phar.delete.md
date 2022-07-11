- [« Phar::delMetadata](phar.delmetadata.md)
- [Phar::\_\_destruct »](phar.destruct.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Видаляє файл усередині phar-архіву

# Phar::delete

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::delete — Видалення файлу всередині phar-архіву

### Опис

public **Phar::delete**(string `$localName`): bool

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Видаляє файл із архіву. Ця функція аналогічна виклику
[unlink()](function.unlink.md) для обгортки потоку, як це показано в
приклад нижче.

### Список параметрів

`localName`
Шлях всередині архіву для видалення файлу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, але краще перевірити,
було викинуто виняток, і вважати успішним виклик, в результаті
якого не було викинуто виняток.

### Помилки

Викидає виняток [PharException](class.pharexception.md), якщо
виникли помилки під час запису змін на диск.

### Приклади

**Приклад #1 Приклад використання **Phar::delete()****

`<?phptry {   $phar u003d new Phar('myphar.phar'); $phar->delete('удали/мене.php'); // це еквівалентно наступному:   unlink('phar://myphar.phar/удали/меня.php');} catch (Exception $e) {    // обробка помилок}?> `

### Дивіться також

- [PharData::delete()](phardata.delete.md) - Видалити файл з
tar/zip-архіву
- [Phar::unlinkArchive()](phar.unlinkarchive.md) - Повністю видалити
архів з пам'яті та з диска

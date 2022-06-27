- [« Phar::stopBuffering](phar.stopbuffering.md)
- [Phar::webPhar »](phar.webphar.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Повністю видалити архів з пам'яті та з диска

# Phar::unlinkArchive

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::unlinkArchive — Повністю видалити архів із пам'яті та з диска

### Опис

final public static **Phar::unlinkArchive**(string `$filename`): bool

Повністю видаляє архів із пам'яті та з диска.

### Список параметрів

`filename`
Шлях до архіву файлової системи.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

У разі присутності відкритих файлових дескрипторів до архіву або
об'єктів [Phar](class.phar.md), [PharData](class.phardata.md),
[PharFileInfo](class.pharfileinfo.md), що посилаються на цей архів,
буде викинуто виняток [PharException](class.pharexception.md).

### Приклади

**Приклад #1 Приклад використання **Phar::unlinkArchive()****

` <?php//просте використанняPhar::unlinkArchive('/path/to/my.phar');// часті варіант використання:$p u003d new Phar('my.phar');$fp u003d fopen(' phar://my.phar/file.txt', 'r');// створюється 'my.phar.gz'$gp u003d $p->compress(Phar::GZ);// удаляються всі посилання на архівunset ($p);fclose($fp);// віддаляються всі сліди існуванняPhar::unlinkArchive('my.phar');?> `

### Дивіться також

- [Phar::delete()](phar.delete.md) - Видаляє файл усередині phar-архіву
- [Phar::offsetUnset()](phar.offsetunset.md) - Видалити файл з
phar-архіву

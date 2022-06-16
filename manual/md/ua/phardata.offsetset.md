- [« PharData::isWritable](phardata.iswritable.md)
- [PharData::offsetUnset »](phardata.offsetunset.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Зміна вмісту файлу

# PharData::offsetSet

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::offsetSet — Зміна вмісту файлу

### Опис

public **PharData::offsetSet**(string `$localName`, resource\|string
`$value`): void

Це реалізація інтерфейсу [ArrayAccess](class.arrayaccess.md),
що дозволяє маніпулювати вмістом tar/zip-архіву в стилі доступу до
елементів масиву. offsetSet використовується для зміни контенту
існуючого файлу, або створення нового.

### Список параметрів

`localName`
Назва файлу (відносний шлях).

`value`
Вміст файлу.

### Значення, що повертаються

Нічого не вертає.

### Помилки

Викидає виняток [PharException](class.pharexception.md)
у разі проблем із записом на диск.

### Приклади

**Приклад #1 Приклад використання **PharData::offsetSet()****

offsetSet не потрібно викликати безпосередньо. Використовуйте синтаксис `[]`.

` <?php$p u003d new PharData('/path/to/my.tar');try {    //  виклик offsetSet    $p['file.txt'] u003d 'Привіт';} catch (Exception echo 'Не удалося змінити file.txt:', $e;}?> `

### Примітки

> **Примітка**: [PharData::addFile()](phardata.addfile.md),
> [PharData::addFromString()](phardata.addfromstring.md) and
> **PharData::offsetSet()** save a new phar archive each time they are
> Called. If performance is a concern,
> [PharData::buildFromDirectory()](phardata.buildfromdirectory.md) or
> [PharData::buildFromIterator()](phardata.buildfromiterator.md)
> should be used instead.

### Дивіться також

- [Phar::offsetSet()](phar.offsetset.md) - Зміна вмісту
файлу

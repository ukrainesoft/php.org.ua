- [«
RecursiveDirectoryIterator](class.recursivedirectoryiterator.md)
- [RecursiveDirectoryIterator::getChildren
»](recursivedirectoryiterator.getchildren.md)

- [PHP Manual](index.md)
- [RecursiveDirectoryIterator](class.recursivedirectoryiterator.md)
- Конструктор класу RecursiveDirectoryIterator

# RecursiveDirectoryIterator::\_\_construct

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

RecursiveDirectoryIterator::\_\_construct — Конструктор класу
RecursiveDirectoryIterator

### Опис

public **RecursiveDirectoryIterator::\_\_construct**(string
`$directory`, int `$flags` u003d FilesystemIterator::KEY_AS_PATHNAME \|
FilesystemIterator::CURRENT_AS_FILEINFO)

Створює новий об'єкт класу **RecursiveDirectoryIterator()**, використовуючи
заданий шлях `directory`.

### Список параметрів

`directory`
Шлях до директорії, якою здійснюватиметься навігація.

`flags`
Можна встановити кілька прапорів, від яких залежатиме поведінка
деяких методів. Список можливих прапорів можна знайти на сторінці
[Предвизначених констант класу
FilesystemIterator](class.filesystemiterator.md#filesystemiterator.constants).
Прапори можна задати пізніше методом
[FilesystemIterator::setFlags()](filesystemiterator.setflags.md).

### Помилки

Викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
директорія `directory` не існує.

Викидає виняток [ValueError](class.valueerror.md), якщо
параметр `directory` містить порожній рядок.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------|
| 8.0.0 | Тепер викидає виняток [ValueError](class.valueerror.md), якщо параметр `directory` містить порожній рядок. раніше викидався виняток [RuntimeException](class.runtimeexception.md). |

### Приклади

**Приклад #1 Приклад використання
[RecursiveDirectoryIterator](class.recursivedirectoryiterator.md)**

` <?php$directory u003d '/tmp';$it u003d new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory));$it->rewind();while($it->valid()) {    if (!) ->isDot()) {        echo 'Ім'я файлу: ' . $it->getSubPathName() . "
";        echo 'Піддиректорія: ' . $it->getSubPath() . "
";        echo 'Ключ: ' . $it->key() . "

";    }    $it->next();}?> `

Результатом виконання цього прикладу буде щось подібне:

Ім'я файлу: fruit/apple.xml
Піддиректорія: fruit
Ключ: /tmp/fruit/apple.xml

Назва файлу: stuff.xml
Піддиректорія:
Ключ: /tmp/stuff.xml

Назва файлу: veggies/carrot.xml
Піддиректорія: veggies
Ключ: /tmp/veggies/carrot.xml

### Дивіться також

- [FilesystemIterator::\_\_construct()](filesystemiterator.construct.md) -
Створює новий ітератор файлової системи
- [RecursiveIteratorIterator::\_\_construct()](recursiveiteratoriterator.construct.md) -
Конструктор класу RecursiveIteratorIterator
- [Предвизначені константи класу
FilesystemIterator](class.filesystemiterator.md#filesystemiterator.constants)

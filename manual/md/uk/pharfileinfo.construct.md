- [« PharFileInfo::compress](pharfileinfo.compress.md)
- [PharFileInfo::decompress »](pharfileinfo.decompress.md)

- [PHP Manual](index.md)
- [PharFileInfo](class.pharfileinfo.md)
- Конструктор об'єкта PharFileInfo

# PharFileInfo::\_\_construct

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

PharFileInfo::\_\_construct — Конструктор об'єкта PharFileInfo

### Опис

public **PharFileInfo::\_\_construct**(string `$filename`)

Не повинен викликатись безпосередньо. Об'єкт PharFileInfo слідує
ініціалізувати за допомогою [Phar::offsetGet()](phar.offsetget.md),
використовуючи синтаксис доступу до масиву.

### Список параметрів

`filename`
Повний URL-файл. Якщо ви бажаєте вийняти файл `my/file.php` з архіву
`boo.phar`, необхідно задати `phar://boo.phar/my/file.php`.

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), якщо
[\_\_construct()](language.oop5.decon.md#object.construct) викликаний
двічі. Викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
запитаний URL некоректний, phar-архів неможливо відкрити або якщо
вказаний файл відсутній в архіві.

### Приклади

**Приклад #1 Приклад використання **PharFileInfo::\_\_construct()****

`<?phptry {    $p u003d new Phar('/path/to/my.phar', 0, 'my.phar'); $p['testfile.txt'] u003d "hi
there
dude";    $file u003d $p['testfile.txt'];    foreach ($file as $line u003d> $text) {        echo "номер строки $line: $text";    }    // так то же работает    $file u003d new PharFileInfo('phar:///path/to/my.phar/testfile.txt');    foreach ($file as $line u003d> $text) {         echo "ряд|$ (Exception $e) {   echo 'Операції Phar завершилися помилкою;}?> `

Результат виконання цього прикладу:

номер рядка 1: hi
номер рядка 2: there
номер рядка 3: dude
номер рядка 1: hi
номер рядка 2: there
номер рядка 3: dude

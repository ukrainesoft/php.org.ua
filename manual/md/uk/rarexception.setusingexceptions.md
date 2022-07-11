- [«
RarException::isUsingExceptions](rarexception.isusingexceptions.md)
- [Zip »](book.zip.md)

- [PHP Manual](index.md)
- [RarException](class.rarexception.md)
- Включити або вимкнути генерацію винятків замість повернення
помилок

# RarException::setUsingExceptions

(PECL rar \>u003d 2.0.0)

RarException::setUsingExceptions — Увімкнути або вимкнути генерацію
винятків замість повернення помилок

### Опис

public static **RarException::setUsingExceptions**(bool
`$using_exceptions`): void

Якщо аргумент заданий як **`true`**, то замість видачі попередження та
повернення помилки, бібліотека UnRAR викидатиме виняток типу
[RarException](class.rarexception.md) у разі виникнення помилки.

Також винятки будуть викинуті у разі таких помилок, що сталися
поза бібліотекою (їх код повернення має дорівнювати -1):

- Спроба твору дій із закритим об'єктом
[RarArchive](class.rararchive.md) або об'єктом
[RarEntry](class.rarentry.md), що відноситься до першого;
- спроба витягти відсутній запис за допомогою
[RarArchive::getEntry()](rararchive.getentry.md).

### Список параметрів

`using_exceptions`
**`true`** для активації генерації винятків, **`false`** для
деактивації (за замовчуванням).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання
**RarException::setUsingExceptions()****

` <?phpvar_dump(RarException::isUsingExceptions());$arch u003d RarArchive::open("does_not_exist.rar");var_dump($arch);RarException::setUsingExceptions(true);var_dump(RarException );$arch u003d RarArchive::open("does_not_exist.rar");var_dump($arch); //not reached?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)

Warning: RarArchive::open(): Помічено до Open does_not_exist.rar: ERAR_EOPEN (file open error) у C:\php_rar runk ests est.php on line 3
bool(false)
bool(true)

Недостатній error: Виразний висновок 'RarException' with message 'unRAR внутрішній error: Захищений від opendoes_not_exist.rar: ERAR_EOPEN (file open error)' в C:\php_rar runk ests est.php:8
Stack trace:
#0 C:\php_rar runk ests est.php(8): RarArchive::open('does_not_exist....')
#1 {main}
thrown in C:\php_rar runk ests est.php on line 8

### Дивіться також

- [RarException::isUsingExceptions()](rarexception.isusingexceptions.md) -
Перевірити, чи будуть функції повертати помилки або викидати
винятки

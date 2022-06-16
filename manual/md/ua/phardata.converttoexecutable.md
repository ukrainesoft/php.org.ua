- [« PharData::convertToData](phardata.converttodata.md)
- [PharData::copy »](phardata.copy.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Конвертація tar/zip-архіву з даними в phar-архів, що запускається

# PharData::convertToExecutable

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::convertToExecutable — Конвертація tar/zip-архіву з даними в
Phar-архів, що запускається

### Опис

public **PharData::convertToExecutable**(?int `$format` u003d **`null`**,
?int `$compression` u003d **`null`**, ?string `$extension` u003d **`null`**):
?[Phar](class.phar.md)

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Цей метод використовується для конвертації tar/zip-архіву
phar-архів, що запускається. Може бути використаний будь-який з трьох запущених
форматів (phar, tar чи zip). Також допустиме стиснення архіву повністю.

Якщо зміни не вказані, цей метод кидає виняток
[BadMethodCallException](class.badmethodcallexception.md).

У разі успішного виконання, цей метод створює новий архів на диску та
повертає об'єкт [Phar](class.phar.md). Старий архів залишається
недоторканим.

### Список параметрів

`format`
Одна з констант: `Phar::PHAR`, `Phar::TAR`, або `Phar::ZIP`. Якщо
задано **`null`**, то буде збережено поточний формат.

`compression`
Одна з констант: `Phar::NONE` (без стиснення всього архіву), `Phar::GZ`
(zlib стиск), `Phar::BZ2` (bzip стиск).

`extension`
Цей параметр використовується для явного завдання розширення для нового
архів. Зверніть увагу, що для того, щоб оброблятися як
phar-архів, файли повинні у своєму розширенні мати `phar`.

При конвертації в phar-архів, розширення за замовчуванням `.phar`,
`.phar.gz` або `.phar.bz2`, залежно від заданого типу стиснення. Для
tar-архівів, розширення за умовчанням `.phar.tar`, `.phar.tar.gz`, та
`.phar.tar.bz2`. Для zip-архівів розширення за промовчанням `.phar.zip`.

### Значення, що повертаються

Цей метод повертає об'єкт [Phar](class.phar.md) і **`null`**
у разі виникнення помилки.

### Помилки

Метод викидає виняток
[BadMethodCallException](class.badmethodcallexception.md) якщо не
може зробити стиснення, або якщо заданий невідомий алгоритм стиснення,
для архіву включена буферизація за допомогою
[Phar::startBuffering()](phar.startbuffering.md), а метод
[Phar::stopBuffering()](phar.stopbuffering.md) не викликався.
Викидається виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
запис заборонено. І викидається
[PharException](class.pharexception.md), якщо виникли проблеми запису
на диск.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------|
| 8.0.0 | `format`, `compression` та `localName` тепер допускають значення null. |

### Приклади

**Приклад #1 Приклад використання **PharData::convertToExecutable()****

Використовуємо PharData::convertToExecutable():

`<?phptry {   $tarphar u003d new PharData('myphar.tar'); // конвертуємо в формат phar     // зверніть увагу, myphar.tar *не* віддаляється    $phar u003d $tarphar->convertToExecutable(Phar::PHAR); // creates myphar.phar   $phar->setStub($phar->createDefaultStub('cli.php', 'web/index.php')); // створюємо myphar.phar.tgz    $compressed u003d $tarphar->convertToExecutable(Phar::TAR, Phar::GZ, '.phar.tgz');} catch (Exception $e)   `

### Дивіться також

- [Phar::convertToExecutable()](phar.converttoexecutable.md) -
Конвертує phar-архів в інший формат файлу.
- [Phar::convertToData()](phar.converttodata.md) - Конвертує
phar-архів у нездійсненний tar- або zip-файл
- [PharData::convertToData()](phardata.converttodata.md) -
Конвертація phar-архіву в tar/zip-архів

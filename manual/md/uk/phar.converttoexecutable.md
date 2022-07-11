- [« Phar::convertToData](phar.converttodata.md)
- [Phar::copy »](phar.copy.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Конвертує phar-архів в інший формат файлу, що виконується.

# Phar::convertToExecutable

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::convertToExecutable — Конвертує phar-архів в інший виконуваний
формат файлу

### Опис

public **Phar::convertToExecutable**(?int `$format` u003d **`null`**, ?int
`$compression` u003d **`null`**, ?string `$extension` u003d **`null`**):
?[Phar](class.phar.md)

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Цей метод використовується для конвертування phar-архіву в інший формат
файлу. Наприклад, він може бути використаний для створення виконуваного
phar-архіву, заснованого на tar, з виконуваного phar-архіву,
заснованого на zip, або із виконуваного phar-архіву з форматом файлу
phar. Крім того, цей метод може бути використаний для стиснення цілого
архів, заснований на tar або phar.

Якщо не було вказано жодних змін, то даний метод викине
виняток [BadMethodCallException](class.badmethodcallexception.md).

У разі успішного виконання цей метод створює на диску новий архів
та повертає об'єкт [Phar](class.phar.md). Старий архів не видаляється з
диска, це має бути зроблено вручну після завершення процесу.

### Список параметрів

`format`
Значенням цього параметра має бути одна з констант: `Phar::PHAR`,
`Phar::TAR` або `Phar::ZIP`. Якщо значення встановлено в **`null`**, то
існуючий формат файлу буде збережено.

`compression`
Значенням цього параметра має бути одна з констант: `Phar::NONE` для
відсутності стиснення всього архіву, `Phar::GZ` для стиснення, заснованого на
zlib, або `Phar::BZ2` для bzip-стиснення.

`extension`
Цей параметр використовується для перевизначення розширення файлу
замовчуванням для конвертованого архіву. Зверніть увагу, що всі
phar-архіви, засновані на tar або zip, повинні містити `.phar` в
розширення файлу, щоб вони могли бути оброблені як phar-архів.

У разі конвертації архіву, заснованого на phar, розширеннями
замовчуванням є `.phar`, `.phar.gz` та `.phar.bz2`, в залежності від
вказаного стиску. У разі конвертації phar-архіву, заснованого на tar,
розширеннями за замовчуванням є `.phar.tar`, `.phar.tar.gz` та
`.phar.tar.bz2`. Для архівів, заснованих на zip, розширенням по
замовчуванням є `.zip`.

### Значення, що повертаються

Даний метод повертає об'єкт [Phar](class.phar.md) до успішного
виконання та **`null`** у разі виникнення помилки.

### Помилки

Цей метод викидає виняток
[BadMethodCallException](class.badmethodcallexception.md) у наступних
випадках: за неможливості стиснення; якщо було передано невідомий алгоритм
стискування; у запитаному архіві було включено буферизацію за допомогою
[Phar::startBuffering()](phar.startbuffering.md) і не була завершена з
[Phar::stopBuffering()](phar.stopbuffering.md). Якщо підтримка
запису вимкнено, то буде кинуто виняток
[UnexpectedValueException](class.unexpectedvalueexception.md). В
у разі виникнення будь-яких проблем у процесі створення phar
викидається виняток [PharException](class.pharexception.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------|
| 8.0.0 | `format`, `compression` та `localName` тепер допускають значення null. |

### Приклади

**Приклад #1 Приклад використання **Phar::convertToExecutable()****

Використання Phar::convertToExecutable():

`<?phptry {   $tarphar u003d new Phar('myphar.phar.tar'); // конвертувати архів в формат phar     // зверніть увагу, миphar.phar.tar *не* буде віддалений    $phar u003d $tarphar->convertToExecu //буде створений myphar.phar    $phar->setStub($phar->createDefaultStub('cli.php', 'web/index.php')); // буде створений myphar.phar.tgz   $compressed u003d $phar->convertToExecutable(Phar::TAR, Phar::GZ, '.phar.tgz');} catch (Exception $                                                                                    | > `

### Дивіться також

- [Phar::convertToData()](phar.converttodata.md) - Конвертує
phar-архів у нездійсненний tar- або zip-файл
- [PharData::convertToExecutable()](phardata.converttoexecutable.md) -
Конвертація tar/zip-архіву з даними в phar-архів, що запускається
- [PharData::convertToData()](phardata.converttodata.md) -
Конвертація phar-архіву в tar/zip-архів

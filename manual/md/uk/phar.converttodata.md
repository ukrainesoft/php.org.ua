- [« Phar::\_\_construct](phar.construct.md)
- [Phar::convertToExecutable »](phar.converttoexecutable.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Конвертує phar-архів у невиконаний tar- або zip-файл

# Phar::convertToData

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::convertToData — Конвертує phar-архів у невиконаний tar- або
zip-файл

### Опис

public **Phar::convertToData**(?int `$format` u003d **`null`**, ?int
`$compression` u003d **`null`**, ?string `$extension` u003d **`null`**):
?[PharData](class.phardata.md)

Цей метод використовується для конвертування phar-архів у tar- або
zip-файл. Щоб створити зробити tar або zip нездійсненним, з
створюваного в результаті конвертації архіву видаляються завантаження та
псевдонім Phar-архіву.

Якщо не було вказано жодних змін, то даний метод викине
виняток [BadMethodCallException](class.badmethodcallexception.md),
якщо формат файлу архіву є phar. У разі використання з
архівами у форматі tar або zip, даний метод конвертує архів у
нездійсненний архів.

У разі успішного виконання цей метод створює на диску новий архів
та повертає об'єкт [PharData](class.phardata.md). Старий архів не
видаляється з диска, це має бути зроблено вручну після завершення
процесу.

### Список параметрів

`format`
Значенням цього параметра має бути одна з констант: `Phar::TAR` або
`Phar::ZIP`. Якщо значення встановлено в **`null`**, то існуючий
формат файлу буде збережено.

`compression`
Значенням цього параметра має бути одна з констант: `Phar::NONE` для
відсутності стиснення всього архіву, `Phar::GZ` для стиснення, заснованого на
zlib, або `Phar::BZ2` для bzip-стиснення.

`extension`
Цей параметр використовується для перевизначення розширення файлу
замовчуванням для конвертованого архіву. Зверніть увагу, що `.phar`
не може бути використано будь-де в імені файлу невиконаного tar-
або zip-архів.

У разі конвертації phar-архіву, заснованого на tar, розширеннями
замовчуванням є: `.tar`, `.tar.gz` та `.tar.bz2`, в залежності від
вказаного стиску. Для архівів, заснованих на zip, розширенням по
замовчуванням є `.zip`.

### Значення, що повертаються

Цей метод повертає об'єкт [PharData](class.phardata.md) у разі
успішного виконання та **`null`** у разі виникнення помилки.

### Помилки

Цей метод викидає виняток
[BadMethodCallException](class.badmethodcallexception.md) у наступних
випадках: за неможливості стиснення; якщо було передано невідомий алгоритм
стискування; у запитаному архіві було включено буферизацію за допомогою
[Phar::startBuffering()](phar.startbuffering.md) і не була завершена з
[Phar::stopBuffering()](phar.stopbuffering.md). В разі
виникнення будь-яких проблем у процесі створення phar буде
викинутий виняток [PharException](class.pharexception.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------|
| 8.0.0 | `format`, `compression` та `extension` тепер допускають значення null. |

### Приклади

**Приклад #1 Приклад використання **Phar::convertToData()****

Використання Phar::convertToData():

`<?phptry {   $tarphar u003d new Phar('myphar.phar.tar'); // зверніть увагу, що myphar.phar.tar *не* буде віддалений    // конверувати архів в невиконуваний tar-формат     // буде створений myr  //  конверувати архів в невиконаний zip-формат файлу, буде створений myphar.zip    $zip u003d $tarphar->convertToData(Phar::ZIP); // буде створен myphar.tbz    $tgz u003d $tarphar->convertToData(Phar::TAR, Phar::BZ2, '.tbz'); // буде створен myphar.phar.tgz   $phar u003d $tarphar->convertToData(Phar::PHAR); // буде викинуто виняток} catch (Exception $e) {     // обробка помилок}?> `

### Дивіться також

- [Phar::convertToExecutable()](phar.converttoexecutable.md) -
Конвертує phar-архів в інший формат файлу.
- [PharData::convertToExecutable()](phardata.converttoexecutable.md) -
Конвертація tar/zip-архіву з даними в phar-архів, що запускається
- [PharData::convertToData()](phardata.converttodata.md) -
Конвертація phar-архіву в tar/zip-архів

- [« PharData::\_\_construct](phardata.construct.md)
- [PharData::convertToExecutable »](phardata.converttoexecutable.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Конвертація phar-архіву в tar/zip-архів, що не запускається.

# PharData::convertToData

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::convertToData — Конвертація phar-архіву в незапускається
tar/zip-архів

### Опис

public **PharData::convertToData**(?int `$format` u003d **`null`**, ?int
`$compression` u003d **`null`**, ?string `$extension` u003d **`null`**):
?[PharData](class.phardata.md)

Цей метод використовується для перетворення tar/zip-архіву.
в інший формат, що не запускається.

Якщо не вказано жодних змін, то буде викинуто виняток
[BadMethodCallException](class.badmethodcallexception.md). Цей метод
можна використовувати для перетворення tar-архіву на zip-архів і навпаки.
Незважаючи на те, що можна змінити стиск для tar-архіву за допомогою
цього методу, для цього краще використовувати метод
[PharData::compress()](phardata.compress.md).

У разі успішного виконання буде створено новий архів на диску та
повернутий об'єкт [PharData](class.phardata.md). Старий архів віддалятися
не буде.

### Список параметрів

`format`
Одна з констант: `Phar::TAR` або `Phar::ZIP`. Якщо поставити як
**`null`**, то буде використано поточний формат.

`compression`
Одна з констант: `Phar::NONE` (для відключення стиснення всього архіву),
`Phar::GZ` (для zlib-стиснення), `Phar::BZ2` (для bzip-стиснення).

`extension`
Цей параметр використовується для явної вказівки на розширення нового архіву.
Зверніть увагу, що для архівів, що не запускаються, в жодному разі не можна
допускати появу підрядка `.phar` у будь-якому місці імені файлу.

За замовчуванням для tar-архівів використовуються розширення: `.tar`, `.tar.gz`
та `.tar.bz2`. Для zip-архівів: `.zip`.

### Значення, що повертаються

Метод повертає об'єкт [PharData](class.phardata.md) або **`null`**
у разі виникнення помилки.

### Помилки

Метод викидає
виняток[BadMethodCallException](class.badmethodcallexception.md)
коли не може зробити стиснення, коли заданий невідомий метод стиснення,
для архіву включена буферизація за допомогою
[Phar::startBuffering()](phar.startbuffering.md), і не відключена при
допомоги [Phar::stopBuffering()](phar.stopbuffering.md). Виняток
[PharException](class.pharexception.md) викидається за будь-яких
проблем створення phar-архіву.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------|
| 8.0.0 | `format`, `compression` та `extension` тепер допускають значення null. |

### Приклади

**Приклад #1 Приклад використання **PharData::convertToData()****

Використання PharData::convertToData():

`<?phptry {   $tarphar u003d new PharData('myphar.tar'); // зверніть увагу, що myphar.tar *не* удаляється     // створюємо myphar.zip    $zip u003d $tarphar->convertToData(Phar::ZIP); // створюємо myphar.tbz    $tgz u003d $zip->convertToData(Phar::TAR, Phar::BZ2, '.tbz'); // створюємо myphar.phar.tgz    $phar u003d $tarphar->convertToData(Phar::PHAR); // викидає виняток} catch (Exception $e) {    // обробка помилок}?> `

### Дивіться також

- [Phar::convertToExecutable()](phar.converttoexecutable.md) -
Конвертує phar-архів в інший формат файлу.
- [Phar::convertToData()](phar.converttodata.md) - Конвертує
phar-архів у нездійсненний tar- або zip-файл
- [PharData::convertToExecutable()](phardata.converttoexecutable.md) -
Конвертація tar/zip-архіву з даними в phar-архів, що запускається

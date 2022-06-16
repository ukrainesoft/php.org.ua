- [«
ZipArchive::setCompressionIndex](ziparchive.setcompressionindex.md)
- [ZipArchive::setEncryptionIndex
»](ziparchive.setencryptionindex.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Встановити метод стиснення запису, заданого на ім'я

# ZipArchive::setCompressionName

(PHP 7, PHP 8, PECL zip \>u003d 1.13.0)

ZipArchive::setCompressionName — Встановити метод стиснення запису,
заданої на ім'я

### Опис

public **ZipArchive::setCompressionName**(string `$name`, int `$method`,
int `$compflags` u003d 0): bool

Встановлює метод стиснення запису заданого на ім'я.

### Список параметрів

`name`
Назва запису.

`method`
Метод стиснення, одна з констант **`ZipArchive::CM_*`**.

`compflags`
Рівень стиснення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Додати до архіву файли з різними методами стиснення**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test.zip', ZipArchive::CREATE);if ($res u003du003du003d TRUE) {    $zip->addFromString('fo' , 'Деякий текст'); $zip->addFromString('bar', 'Деякий інший текст'); $zip->setCompressionName('foo', ZipArchive::CM_STORE); $zip->setCompressionName('bar', ZipArchive::CM_DEFLATE); $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `

**Приклад #2 Додати файл та встановити метод стиснення**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test.zip', ZipArchive::CREATE);if ($res u003du003du003d TRUE) {    $zip->addFile('foo. jpg', 'bar.jpg'); $zip->setCompressionName('bar.jpg', ZipArchive::CM_XZ); $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `

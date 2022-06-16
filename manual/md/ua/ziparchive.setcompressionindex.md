- [« ZipArchive::setCommentName](ziparchive.setcommentname.md)
- [ZipArchive::setCompressionName
»](ziparchive.setcompressionname.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Встановити метод стиснення запису, заданого його індексом

# ZipArchive::setCompressionIndex

(PHP 7, PHP 8, PECL zip \>u003d 1.13.0)

ZipArchive::setCompressionIndex — Встановити метод стиснення запису,
заданою її індексом

### Опис

public **ZipArchive::setCompressionIndex**(int `$index`, int `$method`,
int `$compflags` u003d 0): bool

Встановлює метод стиснення запису, заданого його індексом.

### Список параметрів

`index`
Індекс запису.

`method`
Метод стиснення, одна з констант **`ZipArchive::CM_*`**.

`compflags`
Рівень стиснення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Додати до архіву файли з різними методами стиснення**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test.zip', ZipArchive::CREATE);if ($res u003du003du003d TRUE) {    $zip->addFromString('fo' , 'Деякий текст'); $zip->addFromString('bar', 'Деякий інший текст'); $zip->setCompressionIndex(0, ZipArchive::CM_STORE); $zip->setCompressionIndex(1, ZipArchive::CM_DEFLATE); $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `

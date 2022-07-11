- [«
ZipArchive::registerProgressCallback](ziparchive.registerprogresscallback.md)
- [ZipArchive::renameName »](ziparchive.renamename.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Перейменовує елемент за його індексом

# ZipArchive::renameIndex

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.5.0)

ZipArchive::renameIndex — Перейменовує елемент за його індексом

### Опис

public **ZipArchive::renameIndex**(int `$index`, string `$new_name`):
bool

Перейменовує елемент за його індексом.

### Список параметрів

`index`
Індекс елемента для перейменування.

`new_name`
Нове ім'я.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Перейменування одного елемента**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test.zip');if ($res u003du003du003d TRUE) {    $zip->renameIndex(2,'newname.txt') ; $zip->close();} else {    echo 'помилка з кодом:' . $res;}?> `

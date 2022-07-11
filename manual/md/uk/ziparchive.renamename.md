- [« ZipArchive::renameIndex](ziparchive.renameindex.md)
- [ZipArchive::replaceFile »](ziparchive.replacefile.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Перейменовує елемент на його ім'я

# ZipArchive::renameName

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.5.0)

ZipArchive::renameName — Перейменує елемент на ім'я

### Опис

public **ZipArchive::renameName**(string `$name`, string `$new_name`):
bool

Перейменовує елемент, заданий на ім'я.

### Список параметрів

`name`
Назва елемента для перейменування.

`new_name`
Нове ім'я.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Перейменування одного елемента**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test.zip');if ($res u003du003du003d TRUE) {    $zip->renameName('currentname.txt','newname .txt'); $zip->close();} else {    echo 'помилка з кодом:' . $res;}?> `

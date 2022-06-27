- [« ZipArchive::getArchiveComment](ziparchive.getarchivecomment.md)
- [ZipArchive::getCommentName »](ziparchive.getcommentname.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Повертає коментар елемента, використовуючи його індекс

# ZipArchive::getCommentIndex

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.4.0)

ZipArchive::getCommentIndex — Повертає коментар елемента, використовуючи
його індекс

### Опис

public **ZipArchive::getCommentIndex**(int `$index`, int `$flags` u003d 0):
string\|false

Повертає коментар елемента, використовуючи його індекс.

### Список параметрів

`index`
Індекс запису.

`flags`
Якщо прапор встановлений у **`ZipArchive::FL_UNCHANGED`**, повертається
оригінальний незмінений коментар.

### Значення, що повертаються

Повертає коментар при успіху або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Вивести коментар елемента**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test1.zip');if ($res u003du003du003d TRUE) {   var_dump($zip->getCommentIndex(1));} else {    echo 'Помилка з кодом:' . $res;}?> `

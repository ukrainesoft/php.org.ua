- [« ZipArchive::extractTo](ziparchive.extractto.md)
- [ZipArchive::getCommentIndex »](ziparchive.getcommentindex.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Повертає коментар ZIP-архіву

# ZipArchive::getArchiveComment

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.1.0)

ZipArchive::getArchiveComment — Повертає коментар ZIP-архіву

### Опис

public **ZipArchive::getArchiveComment**(int `$flags` u003d 0):
string\|false

Повертає коментар ZIP-архіву.

### Список параметрів

`flags`
Якщо прапор встановлений у **`ZipArchive::FL_UNCHANGED`**, повертається
оригінальний незмінений коментар.

### Значення, що повертаються

Повертає коментар ZIP-архіву або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Вивести коментар архіву**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test_with_comment.zip');if ($res u003du003du003d TRUE) {    var_dump($zip->getArchiveComment()); /* Або використовуючи властивість */    var_dump($zip->comment);} else {    echo 'Помилка з кодом:' . $res;}?> `

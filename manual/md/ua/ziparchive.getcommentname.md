- [« ZipArchive::getCommentIndex](ziparchive.getcommentindex.md)
- [ZipArchive::getExternalAttributesIndex
»](ziparchive.getexternalattributesindex.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Повертає коментар елемента, використовуючи його ім'я

# ZipArchive::getCommentName

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.4.0)

ZipArchive::getCommentName — Повертає коментар елемента за допомогою
його ім'я

### Опис

public **ZipArchive::getCommentName**(string `$name`, int `$flags` u003d 0):
string\|false

Повертає коментар елемента, використовуючи його ім'я.

### Список параметрів

`name`
Назва елемента.

`flags`
Якщо прапор встановлений у **`ZipArchive::FL_UNCHANGED`**, повертається
оригінальний незмінений коментар.

### Значення, що повертаються

Повертає коментар при успіху або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Вивести коментар елемента**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test1.zip');if ($res u003du003du003d TRUE) {   var_dump($zip->getCommentName('test/entry1.txt '));} else {   echo 'Помилка з кодом:' . $res;}?> `

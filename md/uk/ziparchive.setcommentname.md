- [« ZipArchive::setCommentIndex](ziparchive.setcommentindex.md)
- [ZipArchive::setCompressionIndex
»](ziparchive.setcompressionindex.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Встановлює коментар до елемента, заданого на ім'я

# ZipArchive::setCommentName

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.4.0)

ZipArchive::setCommentName — Встановлює коментар до елемента,
заданому на ім'я

### Опис

public **ZipArchive::setCommentName**(string `$name`, string
`$comment`): bool

Встановлює коментар до елемента, заданого на ім'я.

### Список параметрів

`name`
Назва елемента.

`comment`
Зміст коментаря.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Відкриття архіву та встановлення коментаря до елемента**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test.zip');if ($res u003du003du003d TRUE) {    $zip->setCommentName('entry1.txt', 'нова запис коментар'; $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `

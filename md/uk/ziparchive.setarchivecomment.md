- [« ZipArchive::replaceFile](ziparchive.replacefile.md)
- [ZipArchive::setCommentIndex »](ziparchive.setcommentindex.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Встановлює коментар до ZIP-архіву

# ZipArchive::setArchiveComment

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.4.0)

ZipArchive::setArchiveComment — Встановлює коментар до ZIP-архіву

### Опис

public **ZipArchive::setArchiveComment**(string `$comment`): bool

Встановлює коментар до ZIP-архіву.

### Список параметрів

`comment`
Зміст коментаря.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Створення архіву та встановлення коментарів**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test.zip', ZipArchive::CREATE);if ($res u003du003du003d TRUE) {    $zip->addFromString('test. txt', 'вміст файлу'); $zip->setArchiveComment('новий коментар архіву'); $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `

- [ZipArchive](class.ziparchive.md)
- [ZipArchive::addFile »](ziparchive.addfile.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Додає нову директорію

# ZipArchive::addEmptyDir

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.8.0)

ZipArchive::addEmptyDir — Додає нову директорію

### Опис

public **ZipArchive::addEmptyDir**(string `$dirname`, int `$flags` u003d 0):
bool

Додає порожню директорію до архіву.

### Список параметрів

`dirname`
Директорія додавання.

`flags`
Бітова маска, що складається з **`ZipArchive::FL_ENC_GUESS`**,
**`ZipArchive::FL_ENC_UTF_8`**, **`ZipArchive::FL_ENC_CP437`**.
Поведінка констант описано на сторінці
[ZIP-константи](zip.constants.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|----------------|----------------------------|
| 8.0.0/1.18.0 | Доданий параметр `flags`. |

### Приклади

**Приклад #1 Створення нової директорії в архіві.**

`<?php$zip u003d new ZipArchive;if ($zip->open('test.zip') u003du003du003d TRUE) {    if($zip->addEmptyDir('newDirectory')) {           ; } else {        echo 'Неможливо створити директорію'; }   $zip->close();} else {   echo 'помилка';}?> `

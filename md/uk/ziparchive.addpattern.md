- [« ZipArchive::addGlob](ziparchive.addglob.md)
- [ZipArchive::clearError »](ziparchive.clearerror.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Додати файли з директорії відповідно до шаблону регулярного
висловлювання PCRE

# ZipArchive::addPattern

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL zip \>u003d 1.9.0)

ZipArchive::addPattern — Додати файли з директорії відповідно до
шаблоном регулярного вираження PCRE

### Опис

public **ZipArchive::addPattern**(string `$pattern`, string `$path` u003d
".", array `$options` u003d \[\]): array\|false

Додає файли з директорії відповідно до шаблону регулярного
висловлювання `pattern`. Операція не є рекурсивною. Шаблон застосовується тільки до
імен файлів.

### Список параметрів

`pattern`
Шаблон [PCRE](book.pcre.md).

`path`
Директорія для сканування. За промовчанням вибирається поточна директорія.

`options`
Асоціативний масив параметрів, що приймаються
[ZipArchive::addGlob()](ziparchive.addglob.md).

### Значення, що повертаються

Масив (array) доданих файлів у разі успішного виконання або
**`false`** у разі виникнення помилки

### Приклади

**Приклад #1 Приклад використання **ZipArchive::addPattern()****

Додати до архіву всі текстові файли та файли скриптів PHP з поточної
директорії

` <?php$zip u003d new ZipArchive();$ret u003d $zip->open('application.zip', ZipArchive::CREATE || ZipArchive::OVERWRITE);if ($ret !u003du003d TRUE) { 'Помилка з кодом %d', $ret);} else {    $directory u003drealpath('.'); $options u003d array('add_path' u003d> 'sources/', 'remove_path' u003d> $directory); $zip->addPattern('/\.(?:php|txt)$/', $directory, $options); $zip->close();}?> `

### Дивіться також

- [ZipArchive::addFile()](ziparchive.addfile.md) - Додає до
ZIP-архів файл за вказаним шляхом
- [ZipArchive::addGlob()](ziparchive.addglob.md) - Додати файли з
директорії відповідно до шаблону

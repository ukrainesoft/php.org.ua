- [« ZipArchive::deleteName](ziparchive.deletename.md)
- [ZipArchive::getArchiveComment »](ziparchive.getarchivecomment.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Витягує вміст архіву

# ZipArchive::extractTo

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.1.0)

ZipArchive::extractTo — Витягує вміст архіву

### Опис

public **ZipArchive::extractTo**(string `$pathto`, array\|string\|null
`$files` u003d **`null`**): bool

Вилучення всього архіву або його частини у вказане місце призначення.

**Увага**

Дозволи за промовчанням для вилучених файлів та каталогів надають
максимально широкий доступ. Це можна обмежити установкою поточного
umask, який змінюється за допомогою [umask()](function.umask.md).

### Список параметрів

`pathto`
Місце призначення, куди виймати файли.

`files`
Елементи для вилучення. Може приймати як одне значення, так і масив
записів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Вийняти весь вміст**

` <?php$zip u003d new ZipArchive;if ($zip->open('test.zip') u003du003du003d TRUE) {   $zip->extractTo('/my/destination/dir/'); $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `

**Приклад #2 Вийняти два елементи**

` <?php$zip u003d new ZipArchive;$res u003d $zip->open('test_im.zip');if ($res u003du003du003d TRUE) {    $zip->extractTo('/my/destination/dir/ ', array('pear_item.gif', 'testfromfile.php')); $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `

### Примітки

> **Примітка**:
>
> Файлові системи Windows NTFS не підтримують деякі символи
> імена файлів, а саме `<|>*?":`. Імена файлів з точкою в кінці також
> не підтримуються. На відміну від деяких інструментів вилучення,
> цей метод не підтримує заміну цих символів на підкреслення, а
> натомість виникає помилка при вийманні таких файлів.

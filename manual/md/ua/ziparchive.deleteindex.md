- [« ZipArchive::count](ziparchive.count.md)
- [ZipArchive::deleteName »](ziparchive.deletename.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Видаляє елемент в архіві, використовуючи його індекс

# ZipArchive::deleteIndex

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.5.0)

ZipArchive::deleteIndex — Видаляє елемент в архіві за допомогою його індексу.

### Опис

public **ZipArchive::deleteIndex**(int `$index`): bool

Видаляє елемент (файл або каталог) в архіві за допомогою його індексу.

### Список параметрів

`index`
Індекс елемент видалення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Видалити файл із архіву, використовуючи його індекс**

` <?php$zip u003d new ZipArchive;if ($zip->open('test.zip') u003du003du003d TRUE) {   $zip->deleteIndex(2); $zip->close(); echo 'готово';} else {    echo 'помилка';}?> `

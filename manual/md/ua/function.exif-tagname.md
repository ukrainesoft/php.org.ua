- [«exif_read_data](function.exif-read-data.md)
- [exif_thumbnail »] (function.exif-thumbnail.md)

- [PHP Manual](index.md)
- [Exif Функції](ref.exif.md)
- Отримання імені заголовка за його індексом

# exif_tagname

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

exif_tagname — Отримання імені заголовка за його індексом

### Опис

**exif_tagname**(int `$index`): string\|false

### Список параметрів

`index`
ID тега, ім'я якого потрібно отримати.

### Значення, що повертаються

Повертає ім'я заголовка або **`false`**, якщо `index` не є раніше
певним ідентифікатором EXIF тега.

### Приклади

**Приклад #1 Приклад використання **exif_tagname()****

` <?phpecho "256: ".exif_tagname(256).PHP_EOL;echo "257: ".exif_tagname(257).PHP_EOL;?> `

Результат виконання цього прикладу:

256: ImageWidth
257: ImageLength

### Дивіться також

- [exif_imagetype()](function.exif-imagetype.md) - Determine the
type of an image
- [» EXIF специфікація](http://exif.org/Exif2-2.PDF)
- [»EXIF
теги](http://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/EXIF.md)

- [«gzgetss](function.gzgetss.md)
- [gzopen »] (function.gzopen.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Розпакувати стислий рядок

# gzinflate

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gzinflate — Розпакувати стислий рядок

### Опис

**gzinflate**(string `$data`, int `$max_length` u003d 0): string\|false

Розпаковує стислий рядок.

### Список параметрів

`data`
Дані, стиснуті функцією [gzdeflate()](function.gzdeflate.md).

`max_length`
Максимальний розмір даних, що декодуються.

### Значення, що повертаються

Розпаковані дані або **`false`** у разі виникнення помилки.

Функція поверне помилку, якщо стиснуті дані в 32768 разів більші за розмір.
стислих даних `data` або, якщо `max_length` не `0` і більше, ніж
необов'язковий параметр `max_length`.

### Приклади

**Приклад #1 Приклад використання **gzinflate()****

` <?php$compressed   u003d gzdeflate('Сожми мені', 9);$uncompressedu003du003dgzinflate($compressed);echo $uncompressed;?> `

### Дивіться також

- [gzdeflate()](function.gzdeflate.md) - Стисне рядок
- [gzcompress()](function.gzcompress.md) - Стиснути рядок
- [gzuncompress()](function.gzuncompress.md) - Розпакувати стиснуту
рядок
- [gzencode()](function.gzencode.md) - Створити стислий рядок gzip

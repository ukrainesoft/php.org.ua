- [«gztell](function.gztell.md)
- [gzwrite »] (function.gzwrite.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Розпакувати стислий рядок

# gzuncompress

(PHP 4 \>u003d 4.0.1, PHP 5, PHP 7, PHP 8)

gzuncompress — Розпакувати стислий рядок

### Опис

**gzuncompress**(string `$data`, int `$max_length` u003d 0): string\|false

Розпаковує стислий рядок.

### Список параметрів

`data`
Дані, стиснуті функцією [gzcompress()](function.gzcompress.md).

`max_length`
Максимальний розмір даних декодування.

### Значення, що повертаються

Вихідні несжаті дані або **`false`** у разі виникнення помилки.

Функція також повідомить про помилку у разі, якщо стиснуті дані в 32768
разів більше розміру стислих даних `data` або більше параметра
`max_length`.

### Приклади

**Приклад #1 Приклад використання **gzuncompress()****

` <?php$compressed   u003d gzcompress('Сожми меня', 9);$uncompressed u003d gzuncompress($compressed);echo $uncompressed;?> `

### Дивіться також

- [gzcompress()](function.gzcompress.md) - Стиснути рядок
- [gzinflate()](function.gzinflate.md) - Розпакувати стислий рядок
- [gzdeflate()](function.gzdeflate.md) - Стисне рядок
- [gzencode()](function.gzencode.md) - Створити стислий рядок gzip

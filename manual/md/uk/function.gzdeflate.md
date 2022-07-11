- [«gzdecode](function.gzdecode.md)
- [gzencode »](function.gzencode.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Стисне рядок

# gzdeflate

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gzdeflate — Стисне рядок

### Опис

**gzdeflate**(string `$data`, int `$level` u003d -1, int `$encoding` u003d
**`ZLIB_ENCODING_RAW`**): string\|false

Ця функція стискає рядок, використовуючи формат даних `DEFLATE`.

Детальніше про алгоритм стиснення DEFLATE дивіться "[» Формат стиснення даних
DEFLATE. Специфікація версії 1.3](http://www.faqs.org/rfcs/rfc1951)"
(RFC 1951).

### Список параметрів

`data`
Дані для стиснення.

`level`
Рівень стиску. 0 – без стиску, 9 – максимум. Якщо не вказано, буде
використовувати рівень стиснення за замовчуванням бібліотеки zlib.

`encoding`
Одна з **`ZLIB_ENCODING_*`** констант.

### Значення, що повертаються

Стиснутий рядок або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **gzdeflate()****

` <?php$compressedu003du003dgzdeflate('Сожми меня', 9);echo $compressed;?> `

### Дивіться також

- [gzinflate()](function.gzinflate.md) - Розпакувати стислий рядок
- [gzcompress()](function.gzcompress.md) - Стиснути рядок
- [gzuncompress()](function.gzuncompress.md) - Розпакувати стиснуту
рядок
- [gzencode()](function.gzencode.md) - Створити стислий рядок gzip

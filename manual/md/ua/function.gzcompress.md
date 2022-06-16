- [«gzclose](function.gzclose.md)
- [gzdecode »](function.gzdecode.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Стиснути рядок

# gzcompress

(PHP 4 \>u003d 4.0.1, PHP 5, PHP 7, PHP 8)

gzcompress — Стиснути рядок

### Опис

**gzcompress**(string `$data`, int `$level` u003d -1, int `$encoding` u003d
**`ZLIB_ENCODING_DEFLATE`**): string\|false

Ця функція стискає рядок, використовуючи формат даних `ZLIB`.

Докладніше про алгоритм стиснення ZLIB дивіться документ "[» Формат стиснення
ZLIB. Специфікація версії 3.3](http://www.faqs.org/rfcs/rfc1950)" (RFC
1950).

> **Примітка**:
>
> Це *не* те саме, що й gzip-стиск, який включає в себе
> Деякі дані заголовка. Інформацію про gzip-стиснення дивіться
> [gzencode()](function.gzencode.md).

### Список параметрів

`data`
Дані для стиснення.

`level`
Рівень стиску. Ціле число від 0 до 9 (0 – без стиснення, 9 – максимальне
стиснення).

Якщо використовується значення -1, то буде встановлено прийнятий у бібліотеці
zlib за замовчуванням рівень стиснення дорівнює 6.

`encoding`
Одна із констант **`ZLIB_ENCODING_*`**.

### Значення, що повертаються

Стиснутий рядок або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **gzcompress()****

` <?php$compressedu003du003dgzcompress('Сожми меня', 9);echo $compressed;?> `

### Дивіться також

- [gzdeflate()](function.gzdeflate.md) - Стисне рядок
- [gzinflate()](function.gzinflate.md) - Розпакувати стислий рядок
- [gzuncompress()](function.gzuncompress.md) - Розпакувати стиснуту
рядок
- [gzencode()](function.gzencode.md) - Створити стислий рядок gzip

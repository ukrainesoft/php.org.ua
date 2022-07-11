- [«gzdeflate](function.gzdeflate.md)
- [gzeof»](function.gzeof.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Створити стислий рядок gzip

# gzencode

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gzencode — Створити стислий рядок gzip

### Опис

**gzencode**(string `$data`, int `$level` u003d -1, int `$encoding` u003d
**`ZLIB_ENCODING_GZIP`**): string\|false

Ця функція повертає стислу версію вхідних даних `data`, аналогічно
виведення програми **gzip**.

Подробиці формату GZIP дивіться [» Формат файлу GZIP. Специфікація
версії 4.3](http://www.faqs.org/rfcs/rfc1952) (RFC 1952).

### Список параметрів

`data`
Дані кодування.

`level`
Рівень стиску. 0 – без стиску, 9 – максимальне стиснення. Якщо не
вказано, буде використовуватись рівень стиснення за замовчуванням бібліотеки
zlib.

`encoding`
Режим стиснення може бути **`FORCE_GZIP`** (за замовчуванням) або
**`FORCE_DEFLATE`**.

Використання константи **`FORCE_DEFLATE`** генерує висновок,
сумісний з RFC 1950, що складається із заголовка zlib, стислих даних та
контрольної суми Adler.

### Значення, що повертаються

Стиснутий рядок або **`false`** у разі виникнення помилки.

### Приклади

Повертаються дані будуть містити відповідні заголовки та
структури даних як у звичайному .gz-файлі, наприклад:

**Приклад #1 Створення файлу gzip**

` <?php$data u003d file_get_contents("bigfile.txt");$gzdata u003d gzencode($data, 9);file_put_contents("bigfile.txt.gz", $gzdata);?> `

### Дивіться також

- [gzdecode()](function.gzdecode.md) - Декодує рядок, стислий з
допомогою gzip
- [gzdeflate()](function.gzdeflate.md) - Стисне рядок
- [gzinflate()](function.gzinflate.md) - Розпакувати стислий рядок
- [gzuncompress()](function.gzuncompress.md) - Розпакувати стиснуту
рядок
- [gzcompress()](function.gzcompress.md) - Стиснути рядок
- [»  Специфікація ZLIB Compressed Data (RFC
1950)](http://www.faqs.org/rfcs/rfc1950)

- [«gzcompress](function.gzcompress.md)
- [gzdeflate »](function.gzdeflate.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Декодує рядок, стиснутий за допомогою gzip

# gzdecode

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

gzdecode — Декодує рядок, стислий за допомогою gzip

### Опис

**gzdecode**(string `$data`, int `$max_length` u003d 0): string\|false

Ця функція повертає декодовану версію вхідних даних. `data`.

### Список параметрів

`data`
Дані для декодування, закодовані за допомогою
[gzencode()](function.gzencode.md).

`max_length`
Максимальний розмір рядка для декодування.

### Значення, що повертаються

Розпакований рядок або **`false`** у разі виникнення помилки.

### Помилки

У разі виникнення помилки повертає помилку рівня **`E_WARNING`**.

### Дивіться також

- [gzencode()](function.gzencode.md) - Створити стислий рядок gzip

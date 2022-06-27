- [« zlib_encode](function.zlib-encode.md)
- [DeflateContext »](class.deflatecontext.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Повертає спосіб кодування, який використовується для стиснення виводу

# zlib_get_coding_type

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

zlib_get_coding_type — Повертає спосіб кодування, який використовується для
стиснення виведення

### Опис

**zlib_get_coding_type**(): string\|false

Повертає спосіб кодування, який використовується для стиснення виводу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Можливі значення: `gzip`, `deflate` або **`false`**.

### Дивіться також

- Директива
[zlib.output_compression](zlib.configuration.md#ini.zlib.output-compression)

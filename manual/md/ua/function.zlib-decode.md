- [«readgzfile](function.readgzfile.md)
- [zlib_encode »](function.zlib-encode.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Розпаковує будь-які закодовані дані raw/gzip/zlib

# zlib_decode

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

zlib_decode — Розпаковує будь-які закодовані дані raw/gzip/zlib

### Опис

**zlib_decode**(string `$data`, int `$max_length` u003d 0): string\|false

Розпаковує будь-які закодовані дані raw/gzip/zlib.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`data`

`max_length`

### Значення, що повертаються

Повертає розпаковані дані або **`false`** у разі виникнення
помилки.

### Дивіться також

- [zlib_encode()](function.zlib-encode.md) - Стиснення даних з
зазначеним кодуванням

- [« zlib_decode](function.zlib-decode.md)
- [zlib_get_coding_type »](function.zlib-get-coding-type.md)

- [PHP Manual](index.md)
- [Функції Zlib](ref.zlib.md)
- Стиснення даних із зазначеним кодуванням

# zlib_encode

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

zlib_encode — Стиснення даних із зазначеним кодуванням

### Опис

**zlib_encode**(string `$data`, int `$encoding`, int `$level` u003d -1):
string\|false

Стискає дані із зазначеним кодуванням.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`data`
Дані для стиснення.

`encoding`
Алгоритм стиснення. Одна з констант **`ZLIB_ENCODING_RAW`**,
**`ZLIB_ENCODING_DEFLATE`** або **`ZLIB_ENCODING_GZIP`**.

`level`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **zlib_encode()****

` <?php$str u003d 'hello world';$enc u003d zlib_encode($str, ZLIB_ENCODING_DEFLATE);echo bin2hex($enc);?> `

Результат виконання цього прикладу:

789ccb48cdc9c95728cf2fca4901001a0b045d

### Дивіться також

- [zlib_decode()](function.zlib-decode.md) - Розпаковує будь-які
закодовані дані raw/gzip/zlib

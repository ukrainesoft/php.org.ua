- [«mb_convert_variables](function.mb-convert-variables.md)
- [mb_decode_numericentity »](function.mb-decode-numericentity.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Декодує рядок у MIME-заголовку

#mb_decode_mimeheader

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

mb_decode_mimeheader — Декодує рядок у заголовку MIME

### Опис

**mb_decode_mimeheader**(string `$string`): string

Декодує закодований рядок (string) `string` у MIME-заголовку.

### Список параметрів

`string`
Рядок (string) для декодування.

### Значення, що повертаються

Декодований рядок (string) у внутрішньому кодуванні скрипта.

### Дивіться також

- [mb_encode_mimeheader()](function.mb-encode-mimeheader.md) -
Кодує рядок для MIME-заголовка

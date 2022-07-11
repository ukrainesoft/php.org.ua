- [«mb_eregi](function.mb-eregi.md)
- [mb_http_input »](function.mb-http-input.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Отримує внутрішні налаштування mbstring

#mb_get_info

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

mb_get_info — Отримує внутрішні налаштування mbstring

### Опис

**mb_get_info**(string `$type` u003d "all"): array\|string\|int\|false

**mb_get_info()** повертає внутрішні настройки mbstring.

### Список параметрів

`type`
Якщо `type` не вказано, або вказано як ``all'`, буде повернено масив
(array), що містить елементи "internal_encoding", "http_input",
``http_output'', ``http_output_conv_mimetypes'`, ``mail_charset'',
``mail_header_encoding'', ``mail_body_encoding'', `"illegal_chars"`,
''encoding_translation'', ''language'', ''detect_order'',
``substitute_character'' і ``strict_detection'`.

Якщо `type` вказано як ``internal_encoding'', ``http_input'',
``http_output'', ``http_output_conv_mimetypes'`, ``mail_charset'',
``mail_header_encoding'', ``mail_body_encoding'', `"illegal_chars"`,
''encoding_translation'', ''language'', ''detect_order'',
``substitute_character'' або ``strict_detection'`, буде повернуто
налаштування вказаного параметра.

### Значення, що повертаються

Масив (array) інформації про параметри, якщо `type` не вказано,
в іншому випадку значення заданого параметра `type` або **`false`** в
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------------------------------|
| 8.0.0 | `type` більше не підтримує `func_overload` та `func_overload_list`. |

### Дивіться також

- [mb_regex_encoding()](function.mb-regex-encoding.md) -
Встановлює/отримує поточне кодування для багатобайтового
регулярного вираження
- [mb_http_output()](function.mb-http-output.md) -
Встановлення/отримання кодування символів виводу HTTP

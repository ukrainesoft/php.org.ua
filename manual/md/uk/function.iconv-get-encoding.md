- [« Функції iconv](ref.iconv.md)
- [iconv_mime_decode_headers
»](function.iconv-mime-decode-headers.md)

- [PHP Manual](index.md)
- [Функції iconv](ref.iconv.md)
- Отримує поточне значення параметрів перетворення кодувань

# iconv_get_encoding

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

iconv_get_encoding — Отримує поточне значення налаштувань перетворення
кодувань

### Опис

**iconv_get_encoding**(string `$type` u003d "all"): array\|string\|false

Повертає внутрішні параметри конфігурації модуля iconv.

### Список параметрів

`type`
Можливі значення необов'язкового параметра `type`:

- all
- input_encoding
- output_encoding
- internal_encoding

### Значення, що повертаються

Повертає поточне значення зазначеної змінної та **`false`** у разі
виникнення помилки.

Якщо `type` не вказано або дорівнює "all", **iconv_get_encoding()** поверне
масив із значеннями всіх змінних.

### Приклади

**Приклад #1 Приклад використання **iconv_get_encoding()****

`<pre><?phpiconv_set_encoding("internal_encoding", "UTF-8");iconv_set_encoding("input_encoding", "WINDOWS-1251");iconv_set_encoding("output_encoding", "KOI8'U all'));?></pre>`

Результат виконання цього прикладу:

Array
(
[input_encoding] u003d> WINDOWS-1251
[output_encoding] u003d> KOI8-U
[internal_encoding] u003d> UTF-8
)

### Дивіться також

- [iconv_set_encoding()](function.iconv-set-encoding.md) -
Встановлює поточні налаштування для перетворення символів
кодування
- [ob_iconv_handler()](function.ob-iconv-handler.md) - Перетворює
символи з поточного кодування в кодування вихідного буфера

- [« iconv_mime_encode](function.iconv-mime-encode.md)
- [iconv_strlen »](function.iconv-strlen.md)

- [PHP Manual](index.md)
- [Функції iconv](ref.iconv.md)
- Встановлює поточні налаштування для перетворення символів
кодування

# iconv_set_encoding

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

iconv_set_encoding — Встановлює поточні установки для перетворення
символів кодування

### Опис

**iconv_set_encoding**(string `$type`, string `$encoding`): bool

Змінює значення вказаної параметром `type` внутрішньої змінної
конфігурації на 'encoding'.

### Список параметрів

`type`
Значення `type` може бути одним із наведених нижче:

- input_encoding
- output_encoding
- internal_encoding

`encoding`
Набір символів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **iconv_set_encoding()****

` <?phpiconv_set_encoding("internal_encoding", "UTF-8");iconv_set_encoding("output_encoding", "ISO-8859-1");?> `

### Дивіться також

- [iconv_get_encoding()](function.iconv-get-encoding.md) - Отримує
поточне значення параметрів перетворення кодувань
- [ob_iconv_handler()](function.ob-iconv-handler.md) - Перетворює
символи з поточного кодування в кодування вихідного буфера

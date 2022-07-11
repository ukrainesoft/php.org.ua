- [« Функції парсера XML](ref.xml.md)
- [xml_get_current_byte_index
»](function.xml-get-current-byte-index.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- Отримання рядка помилки XML-аналізатора

#xml_error_string

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_error_string — Отримання рядка помилки XML-аналізатора

### Опис

**xml_error_string**(int `$error_code`): ?string

Отримання рядкового представлення помилки XML-аналізатора відповідно
з переданим кодом помилки `error_code`.

### Список параметрів

`error_code`
Код помилки, що повертається функцією
[xml_get_error_code()](function.xml-get-error-code.md).

### Значення, що повертаються

Повертає рядок з текстовим описом коду помилки `error_code` або
**`false`**, якщо опис не знайдено.

### Дивіться також

- [xml_get_error_code()](function.xml-get-error-code.md) - Отримує
код помилки XML-аналізатора

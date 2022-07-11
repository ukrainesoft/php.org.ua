- [«
xml_get_current_line_number](function.xml-get-current-line-number.md)
- [xml_parse_into_struct »](function.xml-parse-into-struct.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- Отримує код помилки XML-аналізатора

#xml_get_error_code

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_get_error_code — Отримує код помилки XML-аналізатора

### Опис

**xml_get_error_code**([XMLParser](class.xmlparser.md) `$parser`): int

Отримує код помилки XML-аналізатора.

### Список параметрів

`parser`
Посилання на аналізатор XML, щоб отримати код помилки.

### Значення, що повертаються

Ця функція повертає **`false`**, якщо посилання параметра `parser` не
веде до діючого аналізатора, або ж повертає один із кодів помилок
зі списку, розташованого в [розділі кодів
помилок](xml.error-codes.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------|
| 8.0.0 | Параметр `parser` чекає на екземпляр [XMLParser](class.xmlparser.md); раніше очікували ресурс (resource). |

### Дивіться також

- [xml_error_string()](function.xml-error-string.md) - Отримання
рядки помилки XML-аналізатора

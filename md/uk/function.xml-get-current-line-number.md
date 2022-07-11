- [«
xml_get_current_column_number](function.xml-get-current-column-number.md)
- [xml_get_error_code »](function.xml-get-error-code.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- Отримує від XML-аналізатора номер поточного рядка

#xml_get_current_line_number

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_get_current_line_number — Отримує від XML-аналізатора номер поточної
рядки

### Опис

**xml_get_current_line_number**([XMLParser](class.xmlparser.md)
`$parser`): int

Отримує номер поточного рядка заданого XML-аналізатора.

### Список параметрів

`parser`
Посилання на аналізатор XML, щоб отримати номер рядка.

### Значення, що повертаються

Ця функція повертає **`false`**, якщо посилання параметра `parser` не
веде до чинного аналізатора, або ж повертає номер рядка
згідно з поточним положенням покажчика аналізатора.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------|
| 8.0.0 | Параметр `parser` чекає на екземпляр [XMLParser](class.xmlparser.md); раніше очікували ресурс (resource). |

### Дивіться також

- [xml_get_current_column_number()](function.xml-get-current-column-number.md) -
Отримує від XML-аналізатора номер поточного стовпця
- [xml_get_current_byte_index()](function.xml-get-current-byte-index.md) -
Отримує поточний для XML-аналізатора байтовий індекс

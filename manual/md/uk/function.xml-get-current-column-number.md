- [«
xml_get_current_byte_index](function.xml-get-current-byte-index.md)
- [xml_get_current_line_number
»](function.xml-get-current-line-number.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- Отримує від XML-аналізатора номер поточного стовпця

#xml_get_current_column_number

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_get_current_column_number — Отримує від XML-аналізатора номер
поточного стовпця

### Опис

**xml_get_current_column_number**([XMLParser](class.xmlparser.md)
`$parser`): int

Отримує номер стовпця заданого XML-аналізатора.

### Список параметрів

`parser`
Посилання на аналізатор XML, щоб отримати номер стовпця.

### Значення, що повертаються

Ця функція повертає **`false`**, якщо посилання параметра `parser` не
веде до чинного аналізатора, або ж повертає номер стовпця на
поточному рядку (визначеному за допомогою
[xml_get_current_line_number()](function.xml-get-current-line-number.md))
згідно з поточним положенням покажчика аналізатора.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------|
| 8.0.0 | Параметр `parser` чекає на екземпляр [XMLParser](class.xmlparser.md); раніше очікували ресурс (resource). |

### Дивіться також

- [xml_get_current_byte_index()](function.xml-get-current-byte-index.md) -
Отримує поточний для XML-аналізатора байтовий індекс
- [xml_get_current_line_number()](function.xml-get-current-line-number.md) -
Отримує від XML-аналізатора номер поточного рядка

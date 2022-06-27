- [« xml_error_string](function.xml-error-string.md)
- [xml_get_current_column_number
»](function.xml-get-current-column-number.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- Отримує поточний для XML-аналізатора байтовий індекс

#xml_get_current_byte_index

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_get_current_byte_index — Отримує поточний для аналізатора XML
байтовий індекс

### Опис

**xml_get_current_byte_index**([XMLParser](class.xmlparser.md)
`$parser`): int

Отримує поточний для XML-аналізатора заданий байтовий індекс.

### Список параметрів

`parser`
Посилання на XML-аналізатор, з якого буде отримано індекс байта.

### Значення, що повертаються

Ця функція поверне **`false`**, якщо аргумент `parser` не посилається на
допустимий аналізатор, інакше вона повертає індекс байта в
буфер даних аналізатора, на якому він знаходиться в даний момент
(починаючи з нуля).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------|
| 8.0.0 | Параметр `parser` чекає на екземпляр [XMLParser](class.xmlparser.md); раніше очікували ресурс (resource). |

### Примітки

**Увага**

Ця функція повертає байтовий індекс, вважаючи, що текст закодований у
UTF-8. Зміна кодування не вплине на виведення функції.

### Дивіться також

- [xml_get_current_column_number()](function.xml-get-current-column-number.md) -
Отримує від XML-аналізатора номер поточного стовпця
- [xml_get_current_line_number()](function.xml-get-current-line-number.md) -
Отримує від XML-аналізатора номер поточного рядка

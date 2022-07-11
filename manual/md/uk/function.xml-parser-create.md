- [« xml_parser_create_ns](function.xml-parser-create-ns.md)
- [xml_parser_free »](function.xml-parser-free.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- Створення XML-аналізатора

#xml_parser_create

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_parser_create — Створення XML-аналізатора

### Опис

**xml_parser_create**(?string `$encoding` u003d **`null`**):
[XMLParser](class.xmlparser.md)

**xml_parser_create()** створює новий XML-аналізатор та повертає
екземпляр [XMLParser](class.xmlparser.md), який можна використовувати
в інших функціях XML.

### Список параметрів

`encoding`
Кодування вхідних даних визначається автоматично, а параметр
`encoding` задає кодування тільки для даних, що виводяться. Якщо передається
порожній рядок, аналізатор спробує визначити кодування, переглядаючи
перші 3 або 4 байти. Стандартне кодування - UTF-8. перелік
підтримуваних кодувань: ISO-8859-1, UTF-8 і US-ASCII.

### Значення, що повертаються

Повертає новий екземпляр [XMLParser](class.xmlparser.md) або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.0.0 | Тепер функція повертає екземпляр [XMLParser](class.xmlparser.md); раніше повертався ресурс (resource) чи **`false`** у разі виникнення помилки. |
| 8.0.0 | encoding тепер допускає значення null. |

### Дивіться також

- [xml_parser_create_ns()](function.xml-parser-create-ns.md) -
Створення XML-аналізатора з підтримкою просторів імен
- [xml_parser_free()](function.xml-parser-free.md) - Визволення
XML-аналізатора

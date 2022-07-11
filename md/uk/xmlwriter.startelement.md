- [« XMLWriter::startDtdEntity](xmlwriter.startdtdentity.md)
- [XMLWriter::startElementNs »](xmlwriter.startelementns.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створити стартовий тег елемента

# XMLWriter::startElement

#xmlwriter_start_element

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::startElement -- xmlwriter_start_element -- Створити стартовий
тег елемента

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::startElement**(string `$name`): bool

Процедурний стиль

**xmlwriter_start_element**([XMLWriter](class.xmlwriter.md) `$writer`,
string `$name`): bool

Починає елемент.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`name`
Назва елемента.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::endElement()](xmlwriter.endelement.md) - Завершити
поточний елемент
- [XMLWriter::writeElement()](xmlwriter.writeelement.md) - Записати
повний тег елемент

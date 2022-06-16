- [« XMLWriter::endDtdEntity](xmlwriter.enddtdentity.md)
- [XMLWriter::endPi »](xmlwriter.endpi.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Завершити поточний елемент

# XMLWriter::endElement

#xmlwriter_end_element

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::endElement -- xmlwriter_end_element -- Завершити поточний
елемент

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::endElement**(): bool

Процедурний стиль

**xmlwriter_end_element**([XMLWriter](class.xmlwriter.md) `$writer`):
bool

Завершує поточний елемент.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::startElement()](xmlwriter.startelement.md) - Створити
стартовий тег елемента
- [XMLWriter::writeElement()](xmlwriter.writeelement.md) - Записати
повний тег елемент

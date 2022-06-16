- [« XMLWriter](class.xmlwriter.md)
- [XMLWriter::endCdata »](xmlwriter.endcdata.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Завершити атрибут

# XMLWriter::endAttribute

#xmlwriter_end_attribute

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::endAttribute -- xmlwriter_end_attribute -- Завершити атрибут

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::endAttribute**(): bool

Процедурний стиль

**xmlwriter_end_attribute**([XMLWriter](class.xmlwriter.md)
`$writer`): bool

Завершує поточний атрибут.

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

- [XMLWriter::startAttribute()](xmlwriter.startattribute.md) -
Створити початковий атрибут
- [XMLWriter::startAttributeNs()](xmlwriter.startattributens.md) -
Створити стартовий атрибут простору імен
- [XMLWriter::writeAttribute()](xmlwriter.writeattribute.md) -
Записати повний атрибут
- [XMLWriter::writeAttributeNs()](xmlwriter.writeattributens.md) -
Записати повний атрибут простору імен

- [« XMLWriter::setIndentString](xmlwriter.setindentstring.md)
- [XMLWriter::startAttributeNs »](xmlwriter.startattributens.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створити початковий атрибут

# XMLWriter::startAttribute

#xmlwriter_start_attribute

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::startAttribute -- xmlwriter_start_attribute -- Створити
початковий атрибут

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::startAttribute**(string `$name`): bool

Процедурний стиль

**xmlwriter_start_attribute**([XMLWriter](class.xmlwriter.md)
`$writer`, string `$name`): bool

Починає атрибут.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`name`
Назва атрибута.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад базового використання
**XMLWriter::startAttribute()****

` <?php$writer u003d new XMLWriter;$writer->openURI('php://output');$writer->startDocument('1.0', 'UTF-8');$writer->startElement('element ');$writer->startAttribute('attribute');$writer->text('value');$writer->endAttribute();$writer->endElement();$writer->endDocument(); `

Результатом виконання цього прикладу буде щось подібне:

<?xml versionu003d"1.0" encodingu003d"UTF-8"?>
<element attributeu003d"value"/>

### Дивіться також

- [XMLWriter::startAttributeNs()](xmlwriter.startattributens.md) -
Створити стартовий атрибут простору імен
- [XMLWriter::endAttribute()](xmlwriter.endattribute.md) - Завершити
атрибут
- [XMLWriter::writeAttribute()](xmlwriter.writeattribute.md) -
Записати повний атрибут
- [XMLWriter::writeAttributeNs()](xmlwriter.writeattributens.md) -
Записати повний атрибут простору імен

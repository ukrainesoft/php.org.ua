- [« XMLWriter::text](xmlwriter.text.md)
- [XMLWriter::writeAttributeNs »](xmlwriter.writeattributens.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Записати повний атрибут

# XMLWriter::writeAttribute

#xmlwriter_write_attribute

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::writeAttribute -- xmlwriter_write_attribute — Записати повний
атрибут

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::writeAttribute**(string `$name`, string `$value`):
bool

Процедурний стиль

**xmlwriter_write_attribute**([XMLWriter](class.xmlwriter.md)
`$writer`, string `$name`, string `$value`): bool

Записує повний атрибут.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`name`
Назва атрибута.

`value`
Значення атрибуту.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Перемішування поделементів та атрибутів**

Якщо запис поделементів та атрибутів змішаний, будь-яка спроба запису
атрибутів після першого поделемента завершиться помилкою та поверне false.

` <?php$xml u003d new XMLWriter();$xml->openMemory();$xml->startElement('element');$xml->writeAttribute('attr1', '0');$xml-> writeElement('subelem', '0');var_dump($xml->writeAttribute('attr2', '0'));$xml->endElement();echo $xml->flush();?> `

Результат виконання цього прикладу:

bool(false)
<element attr1u003d"0"><subelem>0</subelem></element>

### Дивіться також

- [XMLWriter::writeAttributeNs()](xmlwriter.writeattributens.md) -
Записати повний атрибут простору імен
- [XMLWriter::startAttribute()](xmlwriter.startattribute.md) -
Створити початковий атрибут
- [XMLWriter::startAttributeNs()](xmlwriter.startattributens.md) -
Створити стартовий атрибут простору імен
- [XMLWriter::endAttribute()](xmlwriter.endattribute.md) - Завершити
атрибут

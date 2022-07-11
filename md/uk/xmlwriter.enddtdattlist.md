- [« XMLWriter::endDtd](xmlwriter.enddtd.md)
- [XMLWriter::endDtdElement »](xmlwriter.enddtdelement.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Завершити поточний список атрибутів DTD

# XMLWriter::endDtdAttlist

#xmlwriter_end_dtd_attlist

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::endDtdAttlist -- xmlwriter_end_dtd_attlist — Завершити
поточний список атрибутів DTD

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::endDtdAttlist**(): bool

Процедурний стиль

**xmlwriter_end_dtd_attlist**([XMLWriter](class.xmlwriter.md)
`$writer`): bool

Завершує поточний список атрибутів DTD для документа.

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

- [XMLWriter::startDtdAttlist()](xmlwriter.startdtdattlist.md) -
Створює стартовий перелік атрибутів DTD
- [XMLWriter::writeDtdAttlist()](xmlwriter.writedtdattlist.md) -
Записати повний тег DTD AttList

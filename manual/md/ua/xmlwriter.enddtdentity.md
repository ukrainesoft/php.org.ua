- [« XMLWriter::endDtdElement](xmlwriter.enddtdelement.md)
- [XMLWriter::endElement »](xmlwriter.endelement.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Завершити поточний запис DTD

# XMLWriter::endDtdEntity

#xmlwriter_end_dtd_entity

(PHP 5 \>u003d 5.2.1, PHP 7, PHP 8, PECL xmlwriter \>u003d 0.1.0)

XMLWriter::endDtdEntity -- xmlwriter_end_dtd_entity — Завершити поточну
запис DTD

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::endDtdEntity**(): bool

Процедурний стиль

**xmlwriter_end_dtd_entity**([XMLWriter](class.xmlwriter.md)
`$writer`): bool

Завершує поточний запис DTD.

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

- [XMLWriter::startDtdEntity()](xmlwriter.startdtdentity.md) -
Створити стартовий запис DTD
- [XMLWriter::writeDtdEntity()](xmlwriter.writedtdentity.md) -
Записати повний тег DTD запису

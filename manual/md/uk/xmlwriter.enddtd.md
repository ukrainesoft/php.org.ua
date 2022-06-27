- [« XMLWriter::endDocument](xmlwriter.enddocument.md)
- [XMLWriter::endDtdAttlist »](xmlwriter.enddtdattlist.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Завершити поточний DTD

# XMLWriter::endDtd

#xmlwriter_end_dtd

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::endDtd -- xmlwriter_end_dtd — Завершити поточний DTD

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::endDtd**(): bool

Процедурний стиль

**xmlwriter_end_dtd**([XMLWriter](class.xmlwriter.md) `$writer`): bool

Завершує розділ визначення типу документа (DTD).

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

- [XMLWriter::startDtd()](xmlwriter.startdtd.md) - Створити стартовий
DTD тег
- [XMLWriter::writeDtd()](xmlwriter.writedtd.md) - Записати повний
тег DTD

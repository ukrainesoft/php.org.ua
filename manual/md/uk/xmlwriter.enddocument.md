- [« XMLWriter::endComment](xmlwriter.endcomment.md)
- [XMLWriter::endDtd »](xmlwriter.enddtd.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Завершити поточний документ

# XMLWriter::endDocument

#xmlwriter_end_document

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::endDocument -- xmlwriter_end_document — Завершити поточний
документ

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::endDocument**(): bool

Процедурний стиль

**xmlwriter_end_document**([XMLWriter](class.xmlwriter.md) `$writer`):
bool

Завершує поточний документ.

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

- [XMLWriter::startDocument()](xmlwriter.startdocument.md) - Створити
тег документа

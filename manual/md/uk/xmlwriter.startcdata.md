- [« XMLWriter::startAttributeNs](xmlwriter.startattributens.md)
- [XMLWriter::startComment »](xmlwriter.startcomment.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створити початковий тег CDATA

# XMLWriter::startCdata

#xmlwriter_start_cdata

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::startCdata -- xmlwriter_start_cdata — Створити початковий тег
CDATA

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::startCdata**(): bool

Процедурний стиль

**xmlwriter_start_cdata**([XMLWriter](class.xmlwriter.md) `$writer`):
bool

Починає CDATA.

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

- [XMLWriter::endCdata()](xmlwriter.endcdata.md) - Завершити поточну
секцію CDATA
- [XMLWriter::writeCdata()](xmlwriter.writecdata.md) - Записати
повний тег CDATA

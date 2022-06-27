- [« XMLWriter::writePi](xmlwriter.writepi.md)
- [XSL »](book.xsl.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Записати необроблений XML-текст

# XMLWriter::writeRaw

#xmlwriter_write_raw

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL xmlwriter \>u003d 2.0.4)

XMLWriter::writeRaw -- xmlwriter_write_raw — Записати необроблений
XML-текст

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::writeRaw**(string `$content`): bool

Процедурний стиль

**xmlwriter_write_raw**([XMLWriter](class.xmlwriter.md) `$writer`,
string `$content`): bool

Записує необроблений текст XML.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`content`
Текстовий рядок для запису.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::text()](xmlwriter.text.md) - Записати текст

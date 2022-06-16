- [« XMLWriter::writeAttributeNs](xmlwriter.writeattributens.md)
- [XMLWriter::writeComment »](xmlwriter.writecomment.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Записати повний тег CDATA

# XMLWriter::writeCdata

#xmlwriter_write_cdata

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::writeCdata -- xmlwriter_write_cdata — Записати повний тег
CDATA

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::writeCdata**(string `$content`): bool

Процедурний стиль

**xmlwriter_write_cdata**([XMLWriter](class.xmlwriter.md) `$writer`,
string `$content`): bool

Записує повний CDTA тег.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`content`
Вміст CDATA.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Базове використання **xmlwriter_write_cdata()****

` <?php// налаштувати документ$xml u003d new XmlWriter();$xml->openMemory();$xml->setIndent(true);$xml->startDocument('1.0', 'UTF-8'); $xml->startElement('mydoc');$xml->startElement('myele');// виведення CData$xml->startElement('mycdataelement');$xml->writeCData("текст для включення як CData" );$xml->endElement();// завершити документ і вивести$xml->endElement();$xml->endElement();echo $xml->outputMemory(true);?> `

Результат виконання цього прикладу:

<mydoc>
<myele>
<mycdataelement><![CDATA[текст для включення як CData]]></mycdataelement>
</myele>
</mydoc>

### Дивіться також

- [XMLWriter::startCdata()](xmlwriter.startcdata.md) - Створити
початковий тег CDATA
- [XMLWriter::endCdata()](xmlwriter.endcdata.md) - Завершити поточну
секцію CDATA

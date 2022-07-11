- [« XSLTProcessor::transformToDoc](xsltprocessor.transformtodoc.md)
- [XSLTProcessor::transformToXml »](xsltprocessor.transformtoxml.md)

- [PHP Manual](index.md)
- [XSLTProcessor](class.xsltprocessor.md)
- Перетворює на URI

# XSLTProcessor::transformToUri

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::transformToUri — Перетворює на URI

### Опис

public
**XSLTProcessor::transformToURI**([DOMDocument](class.domdocument.md)
`$doc`, string `$uri`): int

Перетворює вихідний вузол на URI, застосовуючи таблицю стилів, яка
встановлена за допомогою методу
[XSLTProcessor::importStylesheet()](xsltprocessor.importstylesheet.md).

### Список параметрів

`doc`
Документ для перетворення.

`uri`
Цільовий URI для перетворення.

### Значення, що повертаються

Повертає кількість записаних байтів, або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Перетворення на HTML файл**

` <?php// Завантаження джерела XML$xml u003d new DOMDocument;$xml->load('collection.xml');$xsl u003d new DOMDocument;$xsl->load('collection.xsl');// На перетворення $procu003du003dnewXSLTProcessor;$proc->importStyleSheet($xsl); // додавання стилів xsl$proc->transformToURI($xml, 'file:///tmp/out.md');?> `

### Дивіться також

- [XSLTProcessor::transformToDoc()](xsltprocessor.transformtodoc.md) -
Перетворює на DOMDocument
- [XSLTProcessor::transformToXml()](xsltprocessor.transformtoxml.md) -
Перетворює на XML

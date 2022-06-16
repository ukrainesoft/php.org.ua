- [« XSLTProcessor::transformToUri](xsltprocessor.transformtouri.md)
- [Модулі для роботи з GUI »](refs.ui.md)

- [PHP Manual](index.md)
- [XSLTProcessor](class.xsltprocessor.md)
- Перетворює на XML

# XSLTProcessor::transformToXml

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::transformToXml — Перетворює на XML

### Опис

public **XSLTProcessor::transformToXml**(object `$document`):
string\|null\|false

Перетворює вихідний вузол у рядок, застосовуючи таблиці стилів, які
встановлені за допомогою методу
[xsltprocessor::importStylesheet()](xsltprocessor.importstylesheet.md).

### Список параметрів

`document`
Об'єкт класу [DOMDocument](class.domdocument.md) або
[SimpleXMLElement](class.simplexmlelement.md) для перетворення.

### Значення, що повертаються

Результат перетворення, або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Трансформація у рядок**

` <?php// Завантаження джерела XML$xml u003d new DOMDocument;$xml->load('collection.xml');$xsl u003d new DOMDocument;$xsl->load('collection.xsl');// На перетворення $procu003du003dnewXSLTProcessor;$proc->importStyleSheet($xsl); // додавання стилів xslecho $proc->transformToXML($xml);?> `

Результат виконання цього прикладу:

Hey! Welcome to Nicolas Eliaszewicz's sweet CD collection!

<h1>Fight for your mind</h1><h2>by Ben Harper - 1995</h2><hr>
<h1>Electric Ladyland</h1><h2>by Jimi Hendrix - 1997</h2><hr>

### Дивіться також

- [XSLTProcessor::transformToDoc()](xsltprocessor.transformtodoc.md) -
Перетворює на DOMDocument
- [XSLTProcessor::transformToUri()](xsltprocessor.transformtouri.md) -
Перетворює на URI

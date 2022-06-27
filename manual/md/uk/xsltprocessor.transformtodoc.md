- [«
XSLTProcessor::setSecurityPrefs](xsltprocessor.setsecurityprefs.md)
- [XSLTProcessor::transformToUri »](xsltprocessor.transformtouri.md)

- [PHP Manual](index.md)
- [XSLTProcessor](class.xsltprocessor.md)
- Перетворює на DOMDocument

# XSLTProcessor::transformToDoc

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::transformToDoc — Перетворює на DOMDocument

### Опис

public **XSLTProcessor::transformToDoc**(object `$document`, ?string
`$returnClass` u003d **`null`**):
[DOMDocument](class.domdocument.md)\|false

Перетворює вихідний вузол на [DOMDocument](class.domdocument.md)
застосовуючи таблицю стилів, задану за допомогою методу
[XSLTProcessor::importStylesheet()](xsltprocessor.importstylesheet.md).

### Список параметрів

`document`
Вузол, який необхідно перетворити.

### Значення, що повертаються

Повертає [DOMDocument](class.domdocument.md) або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Перетворення на DOMDocument**

` <?php// Завантаження вихідного XML$xml u003d new DOMDocument;$xml->load('collection.xml');$xsl u003d new DOMDocument;$xsl->load('collection.xsl');// На перетворення$procu003du003dnewXSLTProcessor;$proc->importStyleSheet($xsl); // додавання стилів xslecho trim($proc->transformToDoc($xml)->firstChild->wholeText);?> `

Результат виконання цього прикладу:

Hey! Welcome to Nicolas Eliaszewicz's sweet CD collection!

### Дивіться також

- [XSLTProcessor::transformToUri()](xsltprocessor.transformtouri.md) -
Перетворює на URI
- [XSLTProcessor::transformToXml()](xsltprocessor.transformtoxml.md) -
Перетворює на XML

- [« XSLTProcessor](class.xsltprocessor.md)
- [XSLTProcessor::getParameter »](xsltprocessor.getparameter.md)

- [PHP Manual](index.md)
- [XSLTProcessor](class.xsltprocessor.md)
- Створює новий екземпляр класу XSLTProcessor

# XSLTProcessor::\_\_construct

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::\_\_construct — Створює новий екземпляр класу
XSLTProcessor

### Опис

**XSLTProcessor::\_\_construct**()

Створює новий екземпляр класу
[XSLTProcessor](class.xsltprocessor.md).

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Створює [XSLTProcessor](class.xsltprocessor.md)**

` <?php$xsldoc u003d new DOMDocument();$xsldoc->load($xsl_filename);$xmldoc u003d new DOMDocument();$xmldoc->load($xml_filename);$xsl u003d new XS$ ->importStyleSheet($xsldoc);echo $xsl->transformToXML($xmldoc);?> `

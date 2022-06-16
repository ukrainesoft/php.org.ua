- [« Файли collection.xml та collection.xsl для
прикладів](xsl.examples-collection.md)
- [XSLTProcessor »](class.xsltprocessor.md)

- [PHP Manual](index.md)
- [Приклади](xsl.examples.md)
- Обробка помилок за допомогою функцій обробки помилок libxml

## Обробка помилок за допомогою функцій обробки помилок libxml

libxml надає ряд функцій для обробки помилок, які можуть
використовуватися для вилову та роботи з помилками при обробці XSLT.

**Приклад #1 fruits.xml**

Правильний XML.

`` xmlcode
<fruits>
<fruit>Apple</fruit>
<fruit>Banana</fruit>
<fruit>Cherry</fruit>
</fruits>
````

**Приклад #2 fruits.xsl**

Містить неправильне "select" вираз.

`` xmlcode
<xsl:stylesheet versionu003d"1.0" xmlns:xslu003d"http://www.w3.org/1999/XSL/Transform">
<xsl:output methodu003d"html" encodingu003d"utf-8" indentu003d"no"/>
<xsl:template matchu003d"fruits">
<ul>
<xsl:apply-templates/>
</ul>
</xsl:template>
<xsl:template matchu003d"fruit">
<li><xsl:value-of selectu003d"THIS IS A DELIBERATE ERROR!"/></li>
</xsl:template>
</xsl:stylesheet>
````

**Приклад #3 Збір та виведення помилок**

Приклад нижче відловлює та відображає помилки libxml, що з'являються при
виклик методу
[XSLTProcessor::importStyleSheet()](xsltprocessor.importstylesheet.md)
зі стилем, що містить помилки.

` <?php$xmldoc u003d new DOMDocument();$xsldoc u003d new DOMDocument();$xsl u003d new XSLTProcessor();$xmldoc->loadXML('fruits.xml');$xsldoc->itsXML xsl');libxml_use_internal_errors(true);$result u003d $xsl->importStyleSheet($xsldoc);if (!$result) {    foreach (libxml_get_errors() as $error) {  }
";    }}libxml_use_internal_errors(false);if ($result) {    echo $xsl->transformToXML($xmldoc);}?> `

Результатом виконання цього прикладу буде щось подібне:

Libxml error: Invalid expression

Libxml error: compilation error: файли fruits.xsl line 9 element value-of
Libxml error: xsl:value-of : не може бути потрібна відповідь 'THIS IS A DELIBERATE ERROR!'

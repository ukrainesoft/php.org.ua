- [«
XSLTProcessor::importStylesheet](xsltprocessor.importstylesheet.md)
- [XSLTProcessor::removeParameter
»](xsltprocessor.removeparameter.md)

- [PHP Manual](index.md)
- [XSLTProcessor](class.xsltprocessor.md)
- Включає можливість використовувати PHP функції як функції
XSLT

# XSLTProcessor::registerPHPFunctions

(PHP 5 \>u003d 5.0.4, PHP 7, PHP 8)

XSLTProcessor::registerPHPFunctions — Включає можливість використання
PHP функції як функції XSLT

### Опис

public **XSLTProcessor::registerPHPFunctions**(array\|string\|null
`$functions` u003d **`null`**): void

Цей метод дозволяє використовувати PHP функції як функції XSLT в XSL
таблиці стилів.

### Список параметрів

`functions`
Використовуйте цей параметр, якщо хочете викликати з XSLT лише деякі
функції із.

Цей параметр може набувати або рядкове значення - назва
функції, чи масив - перелік назв.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Простий виклик функції PHP з таблиці стилів**

` <?php$xml u003d <<<<EOB<allusers> <user> <uid>bob</uid> </user> <user>  <uid>joe</uid> </user></allusers>EOB; $xslu003du003d<<<<EOB<?xml versionu003d"1.0" encodingu003d"UTF-8"?><xsl:stylesheet versionu003d"1.0"    xmlns:xslu003d"http://www.w3.org/1999/ XSL/Transform"    xmlns:phpu003d"http://php.net/xsl"><xsl:output methodu003d"html" encodingu003d"utf-8" indentu003d"yes"/> <xsl:template matchu003d" allusers">  <html><body>    <h2>Users</h2>    <table>    <xsl:for-each selectu003d"user">      <tr><td>        <xsl:value-of             selectu003d"php:function ('ucfirst',string(uid))"/>      </td></tr>    </xsl:for-each>    </table>  </body></html> </xsl:template></xsl :stylesheet>EOB;$xmldocu003d DOMDocument::loadXML($xml);$xsldoc u003d DOMDocument::loadXML($xsl);$proc u003d newXSLTProcessor();$proc->registerPHPFunctions();$ ($xsldoc);echo $proc->transformToXML($xmldoc);?> `

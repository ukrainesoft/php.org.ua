- [« Приклади](xsl.examples.md)
- [Обробка помилок за допомогою функцій обробки помилок libxml
»](xsl.examples-errors.md)

- [PHP Manual](index.md)
- [Приклади](xsl.examples.md)
- Файли collection.xml та collection.xsl для прикладів

## Файли collection.xml та collection.xsl для прикладів

Багато прикладів у цьому розділі документації містять обидва файли: XML і
XSL. Ми будемо використовувати `collection.xml` та `collection.xsl` з
наступним змістом:

**Приклад #1 collection.xml**

`` xmlcode
<collection>
<cd>
<title>Fight for your mind</title>
<artist>Ben Harper</artist>
<year>1995</year>
</cd>
<cd>
<title>Electric Ladyland</title>
<artist>Jimi Hendrix</artist>
<year>1997</year>
</cd>
</collection>
````

**Приклад #2 collection.xsl**

`` xmlcode
<xsl:stylesheet versionu003d"1.0" xmlns:xslu003d"http://www.w3.org/1999/XSL/Transform">
<xsl:param nameu003d"owner" selectu003d"'Nicolas Eliaszewicz'"/>
<xsl:output methodu003d"html" encodingu003d"iso-8859-1" indentu003d"no"/>
<xsl:template matchu003d"collection">
Hey! Welcome to <xsl:value-of selectu003d"$owner"/>'s sweet CD collection!
<xsl:apply-templates/>
</xsl:template>
<xsl:template matchu003d"cd">
<h1><xsl:value-of selectu003d"title"/></h1>
<h2>by <xsl:value-of selectu003d"artist"/> - <xsl:value-of selectu003d"year"/></h2>
<hr />
</xsl:template>
</xsl:stylesheet>
````

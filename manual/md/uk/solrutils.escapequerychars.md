- [«SolrUtils::digestXmlResponse](solrutils.digestxmlresponse.md)
- [SolrUtils::getSolrVersion »](solrutils.getsolrversion.md)

- [PHP Manual](index.md)
- [SolrUtils](class.solrutils.md)
- Екранує рядок запиту Lucene

# SolrUtils::escapeQueryChars

(PECL solr \> u003d 0.9.2)

SolrUtils::escapeQueryChars — Екранує рядок запиту Lucene

### Опис

public static **SolrUtils::escapeQueryChars**(string `$str`):
string\|false

Lucene підтримує екранування спеціальних символів, які є
частиною синтаксису запиту.

Поточний список спеціальних символів:

`` descriptioncode
+ - && || ! ( ) { } [ ] ^ " ~ * ? : \ /
````

Ці символи є частиною синтаксису запиту і мають бути
екрановані

### Список параметрів

`str`
Рядок запиту, який потрібно екранувати.

### Значення, що повертаються

Повертає екранований рядок або **`false`** у разі виникнення
помилки.

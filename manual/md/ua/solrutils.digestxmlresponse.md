- [«SolrUtils](class.solrutils.md)
- [SolrUtils::escapeQueryChars »](solrutils.escapequerychars.md)

- [PHP Manual](index.md)
- [SolrUtils](class.solrutils.md)
- Перетворює XML-рядок відповіді на SolrObject

# SolrUtils::digestXmlResponse

(PECL solr \> u003d 0.9.2)

SolrUtils::digestXmlResponse — Перетворює XML-рядок відповіді на
SolrObject

### Опис

public static **SolrUtils::digestXmlResponse**(string `$xmlresponse`,
int `$parse_mode` u003d 0): [SolrObject](class.solrobject.md)

Метод перетворює XML-рядок відповіді з сервера Apache Solr SolrObject.
У разі помилки викидає виняток SolrException.

### Список параметрів

`xmlresponse`
Рядок відповіді XML від сервера Solr.

`parse_mode`
Використовуйте SolrResponse::PARSE_SOLR_OBJ або
SolrResponse::PARSE_SOLR_DOC

### Значення, що повертаються

Повертає SolrObject, що представляє відповідь XML.

Якщо для параметра parse_mode встановлено значення
SolrResponse::PARSE_SOLR_OBJ, документи Solr будуть аналізуватися як
екземпляри SolrObject.

Якщо встановлено значення SolrResponse::PARSE_SOLR_DOC, вони будуть
проаналізовано як екземпляри SolrDocument.

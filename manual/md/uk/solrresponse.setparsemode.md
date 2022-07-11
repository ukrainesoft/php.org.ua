- [«SolrResponse::getResponse](solrresponse.getresponse.md)
- [SolrResponse::success »](solrresponse.success.md)

- [PHP Manual](index.md)
- [SolrResponse](class.solrresponse.md)
- Встановлює режим розбору

# SolrResponse::setParseMode

(PECL solr \> u003d 0.9.2)

SolrResponse::setParseMode — Встановлює режим аналізу

### Опис

public **SolrResponse::setParseMode**(int `$parser_mode` u003d 0): bool

Встановлює режим аналізу.

### Список параметрів

`parser_mode`
SolrResponse::PARSE_SOLR_DOC аналізує документи в екземплярах
SolrDocument. SolrResponse::PARSE_SOLR_OBJ розбирає документ на
SolrObjects.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

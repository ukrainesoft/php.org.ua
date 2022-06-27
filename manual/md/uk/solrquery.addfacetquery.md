- [« SolrQuery::addFacetField](solrquery.addfacetfield.md)
- [SolrQuery::addField »](solrquery.addfield.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Додає фасетний запит

# SolrQuery::addFacetQuery

(PECL solr \> u003d 0.9.2)

SolrQuery::addFacetQuery — Додає фасетний запит

### Опис

public **SolrQuery::addFacetQuery**(string `$facetQuery`):
[SolrQuery](class.solrquery.md)

Додає фасетний запит

### Список параметрів

`facetQuery`
Фасетний запит

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.

### Приклади

**Приклад #1 Приклад використання
[SolrQuery::addFacetField()](solrquery.addfacetfield.md)**

` <?php$options u003d array(        'hostname' u003d> SOLR_SERVER_HOSTNAME,        'login'    u003d> SOLR_SERVER_USERNAME,        'password' u003d> SOLR_SERVER_PASSWORD,        'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient($options);$ query u003d new SolrQuery('*:*');$query->setFacet(true);$query->addFacetQuery('price:[* TO 500]')->addFacetQuery('price:[500 TO *]') );$query_response u003d $client->query($query);$response u003d $query_response->getResponse();print_r($response->facet_counts->facet_queries);?> `

Результатом виконання цього прикладу буде щось подібне:


SolrObject Object
(
[price:[* TO 500]] u003d> 14
[price:[500 TO *]] u003d> 2
)

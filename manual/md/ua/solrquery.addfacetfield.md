- [« SolrQuery::addFacetDateOther](solrquery.addfacetdateother.md)
- [SolrQuery::addFacetQuery »](solrquery.addfacetquery.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Додає інше поле до фасету

# SolrQuery::addFacetField

(PECL solr \> u003d 0.9.2)

SolrQuery::addFacetField — Додає інше поле до фасету

### Опис

public **SolrQuery::addFacetField**(string `$field`):
[SolrQuery](class.solrquery.md)

Додає інше поле до фасету

### Список параметрів

`field`
Назва поля

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.

### Приклади

**Приклад #1 Приклад використання **SolrQuery::addFacetField()****

` <?php$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient($options);$ query u003d new SolrQuery();$query->setQuery($query);$query->addField('price')->addField('color');$query->setFacet(true);$query->addFacetField ('price')->addFacetField('color');$query_responseu003du003d$client->query($query);$response u003d $query_response->getResponse();print_r($response['facet_counts']['facet_field ']);?> `

Результатом виконання цього прикладу буде щось подібне:


SolrObject Object
(
[color] u003d> SolrObject Object
(
[blue] u003d> 20
[green] u003d> 100
)

)

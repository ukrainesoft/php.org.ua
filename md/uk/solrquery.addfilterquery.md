- [«SolrQuery::addField](solrquery.addfield.md)
- [SolrQuery::addGroupField »](solrquery.addgroupfield.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Визначає запит фільтру

# SolrQuery::addFilterQuery

(PECL solr \> u003d 0.9.2)

SolrQuery::addFilterQuery — Визначає запит фільтру

### Опис

public **SolrQuery::addFilterQuery**(string `$fq`):
[SolrQuery](class.solrquery.md)

Визначає запит фільтру

### Список параметрів

`fq`
Фільтр запиту

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery.

### Приклади

**Приклад #1 Приклад використання **SolrQuery::addFilterQuery()****

` <?php$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,);$client u003d new SolrClient($options);$ query u003d new SolrQuery();$query->setQuery('*:*');$query->addFilterQuery('color:blue,green');$query_response u003d $client->query($query);$response u003d $query_response->getResponse();print_r($response['facet_counts']['facet_fields']);?> `

Результатом виконання цього прикладу буде щось подібне:

&fqu003dcolor:blue,green

- [«SolrCollapseFunction](class.solrcollapsefunction.md)
- [SolrCollapseFunction::getField
»](solrcollapsefunction.getfield.md)

- [PHP Manual](index.md)
- [SolrCollapseFunction](class.solrcollapsefunction.md)
- Конструктор класу

# SolrCollapseFunction::\_\_construct

(PECL solr \>u003d 2.2.0)

SolrCollapseFunction::\_\_construct - Конструктор класу

### Опис

public **SolrCollapseFunction::\_\_construct**(string `$field` u003d ?)

Конструктор класу Collapse Function

### Список параметрів

`field`
Ім'я поля для згортання.

Щоб згорнути результат. Тип поля має бути однозначним: рядок,
ціле число або число з плаваючою точкою.

### Приклади

**Приклад #1 Приклад використання
**SolrCollapseFunction::\_\_construct()****

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,    'path'     u003d> SOLR_SERVER_PATH) ;$client u003d new SolrClient($options);$query u003d new SolrQuery('*:*');$func u003d new SolrCollapseFunction('field_name');$func->setMax('sum(cscore(),field some_other_field))');$func->setSize(100);$func->setNullPolicy(SolrCollapseFunction::NULLPOLICY_EXPAND);$query->collapse($func);$queryResponse u003d $client->query($quer $responseu003du003d$queryResponse->getResponse();print_r($response);?> `

### Дивіться також

- [SolrQuery::collapse()](solrquery.collapse.md) - Згортає набір
результатів до одного документа на групу

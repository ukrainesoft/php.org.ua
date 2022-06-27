- [«
SolrInputDocument::setFieldBoost](solrinputdocument.setfieldboost.md)
- [SolrInputDocument::toArray »](solrinputdocument.toarray.md)

- [PHP Manual](index.md)
- [SolrInputDocument](class.solrinputdocument.md)
- Сортує поля у документі

# SolrInputDocument::sort

(PECL solr \> u003d 0.9.2)

SolrInputDocument::sort — Сортує поля в документі

### Опис

public **SolrInputDocument::sort**(int `$sortOrderBy`, int
`$sortDirection` u003d SolrInputDocument::SORT_ASC): bool

`` descriptioncode
Поля впорядковані відповідно до зазначених критеріїв та напряму сортування.

Поля можуть бути відсортовані за значеннями підвищення, іменами полів та кількістю значень.

Параметр $order_by повинен бути одним з :

* SolrInputDocument::SORT_FIELD_NAME
* SolrInputDocument::SORT_FIELD_BOOST_VALUE
* SolrInputDocument::SORT_FIELD_VALUE_COUNT

Напрямок сортування може бути одним з:

* SolrInputDocument::SORT_DEFAULT
* SolrInputDocument::SORT_ASC
* SolrInputDocument::SORT_DESC
````

### Список параметрів

`sortOrderBy`
Критерій сортування

`sortDirection`
Напрямок сортування

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

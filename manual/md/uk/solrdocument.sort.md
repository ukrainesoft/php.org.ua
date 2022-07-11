- [«SolrDocument::\_\_set](solrdocument.set.md)
- [SolrDocument::toArray »](solrdocument.toarray.md)

- [PHP Manual](index.md)
- [SolrDocument](class.solrdocument.md)
- Сортує поля у документі

# SolrDocument::sort

(PECL solr \> u003d 0.9.2)

SolrDocument::sort — Сортує поля в документі

### Опис

public **SolrDocument::sort**(int `$sortOrderBy`, int `$sortDirection` u003d
SolrDocument::SORT_ASC): bool

`` descriptioncode
Поля впорядковані відповідно до зазначених критеріїв та напряму сортування.

Поля можуть бути відсортовані за значеннями підвищення, іменами полів та кількістю значень.

Параметр sortOrderBy повинен бути одним з:

* SolrDocument::SORT_FIELD_NAME
* SolrDocument::SORT_FIELD_BOOST_VALUE
* SolrDocument::SORT_FIELD_VALUE_COUNT

Напрямок sortDirection може бути одним з :

* SolrDocument::SORT_DEFAULT
* SolrDocument::SORT_ASC
* SolrDocument::SORT_DESC

Спосіб за замовчуванням – сортування у порядку зростання.
````

### Список параметрів

`sortOrderBy`
Критерій сортування.

`sortDirection`
Напрямок сортування.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

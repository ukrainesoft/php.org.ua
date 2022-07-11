- [«SolrDocument::sort](solrdocument.sort.md)
- [SolrDocument::unserialize »](solrdocument.unserialize.md)

- [PHP Manual](index.md)
- [SolrDocument](class.solrdocument.md)
- Повертає подання масиву документа

# SolrDocument::toArray

(PECL solr \> u003d 0.9.2)

SolrDocument::toArray — Повертає представлення масиву документа

### Опис

public **SolrDocument::toArray**(): array

Повертає представлення масиву документа.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає представлення масиву документа.

### Приклади

**Приклад #1 Приклад використання **SolrDocument::toArray()****

` <?php$doc u003d new SolrDocument();$doc->addField('id', 1123);$doc->features u003d "PHP Client Side";$doc->features u003d "Fast development cycles" doc['cat'] u003d 'Software';$doc['cat'] u003d 'Custom Search';$doc->cat   u003d 'Information Technology';print_r($doc->toArray());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[document_boost] u003d> 0
[field_count] u003d> 3
[fields] u003d> Array
(
[0] u003d> SolrDocumentField Object
(
[name] u003d> id
[boost] u003d> 0
[values] u003d> Array
(
[0] u003d> 1123
)

)

[1] u003d> SolrDocumentField Object
(
[name] u003d> features
[boost] u003d> 0
[values] u003d> Array
(
[0] u003d> PHP Client Side
[1] u003d> Fast development cycles
)

)

[2] u003d> SolrDocumentField Object
(
[name] u003d> cat
[boost] u003d> 0
[values] u003d> Array
(
[0] u003d> Software
[1] u003d> Custom Search
[2] u003d> Information Technology
)

)

)

)

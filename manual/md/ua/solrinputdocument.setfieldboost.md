- [«SolrInputDocument::setBoost](solrinputdocument.setboost.md)
- [SolrInputDocument::sort »](solrinputdocument.sort.md)

- [PHP Manual](index.md)
- [SolrInputDocument](class.solrinputdocument.md)
- Встановлює значення підвищення індексу часу для поля

# SolrInputDocument::setFieldBoost

(PECL solr \> u003d 0.9.2)

SolrInputDocument::setFieldBoost — Встановлює значення підвищення
індексу часу для поля

### Опис

public **SolrInputDocument::setFieldBoost**(string `$fieldName`, float
`$fieldBoostValue`): bool

Встановлює значення індексу часу для поля. Замінює
поточне значення для цього поля.

### Список параметрів

`fieldName`
Назва поля.

`fieldBoostValue`
Індекс часу для підвищення значення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

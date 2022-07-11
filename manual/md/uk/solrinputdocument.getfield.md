- [«
SolrInputDocument::getChildDocumentsCount](solrinputdocument.getchilddocumentscount.md)
- [SolrInputDocument::getFieldBoost
»](solrinputdocument.getfieldboost.md)

- [PHP Manual](index.md)
- [SolrInputDocument](class.solrinputdocument.md)
- Отримує поле на ім'я

# SolrInputDocument::getField

(PECL solr \> u003d 0.9.2)

SolrInputDocument::getField — Отримує поле на ім'я

### Опис

public **SolrInputDocument::getField**(string `$fieldName`):
[SolrDocumentField](class.solrdocumentfield.md)

Отримує поле у документі.

### Список параметрів

`fieldName`
Назва поля.

### Значення, що повертаються

Повертає об'єкт SolrDocumentField у разі успішного виконання та
**`false`** у разі виникнення помилки.

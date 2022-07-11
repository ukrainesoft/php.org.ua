- [«SolrDocument::getFieldNames](solrdocument.getfieldnames.md)
- [SolrDocument::hasChildDocuments
»](solrdocument.haschilddocuments.md)

- [PHP Manual](index.md)
- [SolrDocument](class.solrdocument.md)
- Повертає SolrInputDocument еквівалент об'єкту

# SolrDocument::getInputDocument

(PECL solr \> u003d 0.9.2)

SolrDocument::getInputDocument — Повертає SolrInputDocument еквівалент
об'єкта

### Опис

public **SolrDocument::getInputDocument**():
[SolrInputDocument](class.solrinputdocument.md)

SolrInputDocument повертає еквівалент об'єкта. Це корисно, якщо ви
хочете повторно надіслати/оновити документ, отриманий із запиту.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає SolrInputDocument у разі успішного виконання і **`null`**
у разі виникнення помилки.

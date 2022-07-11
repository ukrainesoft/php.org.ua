- [«SolrDocument::offsetGet](solrdocument.offsetget.md)
- [SolrDocument::offsetUnset »](solrdocument.offsetunset.md)

- [PHP Manual](index.md)
- [SolrDocument](class.solrdocument.md)
- Додає поле до документа

# SolrDocument::offsetSet

(PECL solr \> u003d 0.9.2)

SolrDocument::offsetSet — Додає поле до документа

### Опис

public **SolrDocument::offsetSet**(string `$fieldName`, string
`$fieldValue`): void

Використовується, коли об'єкт обробляється як масив для додавання поля
у документ.

### Список параметрів

`fieldName`
Назва поля.

`fieldValue`
Значення цього поля.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

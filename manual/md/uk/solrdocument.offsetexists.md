- [«SolrDocument::next](solrdocument.next.md)
- [SolrDocument::offsetGet »](solrdocument.offsetget.md)

- [PHP Manual](index.md)
- [SolrDocument](class.solrdocument.md)
- Перевіряє, чи існує конкретне поле

# SolrDocument::offsetExists

(PECL solr \> u003d 0.9.2)

SolrDocument::offsetExists — Перевіряє, чи конкретне поле існує

### Опис

public **SolrDocument::offsetExists**(string `$fieldName`): bool

Перевіряє, чи є певне поле. Використовується, коли об'єкт
обробляється як масив.

### Список параметрів

`fieldName`
Назва поля.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

- [«SolrDocument::\_\_destruct](solrdocument.destruct.md)
- [SolrDocument::\_\_get »](solrdocument.get.md)

- [PHP Manual](index.md)
- [SolrDocument](class.solrdocument.md)
- Перевіряє, чи існує поле у документі

# SolrDocument::fieldExists

(PECL solr \> u003d 0.9.2)

SolrDocument::fieldExists — Перевіряє, чи є поле в документі

### Опис

public **SolrDocument::fieldExists**(string `$fieldName`): bool

Перевіряє, чи є запитане поле коректним ім'ям поля
документ.

### Список параметрів

`fieldName`
Назва поля

### Значення, що повертаються

Повертає **`true`** у разі якщо поле присутній та **`false`** якщо
це не так.

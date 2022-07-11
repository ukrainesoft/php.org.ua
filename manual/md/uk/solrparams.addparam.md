- [«SolrParams::add](solrparams.add.md)
- [SolrParams::get »](solrparams.get.md)

- [PHP Manual](index.md)
- [SolrParams](class.solrparams.md)
- Додає параметр до об'єкту

# SolrParams::addParam

(PECL solr \> u003d 0.9.2)

SolrParams::addParam — Додає параметр до об'єкта

### Опис

public **SolrParams::addParam**(string `$name`, string `$value`):
[SolrParams](class.solrparams.md)

Додає параметр до об'єкта. Використовується для параметрів, які можна
вказувати кілька разів.

### Список параметрів

`name`
Ім'я параметра

`value`
Значення параметру

### Значення, що повертаються

У разі успішного виконання повертає об'єкт SolrParam та **`false`**
у разі виникнення помилки.

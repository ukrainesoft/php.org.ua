- [«SolrParams::set](solrparams.set.md)
- [SolrParams::toString »](solrparams.tostring.md)

- [PHP Manual](index.md)
- [SolrParams](class.solrparams.md)
- Встановлює параметр на вказане значення

# SolrParams::setParam

(PECL solr \> u003d 0.9.2)

SolrParams::setParam — Встановлює параметр на вказане значення

### Опис

public **SolrParams::setParam**(string `$name`, string `$value`):
[SolrParams](class.solrparams.md)

Встановлює для параметра запиту вказане значення. Використовується для
параметрів, які можна вказати лише один раз. Наступні виклики з
тим же ім'ям параметра перевизначать існуюче значення

### Список параметрів

`name`
Ім'я параметра

`value`
Значення параметру

### Значення, що повертаються

Повертає екземпляр SolrParams у разі успішного виконання та
**`false`** у разі зазначеного значення

### Приклади

**Приклад #1 Приклад використання **SolrParams::setParam()****

` <?php$param u003d new SolrParams();$param->setParam('q', 'solr')->setParam('rows', 2);?> `

Результатом виконання цього прикладу буде щось подібне:


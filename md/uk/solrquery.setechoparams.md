- [«SolrQuery::setEchoHandler](solrquery.setechohandler.md)
- [SolrQuery::setExpand »](solrquery.setexpand.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Визначає, які параметри включати у відповідь

# SolrQuery::setEchoParams

(PECL solr \> u003d 0.9.2)

SolrQuery::setEchoParams — Визначає, які параметри включати у відповідь

### Опис

public **SolrQuery::setEchoParams**(string `$type`):
[SolrQuery](class.solrquery.md)

Вказує Solr, які параметри запиту повинні бути включені у відповідь
цілей налагодження, допустимі значення:

`` descriptioncode
- none - не включати жодних параметрів запиту для налагодження
- explicit - включити параметри, явно вказані клієнтом
- all - включити всі параметри, які у цьому запиті, або явно вказані клієнтом, або неявні через конфігурації обробника запитів.
````

### Список параметрів

`type`
Тип параметрів, що включаються

### Значення, що повертаються

Повертає поточний об'єкт SolrQuery, якщо використовується повертається
значення.

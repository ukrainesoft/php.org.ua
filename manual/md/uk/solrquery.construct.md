- [«SolrQuery::collapse](solrquery.collapse.md)
- [SolrQuery::\_\_destruct »](solrquery.destruct.md)

- [PHP Manual](index.md)
- [SolrQuery](class.solrquery.md)
- Конструктор

# SolrQuery::\_\_construct

(PECL solr \> u003d 0.9.2)

SolrQuery::\_\_construct - Конструктор

### Опис

public **SolrQuery::\_\_construct**(string `$q` u003d ?)

Конструктор.

### Список параметрів

`q`
Додатковий пошуковий запит

### Значення, що повертаються

Нічого

### Помилки

Викидає
[SolrIllegalArgumentException](class.solrillegalargumentexception.md)
у разі передачі неприпустимого параметра.

### Список змін

| Версія | Опис |
|-----------------|------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------|
| PECL solr 2.0 | Якщо `q` був неприпустимим, викидається виняток [SolrIllegalArgumentException](class.solrillegalargumentexception.md). Раніше видавалась помилка. |

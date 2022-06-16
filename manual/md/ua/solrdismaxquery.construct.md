- [«SolrDisMaxQuery::addUserField](solrdismaxquery.adduserfield.md)
- [SolrDisMaxQuery::removeBigramPhraseField
»](solrdismaxquery.removebigramphrasefield.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Конструктор класу

# SolrDisMaxQuery::\_\_construct

(No version information available, might only be in Git)

SolrDisMaxQuery::\_\_construct - Конструктор класу

### Опис

public **SolrDisMaxQuery::\_\_construct**(string `$q` u003d ?)

Конструктор класу ініціалізує об'єкт та встановлює параметр q,
якщо він вказаний

### Список параметрів

`q`
Пошуковий запит (параметр q)

### Значення, що повертаються

### Помилки

Викидає
[SolrIllegalArgumentException](class.solrillegalargumentexception.md)
у разі передачі неправильного параметра.

### Приклади

**Приклад #1 Приклад використання **SolrDisMaxQuery::\_\_construct()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery('lucene');echo $dismaxQuery;?> `

Результат виконання цього прикладу:

qu003dlucene&defTypeu003dedismax

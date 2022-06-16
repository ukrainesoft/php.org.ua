- [«
SolrDisMaxQuery::setBigramPhraseSlop](solrdismaxquery.setbigramphraseslop.md)
- [SolrDisMaxQuery::setBoostQuery
»](solrdismaxquery.setboostquery.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Встановлює функцію посилення (параметр bf)

# SolrDisMaxQuery::setBoostFunction

(No version information available, might only be in Git)

SolrDisMaxQuery::setBoostFunction — Встановлює функцію посилення
(параметр bf)

### Опис

public **SolrDisMaxQuery::setBoostFunction**(string `$function`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Встановлює функцію посилення (параметр bf)

Функції (з необов'язковими посиленнями), які будуть включені до запиту
користувача, щоб вплинути на оцінку. Можна використовувати будь-яку
функцію, спочатку підтримувану Solr, разом зі значенням підвищення,
наприклад.

recip(rord(myfield),1,2,3)^1.5

### Список параметрів

`function`

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::setBoostFunction()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery('lucene');$boostRecentDocsFunction u003d "recip(ms(NOW,mydatefield),3.16e-11,1,1)";$dismaxQuery->setBoostFunction($bo $dismaxQuery.PHP_EOL;?> `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&bfu003drecip(ms(NOW,mydatefield),3.16e-11,1,1)

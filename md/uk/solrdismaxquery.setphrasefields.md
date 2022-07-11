- [«
SolrDisMaxQuery::setMinimumMatch](solrdismaxquery.setminimummatch.md)
- [SolrDisMaxQuery::setPhraseSlop
»](solrdismaxquery.setphraseslop.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Встановлює поля фрази та їх посилення (і відхилення) за допомогою
параметра pf2

# SolrDisMaxQuery::setPhraseFields

(No version information available, might only be in Git)

SolrDisMaxQuery::setPhraseFields — Встановлює поля фрази та їх
посилення (і відхилення) за допомогою параметра pf2

### Опис

public **SolrDisMaxQuery::setPhraseFields**(string `$fields`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Встановлює поля фрази та їх посилення (і відхилення) за допомогою
параметра pf2

### Список параметрів

`fields`
Поля, посилення (відхилення).

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::setPhraseFields()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery("lucene");$dismaxQuery->setPhraseFields("cat~5.1^2 feature^4.5");echo $dismaxQuery.PHP_EOL;?> `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&pfu003dcat~5.1^2 feature^4.5

### Дивіться також

- **SolrDisMaxQuery::addPhraseFields()**
- [SolrDisMaxQuery::removePhraseField()](solrdismaxquery.removephrasefield.md) -
Видаляє поле фрази (параметра)

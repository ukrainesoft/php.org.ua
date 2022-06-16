- [«
SolrDisMaxQuery::removeUserField](solrdismaxquery.removeuserfield.md)
- [SolrDisMaxQuery::setBigramPhraseSlop
»](solrdismaxquery.setbigramphraseslop.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Встановлює поля біграми фрази та їх посилення (і відхилення) з
за допомогою параметра pf2

# SolrDisMaxQuery::setBigramPhraseFields

(No version information available, might only be in Git)

SolrDisMaxQuery::setBigramPhraseFields — Встановлює поля біграми
фрази та їх посилення (і відхилення) за допомогою параметра pf2

### Опис

public **SolrDisMaxQuery::setBigramPhraseFields**(string `$fields`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Встановлює поля біграми фрази та їх посилення (і відхилення) за допомогою
параметра pf2

### Список параметрів

`fields`
Посилення полів (відхилення).

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::setBigramPhraseFields()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery("lucene");$dismaxQuery->setBigramPhraseFields("cat~5.1^2 feature^4.5");echo $dismaxQuery.PHP_EOL;?> `

Результатом виконання цього прикладу буде щось подібне:

qu003dlucene&defTypeu003dedismax&pf2u003dcat~5.1^2 feature^4.5

### Дивіться також

- [SolrDisMaxQuery::setBigramPhraseSlop()](solrdismaxquery.setbigramphraseslop.md) -
Встановлює коефіцієнт відхилення біграми фрази (параметр ps2)
- **SolrDisMaxQuery::addBigramPhraseFields()**
- [SolrDisMaxQuery::removeBigramPhraseField()](solrdismaxquery.removebigramphrasefield.md) -
Видаляє поле біграми фрази (параметр pf2)
- [SolrDisMaxQuery::setTrigramPhraseFields()](solrdismaxquery.settrigramphrasefields.md) -
Безпосередньо встановлює поля триграми фрази (параметр pf3)

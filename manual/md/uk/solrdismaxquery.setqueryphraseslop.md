- [«SolrDisMaxQuery::setQueryAlt](solrdismaxquery.setqueryalt.md)
- [SolrDisMaxQuery::setTieBreaker
»](solrdismaxquery.settiebreaker.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- визначає коефіцієнт відхилення, дозволений для фразових
запитів, явно включених до рядка запиту користувача (параметр
qf)

# SolrDisMaxQuery::setQueryPhraseSlop

(No version information available, might only be in Git)

SolrDisMaxQuery::setQueryPhraseSlop — Визначає коефіцієнт відхилення,
дозволений для фразових запитів, явно включених до рядка запиту
користувача (параметр qf)

### Опис

public **SolrDisMaxQuery::setQueryPhraseSlop**(string `$slop`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Визначає коефіцієнт відхилення, дозволений для фразових запитів,
явно включених до рядка запиту користувача (параметр *qf*).

Коефіцієнт відхилення відноситься до кількості позицій, на які
необхідно перемістити один токен по відношенню до іншого токену, щоб
відповідати фразі, вказаній у запиті.

### Список параметрів

`slop`
Коефіцієнт відхилення.

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання
**SolrDisMaxQuery::setQueryPhraseSlop()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery();$dismaxQuery->setQueryPhraseSlop(3);echo $dismaxQuery;?> `

Результатом виконання цього прикладу буде щось подібне:

defTypeu003dedismax&qsu003d3

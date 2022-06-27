- [«
SolrDisMaxQuery::setQueryPhraseSlop](solrdismaxquery.setqueryphraseslop.md)
- [SolrDisMaxQuery::setTrigramPhraseFields
»](solrdismaxquery.settrigramphrasefields.md)

- [PHP Manual](index.md)
- [SolrDisMaxQuery](class.solrdismaxquery.md)
- Встановлює параметр Tie Breaker (параметр tie)

# SolrDisMaxQuery::setTieBreaker

(No version information available, might only be in Git)

SolrDisMaxQuery::setTieBreaker — Встановлює параметр Tie Breaker
(параметр tie)

### Опис

public **SolrDisMaxQuery::setTieBreaker**(string `$tieBreaker`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

Встановлює параметр Tie Breaker (Параметр tie).

### Список параметрів

`tieBreaker`
Параметр *tie* вказує значення з плаваючою точкою (що має
бути набагато менше 1) для використання як дозвіл
конфліктів у запитах DisMax.

### Значення, що повертаються

[SolrDisMaxQuery](class.solrdismaxquery.md)

### Приклади

**Приклад #1 Приклад використання **SolrDisMaxQuery::setTieBreaker()****

` <?php$dismaxQuery u003d new SolrDisMaxQuery();$dismaxQuery->setTieBreaker(0.1);echo $dismaxQuery;?> `

Результат виконання цього прикладу:

defTypeu003dedismax&tieu003d0.1

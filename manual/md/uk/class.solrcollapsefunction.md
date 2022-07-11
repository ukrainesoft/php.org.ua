- [«
SolrDisMaxQuery::useEDisMaxQueryParser](solrdismaxquery.useedismaxqueryparser.md)
- [SolrCollapseFunction::\_\_construct
»](solrcollapsefunction.construct.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrCollapseFunction

# Клас SolrCollapseFunction

(PECL solr \>u003d 2.2.0)

## Вступ

## Огляд класів

class **SolrCollapseFunction** {

/\* Константи \*/

const string `NULLPOLICY_IGNORE` u003d ignore;

const string `NULLPOLICY_EXPAND` u003d expand;

const string `NULLPOLICY_COLLAPSE` u003d collapse;

/\* Методи \*/

public [\_\_construct](solrcollapsefunction.construct.md)(string
`$field` u003d ?)

public [getField](solrcollapsefunction.getfield.md)(): string

public [getHint](solrcollapsefunction.gethint.md)(): string

public [getMax](solrcollapsefunction.getmax.md)(): string

public [getMin](solrcollapsefunction.getmin.md)(): string

public [getNullPolicy](solrcollapsefunction.getnullpolicy.md)():
string

public [getSize](solrcollapsefunction.getsize.md)(): int

public [setField](solrcollapsefunction.setfield.md)(string
`$fieldName`): [SolrCollapseFunction](class.solrcollapsefunction.md)

public [setHint](solrcollapsefunction.sethint.md)(string `$hint`):
[SolrCollapseFunction](class.solrcollapsefunction.md)

public [setMax](solrcollapsefunction.setmax.md)(string `$max`):
[SolrCollapseFunction](class.solrcollapsefunction.md)

public [setMin](solrcollapsefunction.setmin.md)(string `$min`):
[SolrCollapseFunction](class.solrcollapsefunction.md)

public [setNullPolicy](solrcollapsefunction.setnullpolicy.md)(string
`$nullPolicy`): [SolrCollapseFunction](class.solrcollapsefunction.md)

public [setSize](solrcollapsefunction.setsize.md)(int `$size`):
[SolrCollapseFunction](class.solrcollapsefunction.md)

public [\_\_toString](solrcollapsefunction.tostring.md)(): string

}

## Зумовлені константи

**`SolrCollapseFunction::NULLPOLICY_IGNORE`**

**`SolrCollapseFunction::NULLPOLICY_EXPAND`**

**`SolrCollapseFunction::NULLPOLICY_COLLAPSE`**

## Зміст

- [SolrCollapseFunction::\_\_construct](solrcollapsefunction.construct.md)
- Конструктор класу
- [SolrCollapseFunction::getField](solrcollapsefunction.getfield.md)
— Повертає згорнуте поле
- [SolrCollapseFunction::getHint](solrcollapsefunction.gethint.md) -
Повертає підказку згортання
- [SolrCollapseFunction::getMax](solrcollapsefunction.getmax.md) -
Повертає максимальне значення
- [SolrCollapseFunction::getMin](solrcollapsefunction.getmin.md) -
Повертає мінімальне значення
- [SolrCollapseFunction::getNullPolicy](solrcollapsefunction.getnullpolicy.md)
- Повертає NULL-політику
- [SolrCollapseFunction::getSize](solrcollapsefunction.getsize.md) -
Повертає параметр розміру
- [SolrCollapseFunction::setField](solrcollapsefunction.setfield.md)
— Встановлює поле для згортання
- [SolrCollapseFunction::setHint](solrcollapsefunction.sethint.md) -
Встановлює підказку згортання
- [SolrCollapseFunction::setMax](solrcollapsefunction.setmax.md) -
Вибирає заголовки групи за максимальним значенням числового поля
або запит функції
- [SolrCollapseFunction::setMin](solrcollapsefunction.setmin.md) -
Встановлює початковий розмір структур даних, що згортаються, тільки
при згортанні по числовому полю
- [SolrCollapseFunction::setNullPolicy](solrcollapsefunction.setnullpolicy.md)
- Встановлює NULL-політику
- [SolrCollapseFunction::setSize](solrcollapsefunction.setsize.md) -
Встановлює початковий розмір структур даних, що згортаються, тільки
при згортанні по числовому полю
- [SolrCollapseFunction::\_\_toString](solrcollapsefunction.tostring.md)
- Повертає рядок, що представляє побудовану функцію згортання

- [« Приклади](solr.examples.md)
- [SolrUtils::digestXmlResponse »](solrutils.digestxmlresponse.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrUtils

# Клас SolrUtils

(PECL solr \> u003d 0.9.2)

## Вступ

Містить службові методи для отримання поточної версії модуля та
підготовки фраз запиту.

Також містить метод для екранування рядків запиту та аналізу відповідей
XML.

## Огляд класів

abstract class **SolrUtils** {

/\* Методи \*/

public static
[digestXmlResponse](solrutils.digestxmlresponse.md)(string
`$xmlresponse`, int `$parse_mode` u003d 0):
[SolrObject](class.solrobject.md)

public static [escapeQueryChars](solrutils.escapequerychars.md)(string
`$str`): string\|false

public static [getSolrVersion](solrutils.getsolrversion.md)(): string

public static [queryPhrase](solrutils.queryphrase.md)(string `$str`):
string

}

## Зміст

- [SolrUtils::digestXmlResponse](solrutils.digestxmlresponse.md) -
Перетворює XML-рядок відповіді на SolrObject
- [SolrUtils::escapeQueryChars](solrutils.escapequerychars.md) -
Екранує рядок запиту Lucene
- [SolrUtils::getSolrVersion](solrutils.getsolrversion.md) -
Повертає поточну версію модуля Solr
- [SolrUtils::queryPhrase](solrutils.queryphrase.md) -
Підготовка фрази з неекранованого рядка запиту Lucene

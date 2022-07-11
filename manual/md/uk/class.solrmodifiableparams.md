- [« SolrParams::unserialize](solrparams.unserialize.md)
- [SolrModifiableParams::\_\_construct
»](solrmodifiableparams.construct.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrModifiableParams

# Клас SolrModifiableParams

(PECL solr \> u003d 0.9.2)

## Вступ

Представляє колекцію пар "ім'я-значення", що надсилається на сервер Solr
під час запиту.

## Огляд класів

class **SolrModifiableParams** extends
[SolrParams](class.solrparams.md) implements
[Serializable](class.serializable.md) {

/\* Методи \*/

public [\_\_construct](solrmodifiableparams.construct.md)()

public [\_\_destruct](solrmodifiableparams.destruct.md)()

/\* Наслідувані методи \*/

final public [SolrParams::add](solrparams.add.md)(string `$name`,
string `$value`): [SolrParams](class.solrparams.md)

public [SolrParams::addParam](solrparams.addparam.md)(string `$name`,
string `$value`): [SolrParams](class.solrparams.md)

final public [SolrParams::get](solrparams.get.md)(string
`$param_name`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [SolrParams::getParam](solrparams.getparam.md)(string
`$param_name` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [SolrParams::getParams](solrparams.getparams.md)(): array

final public
[SolrParams::getPreparedParams](solrparams.getpreparedparams.md)():
array

final public [SolrParams::serialize](solrparams.serialize.md)():
string

final public [SolrParams::set](solrparams.set.md)(string `$name`,
string `$value`): void

public [SolrParams::setParam](solrparams.setparam.md)(string `$name`,
string `$value`): [SolrParams](class.solrparams.md)

final public [SolrParams::toString](solrparams.tostring.md)(bool
`$url_encode` u003d **`false`**): string

final public
[SolrParams::unserialize](solrparams.unserialize.md)(string
`$serialized`): void

}

## Зміст

- [SolrModifiableParams::\_\_construct](solrmodifiableparams.construct.md)
- Конструктор
- [SolrModifiableParams::\_\_destruct](solrmodifiableparams.destruct.md)
- Деструктор

- [«
SolrGenericResponse::\_\_destruct](solrgenericresponse.destruct.md)
- [SolrParams::add »](solrparams.add.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrParams

# Клас SolrParams

(PECL solr \> u003d 0.9.2)

## Вступ

Представляє колекцію пар "ім'я-значення", що надсилається на сервер Solr
під час запиту.

## Огляд класів

abstract class **SolrParams** implements
[Serializable](class.serializable.md) {

/\* Методи \*/

final public [add](solrparams.add.md)(string `$name`, string
`$value`): [SolrParams](class.solrparams.md)

public [addParam](solrparams.addparam.md)(string `$name`, string
`$value`): [SolrParams](class.solrparams.md)

final public [get](solrparams.get.md)(string `$param_name`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [getParam](solrparams.getparam.md)(string `$param_name` u003d
?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [getParams](solrparams.getparams.md)(): array

final public [getPreparedParams](solrparams.getpreparedparams.md)():
array

final public [serialize](solrparams.serialize.md)(): string

final public [set](solrparams.set.md)(string $name, string
`$value`): void

public [setParam](solrparams.setparam.md)(string `$name`, string
`$value`): [SolrParams](class.solrparams.md)

final public [toString](solrparams.tostring.md)(bool `$url_encode` u003d
**`false`**): string

final public [unserialize](solrparams.unserialize.md)(string
`$serialized`): void

}

## Зміст

- [SolrParams::add](solrparams.add.md) - Псевдонім
SolrParams::addParam
- [SolrParams::addParam](solrparams.addparam.md) — Додає
параметр до об'єкту
- [SolrParams::get](solrparams.get.md) - Псевдонім
SolrParams::getParam
- [SolrParams::getParam](solrparams.getparam.md) - Повертає
значення параметру
- [SolrParams::getParams](solrparams.getparams.md) - Повертає
масив параметрів, не в URL-закодованому вигляді
- [SolrParams::getPreparedParams](solrparams.getpreparedparams.md) -
Повертає масив параметрів в URL-коді
- [SolrParams::serialize](solrparams.serialize.md) — Використовується
для користувальницької серіалізації
- [SolrParams::set](solrparams.set.md) - Псевдонім
SolrParams::setParam
- [SolrParams::setParam](solrparams.setparam.md) — Встановлює
параметр на вказане значення
- [SolrParams::toString](solrparams.tostring.md) — Повертає все
параметри об'єкта у вигляді пар ім'я-значення
- [SolrParams::unserialize](solrparams.unserialize.md)
Використовується для серіалізації користувача

- [« SoapFault::\_\_toString](soapfault.tostring.md)
- [SoapHeader::\_\_construct »](soapheader.construct.md)

- [PHP Manual](index.md)
- [SOAP](book.soap.md)
- Клас SoapHeader

# Клас SoapHeader

(PHP 5, PHP 7, PHP 8)

## Вступ

Заголовок SOAP.

## Огляд класів

class **SoapHeader** {

/\* Властивості \*/

public string `$namespace`;

public string `$name`;

public
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d null;

public bool `$mustUnderstand`;

public string\|int\|null `$actor`;

/\* Методи \*/

[\_\_construct](soapheader.construct.md)(
string `$namespace`,
string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?,
bool `$mustunderstand` u003d ?,
string `$actor` u003d ?
)

}

## Властивості

`actor`

`data`

`mustUnderstand`

`name`

`namespace`

## Зміст

- [SoapHeader::\_\_construct](soapheader.construct.md) - Конструктор
SoapHeader

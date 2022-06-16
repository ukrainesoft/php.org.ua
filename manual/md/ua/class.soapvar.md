- [« SoapParam::\_\_construct](soapparam.construct.md)
- [SoapVar::\_\_construct »](soapvar.construct.md)

- [PHP Manual](index.md)
- [SOAP](book.soap.md)
- Клас SoapVar

# Клас SoapVar

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас, що представляє змінну або об'єкт для використання з
сервісами SOAP.

## Огляд класів

class **SoapVar** {

/\* Властивості \*/

public int `$enc_type`;

public
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$enc_value` u003d null;

public ?string `$enc_stype` u003d null;

public ?string `$enc_ns` u003d null;

public ?string `$enc_name` u003d null;

public ?string `$enc_namens` u003d null;

/\* Методи \*/

public [\_\_construct](soapvar.construct.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data`,
?int `$encoding`,
?string `$typeName` u003d **`null`**,
?string `$typeNamespace` u003d **`null`**,
?string `$nodeName` u003d **`null`**,
?string `$nodeNamespace` u003d **`null`**
)

}

## Властивості

`enc_name`

`enc_namens`

`enc_ns`

`enc_type`

`enc_stype`

`enc_value`

## Зміст

- [SoapVar::\_\_construct](soapvar.construct.md) - Конструктор
SoapVar

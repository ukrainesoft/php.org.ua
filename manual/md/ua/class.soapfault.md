- [« SoapServer::setPersistence](soapserver.setpersistence.md)
- [SoapFault::\_\_construct »](soapfault.construct.md)

- [PHP Manual](index.md)
- [SOAP](book.soap.md)
- Клас SoapFault

# Клас SoapFault

(PHP 5, PHP 7, PHP 8)

## Вступ

Помилка SOAP.

## Огляд класів

class **SoapFault** extends [Exception](class.exception.md) {

/\* Властивості \*/

public string `$faultstring`;

public ?string `$faultcode` u003d null;

public ?string `$faultcodens` u003d null;

public ?string `$faultactor` u003d null;

public
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$detail u003d null;

public ?string `$_name` u003d null;

public
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$headerfault` u003d null;

/\* Наслідувані властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Методи \*/

public [\_\_construct](soapfault.construct.md)(
array\|string\|null `$code`,
string `$string`,
?string `$actor` u003d **`null`**,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$details` u003d **`null`**,
?string `$name` u003d **`null`**,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$headerFault` u003d **`null`**
)

public [\_\_toString](soapfault.tostring.md)(): string

/\* Наслідувані методи \*/

final public [Exception::getMessage](exception.getmessage.md)():
string

final public [Exception::getPrevious](exception.getprevious.md)():
?[Throwable](class.throwable.md)

final public [Exception::getCode](exception.getcode.md)(): int

final public [Exception::getFile](exception.getfile.md)(): string

final public [Exception::getLine](exception.getline.md)(): int

final public [Exception::getTrace](exception.gettrace.md)(): array

final public
[Exception::getTraceAsString](exception.gettraceasstring.md)(): string

public [Exception::\_\_toString](exception.tostring.md)(): string

private [Exception::\_\_clone](exception.clone.md)(): void

}

## Властивості

`_name`

`detail`

`faultactor`

`faultcode`

`faultcodens`

`faultstring`

`headerfault`

## Зміст

- [SoapFault::\_\_construct](soapfault.construct.md) - Конструктор
SoapFault
- [SoapFault::\_\_toString](soapfault.tostring.md) — Отримати
текстове уявлення SoapFault

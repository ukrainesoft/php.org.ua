- [«use_soap_error_handler](function.use-soap-error-handler.md)
- [SoapClient::\_\_call »](soapclient.call.md)

- [PHP Manual](index.md)
- [SOAP](book.soap.md)
- Клас SoapClient

# Клас [SoapClient](class.soapclient.md)

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас SoapClient є клієнтом для серверів [» SOAP
1.1](http://www.w3.org/TR/soap11/), [» SOAP
1.2](http://www.w3.org/TR/soap12/). Він може використовуватися в режимі з
WSDL чи без нього.

## Огляд класів

class **SoapClient** {

/\* Властивості \*/

private ?string `$uri` u003d null;

private ?int `$style` u003d null;

private ?int `$use` u003d null;

private ?string `$location` u003d null;

private bool `$trace` u003d false;

private ?int `$compression` u003d null;

private ?resource `$sdl` u003d null;

private ?resource `$typemap` u003d null;

private ?resource `$httpsocket` u003d null;

private ?resource `$httpurl` u003d null;

private ?string `$_login` u003d null;

private ?string `$_password` u003d null;

private bool `$_use_digest` u003d false;

private ?string `$_digest` u003d null;

private ?string `$_proxy_host` u003d null;

private ?int `$_proxy_port` u003d null;

private ?string `$_proxy_login` u003d null;

private ?string `$_proxy_password` u003d null;

private bool `$_exceptions` u003d true;

private ?string `$_encoding` u003d null;

private ?array `$_classmap` u003d null;

private ?int `$_features` u003d null;

private int `$_connection_timeout`;

private ?resource `$_stream_context` u003d null;

private ?string `$_user_agent` u003d null;

private bool `$_keep_alive` u003d true;

private ?int `$_ssl_method` u003d null;

private int `$_soap_version`;

private ?int `$_use_proxy` u003d null;

private array `$_cookies` u003d \[\];

private ?array `$__default_headers` u003d null;

private ?[SoapFault](class.soapfault.md) `$__soap_fault` u003d null;

private ?string `$__last_request` u003d null;

private ?string `$__last_response` u003d null;

private ?string `$__last_request_headers` u003d null;

private ?string `$__last_response_headers` u003d null;

/\* Методи \*/

public [\_\_construct](soapclient.construct.md)(?string `$wsdl`, array
`$options` u003d \[\])

public [\_\_call](soapclient.call.md)(string `$name`, array `$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [\_\_doRequest](soapclient.dorequest.md)(
string `$request`,
string `$location`,
string `$action`,
int `$version`,
bool `$oneWay` u003d **`false`**
): ?string

public [\_\_getCookies](soapclient.getcookies.md)(): array

public [\_\_getFunctions](soapclient.getfunctions.md)(): ?array

public [\_\_getLastRequest](soapclient.getlastrequest.md)(): ?string

public
[\_\_getLastRequestHeaders](soapclient.getlastrequestheaders.md)():
?string

public [\_\_getLastResponse](soapclient.getlastresponse.md)(): ?string

public
[\_\_getLastResponseHeaders](soapclient.getlastresponseheaders.md)():
?string

public [\_\_getTypes](soapclient.gettypes.md)(): ?array

public [\_\_setCookie](soapclient.setcookie.md)(string `$name`,
?string `$value` u003d **`null`**): void

public [\_\_setLocation](soapclient.setlocation.md)(?string
`$location` u003d **`null`**): ?string

public
[\_\_setSoapHeaders](soapclient.setsoapheaders.md)([SoapHeader](class.soapheader.md)\|array\|null
`$headers` u003d **`null`**): bool

public [\_\_soapCall](soapclient.soapcall.md)(
string `$name`,
array `$args`,
?array `$options` u003d **`null`**,
[SoapHeader](class.soapheader.md)\|array\|null `$inputHeaders` u003d
**`null`**,
array `&$outputHeaders` u003d **`null`**
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

}

## Властивості

`__default_headers`

`__last_request`

`__last_request_headers`

`__last_response`

`__last_response_headers`

`__soap_fault`

`_classmap`

`_connection_timeout`

`_cookies`

`_digest`

`_encoding`

`_exceptions`

`_features`

`_keep_alive`

`_login`

`_password`

`_proxy_host`

`_proxy_login`

`_proxy_password`

`_proxy_port`

`_soap_version`

`_ssl_method`

`_stream_context`

`_use_digest`

`_use_proxy`

`_user_agent`

`compression`

`httpsocket`

`httpurl`

`location`

`sdl`

`style`

`trace`

`typemap`

`uri`

`use`

## Зміст

- [SoapClient::\_\_call](soapclient.call.md) — Викликає SOAP-функцію
(застарілий метод)
- [SoapClient::\_\_construct](soapclient.construct.md) - Конструктор
класу SoapClient
- [SoapClient::\_\_doRequest](soapclient.dorequest.md) - Виконує
SOAP-запит
- [SoapClient::\_\_getCookies](soapclient.getcookies.md) — Отримати
список cookies
- [SoapClient::\_\_getFunctions](soapclient.getfunctions.md) -
Повертає список доступних SOAP-функцій
- [SoapClient::\_\_getLastRequest](soapclient.getlastrequest.md) -
Повертає останній SOAP-запит
- [SoapClient::\_\_getLastRequestHeaders](soapclient.getlastrequestheaders.md)
— Повертає SOAP-заголовки останнього запиту
- [SoapClient::\_\_getLastResponse](soapclient.getlastresponse.md) -
Повертає останню SOAP-відповідь
- [SoapClient::\_\_getLastResponseHeaders](soapclient.getlastresponseheaders.md)
— Повертає SOAP-заголовки останньої відповіді
- [SoapClient::\_\_getTypes](soapclient.gettypes.md) - Повертає
список SOAP-типів
- [SoapClient::\_\_setCookie](soapclient.setcookie.md) -
Встановлює cookie для запитів SOAP
- [SoapClient::\_\_setLocation](soapclient.setlocation.md) -
Встановлює адресу веб-служби, що використовується
- [SoapClient::\_\_setSoapHeaders](soapclient.setsoapheaders.md) -
Встановлює заголовки SOAP для подальших дзвінків
- [SoapClient::\_\_soapCall](soapclient.soapcall.md) - Викликає
SOAP-функцію

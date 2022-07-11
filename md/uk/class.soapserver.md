- [« SoapClient::\_\_soapCall](soapclient.soapcall.md)
- [SoapServer::addFunction »](soapserver.addfunction.md)

- [PHP Manual](index.md)
- [SOAP](book.soap.md)
- Клас SoapServer

# Клас SoapServer

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас SoapServer є сервером для протоколів [» SOAP
1.1](http://www.w3.org/TR/soap11/) та [» SOAP
1.2](http://www.w3.org/TR/soap12/). Його можна використовувати з описом
служби WSDL або без нього.

## Огляд класів

class **SoapServer** {

/\* Властивості \*/

private resource `$service`;

private ?[SoapFault](class.soapfault.md) `$__soap_fault` u003d null;

/\* Методи \*/

public [\_\_construct](soapserver.construct.md)(?string `$wsdl`, array
`$options` u003d \[\])

public [addFunction](soapserver.addfunction.md)(array\|string\|int
`$functions`): void

public
[addSoapHeader](soapserver.addsoapheader.md)([SoapHeader](class.soapheader.md)
`$header`): void

public [fault](soapserver.fault.md)(
string `$code`,
string `$string`,
string `$actor` u003d "",
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$details` u003d **`null`**,
string `$name` u003d ""
): void

public [getFunctions](soapserver.getfunctions.md)(): array

public [handle](soapserver.handle.md)(?string `$request` u003d
**`null`**): void

public [setClass](soapserver.setclass.md)(string `$class`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`): void

public [setObject](soapserver.setobject.md)(object `$object`): void

public [setPersistence](soapserver.setpersistence.md)(int `$mode`):
void

}

## Властивості

`service`

`__soap_fault`

## Зміст

- [SoapServer::addFunction](soapserver.addfunction.md) — Додає
одну або кілька функцій для обробки запитів SOAP
- [SoapServer::addSoapHeader](soapserver.addsoapheader.md) -
Додати заголовок SOAP у відповідь
- [SoapServer::\_\_construct](soapserver.construct.md) - Конструктор
SoapServer
- [SoapServer::fault](soapserver.fault.md) — Вимушує SoapServer
повернути помилку
- [SoapServer::getFunctions](soapserver.getfunctions.md) — Повернути
список певних функцій
- [SoapServer::handle](soapserver.handle.md) — Обробка
SOAP-запиту
- [SoapServer::setClass](soapserver.setclass.md) — Встановлює
клас, який обробляє SOAP-запити
- [SoapServer::setObject](soapserver.setobject.md) — Встановлює
об'єкт, який використовуватиметься для обробки SOAP-запитів
- [SoapServer::setPersistence](soapserver.setpersistence.md) -
Встановлює режим збереження SoapServer

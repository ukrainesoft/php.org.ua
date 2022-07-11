- [« SoapServer::addSoapHeader](soapserver.addsoapheader.md)
- [SoapServer::fault »](soapserver.fault.md)

- [PHP Manual](index.md)
- [SoapServer](class.soapserver.md)
- Конструктор SoapServer

# SoapServer::\_\_construct

(PHP 5, PHP 7, PHP 8)

SoapServer::\_\_construct - Конструктор SoapServer

### Опис

public **SoapServer::\_\_construct**(?string `$wsdl`, array `$options` u003d
\[\])

Цей конструктор дозволяє створювати об'єкти
[SoapServer](class.soapserver.md) у WSDL або не-WSDL режимах.

### Список параметрів

`wsdl`
Для використання SoapServer у режимі WSDL вкажіть URI WSDL-файлу. В
в іншому випадку вкажіть **`null`** і встановіть опцію `uri` рівною
простір імен сервера.

`options`
Спроба встановити версію SOAP за замовчуванням (`soap_version`), внутрішню
кодування (`encoding`) та URI відправника (`actor`).

Опцію `classmap` можна використовувати для порівняння деяких типів
WSDL із класами PHP. Ця опція повинна бути масивом з рівними ключами
типів WSDL та значенням рівними іменам класів PHP.

Опція `typemap` є масивом зіставлення типів. Масив із ключами
`type_name`, `type_ns` (URI простору імен), `from_xml`
(callback-функція, що приймає один рядковий параметр) та `to_xml`
(callback-функція, що приймає один об'єкт як параметр).

Опція `cache_wsdl` задається однією з констант: **`WSDL_CACHE_NONE`**,
**`WSDL_CACHE_DISK`**, **`WSDL_CACHE_MEMORY`** або
**`WSDL_CACHE_BOTH`**.

Також є опція `features`, яка задається однією із констант:
**`SOAP_WAIT_ONE_WAY_CALLS`**, **`SOAP_SINGLE_ELEMENT_ARRAYS`** або
**`SOAP_USE_XSI_ARRAY_TYPE`**.

опція `send_errors` може бути встановлена в **`false`** для надсилання
загального повідомлення про помилку ("Internal error") замість спеціального
повідомлення про помилку, що надсилається інакше.

### Приклади

**Приклад #1 Приклад використання **SoapServer::SoapServer()****

` <?php$server u003d new SoapServer("some.wsdl");$server u003d new SoapServer("some.wsdl", array('soap_version' u003d> SOAP_1_2));$server u003d new ", array('actor' u003d> "http://example.org/ts-tests/C"));$server u003d new SoapServer("some.wsdl", array('encoding'u003d>'ISO-8859 -1'));$server u003d new SoapServer(null, array('uri' u003d> "http://test-uri/"));class MyBook {    public $title; public $author;}$server u003d new SoapServer("books.wsdl", array('classmap' u003d> array('book' u003d> "MyBook")));?> `

### Дивіться також

- **SoapClient::SoapClient()**

- [«SoapHeader](class.soapheader.md)
- [SoapParam »](class.soapparam.md)

- [PHP Manual](index.md)
- [SoapHeader](class.soapheader.md)
- Конструктор SoapHeader

# SoapHeader::\_\_construct

(PHP 5, PHP 7, PHP 8)

SoapHeader::\_\_construct - Конструктор SoapHeader

### Опис

**SoapHeader::\_\_construct**(
string `$namespace`,
string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?,
bool `$mustunderstand` u003d ?,
string `$actor` u003d ?
)

Створює новий об'єкт SoapHeader.

### Список параметрів

`namespace`
Простір імен для елемента заголовка SOAP.

`name`
Назва об'єкта SoapHeader.

`data`
Вміст заголовка SOAP. Можливо як значенням PHP, і об'єктом
[SoapVar](class.soapvar.md).

`mustUnderstand`
Значення атрибуту `mustUnderstand` елемента заголовка SOAP.

`actor`
Значення атрибуту `actor` елемента заголовка SOAP.

### Приклади

**Приклад #1 Приклад використання **SoapHeader::SoapHeader()****

` <?php$client u003d new SoapClient(null, array('location' u003d> "http://localhost/soap.php",                                     'uri'      u003d> "http://test-uri/"));$ client->__soapCall("echoVoid", null, null,                new SoapHeader('http://soapinterop.org/echoheader/',                               'echoMeStringRequest',                               'hello world'));?> `

### Дивіться також

- [SoapClient::\_\_soapCall()](soapclient.soapcall.md) - Викликає
SOAP-функцію
- **SoapVar::SoapVar()**
- **SoapParam::SoapParam()**
- [SoapServer::addSoapHeader()](soapserver.addsoapheader.md) -
Додати заголовок SOAP у відповідь

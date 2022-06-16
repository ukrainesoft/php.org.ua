- [« SoapClient::\_\_construct](soapclient.construct.md)
- [SoapClient::\_\_getCookies »](soapclient.getcookies.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Виконує SOAP-запит

# SoapClient::\_\_doRequest

(PHP 5, PHP 7, PHP 8)

SoapClient::\_\_doRequest - Виконує SOAP-запит

### Опис

public **SoapClient::\_\_doRequest**(
string `$request`,
string `$location`,
string `$action`,
int `$version`,
bool `$oneWay` u003d **`false`**
): ?string

Виконує SOAP-запит поверх HTTP.

Цей метод може бути перевизначений у підкласах для реалізації інших
транспортних рівнів, виконання додаткової обробки XML або інших
цілей.

### Список параметрів

`request`
Запит XML SOAP.

`location`
URL для запиту.

`action`
Дія SOAP.

`version`
Версія SOAP.

`oneWay`
Якщо oneWay дорівнює 1, метод нічого не повертає. Цей параметр
використовується, коли не очікується відповіді.

### Значення, що повертаються

Відповідь XML SOAP.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------|
| 8.0.0 | Тип `oneWay` тепер bool; раніше він був цілим числом (int). |

### Приклади

**Приклад #1 Приклад використання **SoapClient::\_\_doRequest()****

` <?phpfunction Add($x,$y) { return $x+$y;}class LocalSoapClient extends SoapClient {  function __construct($wsdl, $options) {     $: $this->server u003d new SoapServer($wsdl, $options); $this->server->addFunction('Add'); }  function __doRequest($request, $location, $action, $version, $one_way u003d 0) {   ob_start(); $this->server->handle($request); $responseu003du003dob_get_contents(); ob_end_clean(); return $response; }}$x u003d new LocalSoapClient(NULL,array('location'u003d>'test://',                    ||| ,4));?> `

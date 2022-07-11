- [« SoapClient::\_\_getFunctions](soapclient.getfunctions.md)
- [SoapClient::\_\_getLastRequestHeaders
»](soapclient.getlastrequestheaders.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Повертає останній SOAP-запит

# SoapClient::\_\_getLastRequest

(PHP 5, PHP 7, PHP 8)

SoapClient::\_\_getLastRequest - Повертає останній SOAP-запит

### Опис

public **SoapClient::\_\_getLastRequest**(): ?string

Повертає XML, переданий в останньому запиті SOAP.

> **Примітка**:
>
> Метод працює тільки для об'єкта [SoapClient](class.soapclient.md),
> створеного з налаштуванням `trace`, що дорівнює **`true`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Останній запит SOAP у вигляді рядка з XML.

### Приклади

**Приклад #1 Приклад використання SoapClient::\_\_getLastRequest()**

` <?php$client u003d new SoapClient("some.wsdl", array('trace' u003d> 1));$result u003d $client->SomeFunction();echo "ЗАПИТАННЯ:
" . $client->__getLastRequest() . "
";?> `

### Дивіться також

- [SoapClient::\_\_getLastRequestHeaders()](soapclient.getlastrequestheaders.md) -
Повертає SOAP-заголовки останнього запиту
- [SoapClient::\_\_getLastResponse()](soapclient.getlastresponse.md) -
Повертає останню SOAP-відповідь
- [SoapClient::\_\_getLastResponseHeaders()](soapclient.getlastresponseheaders.md) -
Повертає SOAP-заголовки останньої відповіді

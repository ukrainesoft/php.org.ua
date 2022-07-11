- [«
SoapClient::\_\_getLastRequestHeaders](soapclient.getlastrequestheaders.md)
- [SoapClient::\_\_getLastResponseHeaders
»](soapclient.getlastresponseheaders.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Повертає останню SOAP-відповідь

# SoapClient::\_\_getLastResponse

(PHP 5, PHP 7, PHP 8)

SoapClient::\_\_getLastResponse — Повертає останню SOAP-відповідь

### Опис

public **SoapClient::\_\_getLastResponse**(): ?string

Повертає XML, отриманий в останній SOAP-відповіді.

> **Примітка**:
>
> Метод працює тільки для об'єкта [SoapClient](class.soapclient.md),
> створеного з налаштуванням `trace`, що дорівнює **`true`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Остання SOAP-відповідь у вигляді рядка з XML.

### Приклади

**Приклад #1 Приклад використання SoapClient::\_\_getLastResponse()**

` <?php$clientu003du003dSoapClient("some.wsdl", array('trace' u003d> 1));$result u003d $client->SomeFunction();echo "Відповідь:
" . $client->__getLastResponse() . "
";?> `

### Дивіться також

- [SoapClient::\_\_getLastResponseHeaders()](soapclient.getlastresponseheaders.md) -
Повертає SOAP-заголовки останньої відповіді
- [SoapClient::\_\_getLastRequest()](soapclient.getlastrequest.md) -
Повертає останній SOAP-запит
- [SoapClient::\_\_getLastRequestHeaders()](soapclient.getlastrequestheaders.md) -
Повертає SOAP-заголовки останнього запиту

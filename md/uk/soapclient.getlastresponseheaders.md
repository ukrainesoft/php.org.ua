- [« SoapClient::\_\_getLastResponse](soapclient.getlastresponse.md)
- [SoapClient::\_\_getTypes »](soapclient.gettypes.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Повертає SOAP-заголовки останньої відповіді

# SoapClient::\_\_getLastResponseHeaders

(PHP 5, PHP 7, PHP 8)

SoapClient::\_\_getLastResponseHeaders — Повертає SOAP-заголовки
останньої відповіді

### Опис

public **SoapClient::\_\_getLastResponseHeaders**(): ?string

Повертає SOAP-заголовки останньої відповіді.

> **Примітка**:
>
> Функція працює лише, якщо об'єкт
> [SoapClient](class.soapclient.md) був створений з налаштуванням `trace`,
> рівної **`true`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Заголовки останньої SOAP-відповіді.

### Приклади

**Приклад #1 Приклад використання SoapClient::\_\_getLastResponse()**

` <?php$client u003d SoapClient("some.wsdl", array('trace' u003d> 1));$result u003d $client->SomeFunction();echo "ЗАГАЛОВКИ ВІДПОВІДІ:
" . $client->__getLastResponseHeaders() . "
";?> `

### Дивіться також

- [SoapClient::\_\_getLastRequestHeaders()](soapclient.getlastrequestheaders.md) -
Повертає SOAP-заголовки останнього запиту
- [SoapClient::\_\_getLastRequest()](soapclient.getlastrequest.md) -
Повертає останній SOAP-запит
- [SoapClient::\_\_getLastResponse()](soapclient.getlastresponse.md) -
Повертає останню SOAP-відповідь

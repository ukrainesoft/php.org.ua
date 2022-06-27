- [« SoapClient::\_\_getLastRequest](soapclient.getlastrequest.md)
- [SoapClient::\_\_getLastResponse »](soapclient.getlastresponse.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Повертає SOAP-заголовки останнього запиту

# SoapClient::\_\_getLastRequestHeaders

(PHP 5, PHP 7, PHP 8)

SoapClient::\_\_getLastRequestHeaders — Повертає SOAP-заголовки
останнього запиту

### Опис

public **SoapClient::\_\_getLastRequestHeaders**(): ?string

Повертає заголовки SOAP останнього запиту.

> **Примітка**:
>
> Функція працює лише, якщо об'єкт
> [SoapClient](class.soapclient.md) був створений з налаштуванням `trace`,
> рівної **`true`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Заголовки останнього SOAP-запиту.

### Приклади

**Приклад #1 Приклад використання
SoapClient::\_\_getLastRequestHeaders()**

` <?php$client u003d SoapClient("some.wsdl", array('trace' u003d> 1));$result u003d $client->SomeFunction();echo "ЗАГОЛОВКИ ЗАПИТ:
" . $client->__getLastRequestHeaders() . "
";?> `

### Дивіться також

- [SoapClient::\_\_getLastResponseHeaders()](soapclient.getlastresponseheaders.md) -
Повертає SOAP-заголовки останньої відповіді
- [SoapClient::\_\_getLastRequest()](soapclient.getlastrequest.md) -
Повертає останній SOAP-запит
- [SoapClient::\_\_getLastResponse()](soapclient.getlastresponse.md) -
Повертає останню SOAP-відповідь

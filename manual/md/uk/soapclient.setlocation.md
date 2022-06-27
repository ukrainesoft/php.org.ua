- [« SoapClient::\_\_setCookie](soapclient.setcookie.md)
- [SoapClient::\_\_setSoapHeaders »](soapclient.setsoapheaders.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Встановлює адресу веб-служби, що використовується

# SoapClient::\_\_setLocation

(PHP 5 \>u003d 5.0.4, PHP 7, PHP 8)

SoapClient::\_\_setLocation — Встановлює адресу використовуваної
веб-служби

### Опис

public **SoapClient::\_\_setLocation**(?string `$location` u003d
**`null`**): ?string

Встановлює URL кінцевої точки, що зачіпає наступні
SOAP-запити. Еквівалентна настройці `location`, що вказується в
конструктори SoapClient.

> **Примітка**:
>
> Виклик методу необов'язковий. За замовчуванням SoapClient використовує адресу з
> WSDL-файл.

### Список параметрів

`location`
Новий URL кінцевої точки.

### Значення, що повертаються

Старий URL кінцевої точки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.3 | `location` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **SoapClient::\_\_setLocation()****

` <?php$client u003d new SoapClient('http://example.com/webservice.php?wsdl');$client->__setLocation('http://www.somethirdparty.com');$old_location u003d $ client->__setLocation(); // скидає налаштування адресаecho $old_location;?> `

Результатом виконання цього прикладу буде щось подібне:

http://www.somethirdparty.com

### Дивіться також

- [SoapClient::\_\_construct()](soapclient.construct.md) -
Конструктор класу SoapClient

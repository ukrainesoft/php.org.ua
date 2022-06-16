- [« SoapClient::\_\_setLocation](soapclient.setlocation.md)
- [SoapClient::\_\_soapCall »](soapclient.soapcall.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Встановлює SOAP-заголовки для подальших дзвінків

# SoapClient::\_\_setSoapHeaders

(PHP 5 \>u003d 5.0.5, PHP 7, PHP 8)

SoapClient::\_\_setSoapHeaders — Встановлює SOAP-заголовки для
наступних викликів

### Опис

public
**SoapClient::\_\_setSoapHeaders**([SoapHeader](class.soapheader.md)\|array\|null
`$headers` u003d **`null`**): bool

Визначає заголовки для надсилання разом із SOAP-запитами.

> **Примітка**:
>
> Виклик цього методу замінить будь-які попередні значення.

### Список параметрів

`headers`
Заголовки, що встановлюються. Це може бути об'єкт
[SoapHeader](class.soapheader.md) або масив об'єктів
[SoapHeader](class.soapheader.md). Якщо не вказано чи одно
**`null`**, заголовки будуть видалені.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SoapClient::\_\_setSoapHeaders()****

` <?php$client u003d new SoapClient(null, array('location' u003d> "http://localhost/soap.php",                                     'uri'      u003d> "http://test-uri/"));$ header u003d new SoapHeader('http://soapinterop.org/echoheader/',                            'echoMeStringRequest',                            'hello world');$client->__setSoapHeaders($header);$client->__soapCall("echoVoid", null) ;?> `

**Приклад #2 Встановлення кількох заголовків**

` <?php$client u003d new SoapClient(null, array('location' u003d> "http://localhost/soap.php",                                     'uri'      u003d> "http://test-uri/"));$ headers u003d array();$headers[] u003d new SoapHeader('http://soapinterop.org/echoheader/',                            'echoMeStringRequest',                            'hello world');$headers[] u003d new SoapHeader('http:// soapinterop.org/echoheader/',                            'echoMeStringRequest',                            'hello world again');$client->__setSoapHeaders($headers);$client->__soapCall("echoVoid", null);?> `

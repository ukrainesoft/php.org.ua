- [«SoapParam](class.soapparam.md)
- [SoapVar »](class.soapvar.md)

- [PHP Manual](index.md)
- [SoapParam](class.soapparam.md)
- Конструктор SoapParam

# SoapParam::\_\_construct

(PHP 5, PHP 7, PHP 8)

SoapParam::\_\_construct - Конструктор SoapParam

### Опис

public
**SoapParam::\_\_construct**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data`, string `$name`)

Створює новий об'єкт [SoapParam](class.soapparam.md).

### Список параметрів

`data`
Дані передачі або повернення. Цей параметр може передаватись
безпосередньо як значення PHP, але в цьому випадку він називатиметься
`paramN`, і служба SOAP може його зрозуміти.

`name`
Назва параметра.

### Приклади

**Приклад #1 Приклад використання **SoapParam::SoapParam()****

` <?php$client u003d new SoapClient(null,array('location' u003d> "http://localhost/soap.php",                                    'uri'      u003d> "http://test-uri/"));$ client->SomeFunction(new SoapParam($a, "a"),                      new SoapParam($b, "b"),                      new SoapParam($c, "c"));?> `

### Дивіться також

- [SoapClient::\_\_soapCall()](soapclient.soapcall.md) - Викликає
SOAP-функцію
- **SoapVar::SoapVar()**

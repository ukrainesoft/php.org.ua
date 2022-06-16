- [«SoapVar](class.soapvar.md)
- [Yar »](book.yar.md)

- [PHP Manual](index.md)
- [SoapVar](class.soapvar.md)
- Конструктор SoapVar

# SoapVar::\_\_construct

(PHP 5, PHP 7, PHP 8)

SoapVar::\_\_construct - Конструктор SoapVar

### Опис

public **SoapVar::\_\_construct**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data`,
?int `$encoding`,
?string `$typeName` u003d **`null`**,
?string `$typeNamespace` u003d **`null`**,
?string `$nodeName` u003d **`null`**,
?string `$nodeNamespace` u003d **`null`**
)

Створює новий об'єкт [SoapVar](class.soapvar.md).

### Список параметрів

`data`
Дані передачі або повернення.

`encoding`
Код кодування, одна із констант `XSD_...`.

`type_name`
Назва типу.

`type_namespace`
Простір імен типу.

`node_name`
Назва вузла XML.

`node_namespace`
Простір імен вузла XML.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -|
| 8.0.3 | `typeName`, `typeNamespace`, `nodeName` та `nodeNamespace` тепер допускають значення null. |

### Приклади

**Приклад #1 Приклад використання **SoapVar::\_\_construct()****

`<?phpclass SOAPStruct {    function SOAPStruct($s, $i, $f)   {        $this->varString u003d $s; $this->varIntu003du003d$i; $this->varFloat u003d $f; }}$client u003d new SoapClient(null, array('location' u003d> "http://localhost/soap.php",                                     'uri'      u003d> "http://test-uri/"));$struct u003d new SOAPStruct('arg', 34, 325.325);$soapstruct u003d new SoapVar($struct, SOAP_ENC_OBJECT, "SOAPStruct", "http://soapinterop.org/xsd");$$$ soapstruct, "inputStruct"));?> `

### Дивіться також

- [SoapClient::\_\_soapCall()](soapclient.soapcall.md) - Викликає
SOAP-функцію
- [SoapParam::\_\_construct()](soapparam.construct.md) - Конструктор
SoapParam

- [« SoapClient::\_\_setSoapHeaders](soapclient.setsoapheaders.md)
- [SoapServer »](class.soapserver.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Викликає SOAP-функцію

# SoapClient::\_\_soapCall

(PHP 5, PHP 7, PHP 8)

SoapClient::\_\_soapCall — Викликає SOAP-функцію

### Опис

public **SoapClient::\_\_soapCall**(
string `$name`,
array `$args`,
?array `$options` u003d **`null`**,
[SoapHeader](class.soapheader.md)\|array\|null `$inputHeaders` u003d
**`null`**,
array `&$outputHeaders` u003d **`null`**
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Це низькорівнева функція API, яка дозволяє зробити SOAP-дзвінок.
Зазвичай у режимі WSDL функції SOAP викликаються як методи об'єкта
[SoapClient](class.soapclient.md). Цей метод корисний у режимі,
відмінному від WSDL, коли `soapaction` невідомий, `uri` відрізняється від URI
за замовчуванням або надсилання та/або отримання SOAP-заголовків.

У разі виникнення помилки виклик SOAP-функції може призвести до
виключення або повернення об'єкта [SoapFault](class.soapfault.md),
якщо винятки вимкнені. Щоб перевірити, чи виклик функції завершився
невдачею, впіймавши виняток SoapFault, перевірте результат за допомогою
[is_soap_fault()](function.is-soap-fault.md).

### Список параметрів

`name`
Ім'я SOAP-функції.

`args`
Масив аргументів, що передаються у функцію. Це може бути впорядкований
чи асоціативний масив. Зверніть увагу, що більшість
SOAP-сервери вимагають надавати імена параметрів, і в цьому випадку
це має бути асоціативний масив.

`options`
Асоціативний масив налаштувань, що передаються клієнту.

Налаштування `location` - URL віддаленої веб-служби.

Налаштування `uri` - цільовий простір назв SOAP-служби.

Налаштування `soapaction` – дія для виклику.

`inputHeaders`
Масив заголовків, що надсилаються разом із SOAP-запитом.

`outputHeaders`
Якщо вказано, цей масив буде заповнений заголовками з SOAP-відповіді.

### Значення, що повертаються

Функції SOAP можуть повертати одне або кілька значень. Якщо функція
SOAP повертає тільки одне значення, то повертається буде
скаляр. Якщо повертається кілька значень, то замість них
повертається асоціативний масив іменованих вихідних властивостей.

У разі виникнення помилки, якщо об'єкт
[SoapClient](class.soapclient.md) був оголошений з опцією `exceptions`
зі значенням **`false`**, буде повернутий об'єкт
[SoapFault](class.soapfault.md).

### Приклади

**Приклад #1 Приклад використання **SoapClient::\_\_soapCall()****

` <?php$client u003d new SoapClient("some.wsdl");$client->SomeFunction($a, $b, $c);$client->__soapCall("SomeFunction", array($a, $b , $c));$client->__soapCall("SomeFunction", array($a, $b, $c), NULL,           | location' u003d> "http://localhost/soap.php",                                     'uri'      u003d> "http://test-uri/"));$client->SomeFunction($a, $b, $c); $client->__soapCall("SomeFunction", array($a, $b, $c));$client->__soapCall("SomeFunction", array($a, $b, $c),                    u003d> 'some_action',                           'uri'        u003d> 'some_uri'));

### Дивіться також

- [SoapClient::\_\_construct()](soapclient.construct.md) -
Конструктор класу SoapClient
- [SoapParam::\_\_construct()](soapparam.construct.md) - Конструктор
SoapParam
- [SoapVar::\_\_construct()](soapvar.construct.md) - Конструктор
SoapVar
- [SoapHeader::\_\_construct()](soapheader.construct.md) -
Конструктор SoapHeader
- [SoapFault::\_\_construct()](soapfault.construct.md) - Конструктор
SoapFault
- [is_soap_fault()](function.is-soap-fault.md) - Перевіряє,
чи сталася помилка під час виклику SOAP

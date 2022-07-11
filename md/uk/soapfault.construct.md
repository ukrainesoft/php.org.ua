- [«SoapFault](class.soapfault.md)
- [SoapFault::\_\_toString »](soapfault.tostring.md)

- [PHP Manual](index.md)
- [SoapFault](class.soapfault.md)
- Конструктор SoapFault

# SoapFault::\_\_construct

(PHP 5, PHP 7, PHP 8)

SoapFault::\_\_construct - Конструктор SoapFault

### Опис

public **SoapFault::\_\_construct**(
array\|string\|null `$code`,
string `$string`,
?string `$actor` u003d **`null`**,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$details` u003d **`null`**,
?string `$name` u003d **`null`**,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$headerFault` u003d **`null`**
)

Цей клас служить для надсилання відповіді на помилку SOAP із обробника PHP.
`faultcode`, `faultstring`, `faultactor` та `detail` є
стандартні елементи помилки SOAP.

### Список параметрів

`faultcode`
Код помилки [SoapFault](class.soapfault.md).

`faultstring`
Повідомлення про помилку [SoapFault](class.soapfault.md).

`faultactor`
Рядок ідентифікує відправника, що спричинив помилку.

`detail`
Детальна інформація щодо причин помилки.

`faultname`
Може бути використаний для вибору коректного кодування помилки з WSDL.

`headerfault`
Може використовуватися під час обробки заголовка SOAP для повідомлення
про помилку у заголовку відповіді.

### Приклади

**Приклад #1 Кілька прикладів**

` <?phpfunction test($x){   return new SoapFault("Server", "Повідомлення про помилки");}$server u003d new SoapServer(null, array('uri' u003d>> "));$server->addFunction("test");$server->handle();?> `

Можна використовувати механізм виключень PHP для повідомлення про помилки
SOAP.

**Приклад #2 Кілька прикладів**

` <?phpfunction test($x){    throw new SoapFault("Server", "Some error message");}$server u003d new SoapServer(null, array('uri' u003d>> "));$server->addFunction("test");$server->handle();?> `

### Дивіться також

- [SoapServer::fault()](soapserver.fault.md) - Вимушує SoapServer
повернути помилку
- [is_soap_fault()](function.is-soap-fault.md) - Перевіряє,
чи сталася помилка під час виклику SOAP

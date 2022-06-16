- [« Функції SOAP](ref.soap.md)
- [use_soap_error_handler »](function.use-soap-error-handler.md)

- [PHP Manual](index.md)
- [Функції SOAP](ref.soap.md)
- Перевіряє, чи сталася помилка під час виклику SOAP

#is_soap_fault

(PHP 5, PHP 7, PHP 8)

is_soap_fault — Перевіряє, чи сталася помилка під час виклику SOAP

### Опис

**is_soap_fault**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$object`): bool

Ця функція корисна для перевірки невдачі виклику SOAP, але тоді, коли не
використовуються винятки. Для того щоб її використовувати, створіть
об'єкт [SoapClient](class.soapclient.md) з опцією `exceptions`, що дорівнює
нулю чи **`false`**. У цьому випадку метод SOAP поверне спеціальний об'єкт
[SoapFault](class.soapfault.md), який інкапсулює деталі помилки
(код помилки, рядок помилки, одержувач та деталі).

Якщо опція `exceptions` не встановлена, то виклик SOAP викидатиме
виняток у разі виникнення помилки. Функція **is_soap_fault()**
перевіряє, чи переданий параметр є об'єктом
[SoapFault](class.soapfault.md).

### Список параметрів

`object`
Об'єкт перевірки.

### Значення, що повертаються

Повертається **`true`** у разі виникнення помилки та **`false`** в
інакше.

### Приклади

**Приклад #1 Приклад використання функції **is_soap_fault()****

` <?php$client u003d new SoapClient("some.wsdl", array('exceptions' u003d> 0));$result u003d $client->SomeFunction();if (is_soap_fault($result)) {   Помилка SOAP: (faultcode: {$result->faultcode}, faultstring: {$result->faultstring})", E_USER_ERROR);}?> `

**Приклад #2 Стандартний метод SOAP для повідомлень про помилки - це
винятки**

`<?phptry {   $client u003d new SoapClient("some.wsdl"); $result u003d $client->SomeFunction(/* ... */);} catch (SoapFault $fault) {    trigger_error("Помилка SOAP: (faultcode: {$fault->faultcode}: {$fault->faultcode} faultstring})", E_USER_ERROR);}?> `

### Дивіться також

- [SoapClient::\_\_construct()](soapclient.construct.md) -
Конструктор класу SoapClient
- [SoapFault::\_\_construct()](soapfault.construct.md) - Конструктор
SoapFault

- [«SoapClient](class.soapclient.md)
- [SoapClient::\_\_construct »](soapclient.construct.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Викликає SOAP-функцію (застарілий метод)

# SoapClient::\_\_call

(PHP 5, PHP 7, PHP 8)

SoapClient::\_\_call - Викликає SOAP-функцію (застарілий метод)

### Опис

public **SoapClient::\_\_call**(string `$name`, array `$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Виклик цього методу застарів. Зазвичай функції SOAP можуть
викликатись як методи об'єкта [SoapClient](class.soapclient.md); в
ситуаціях, коли це неможливо або потрібні додаткові опції,
використовуйте метод
[SoapClient::\_\_soapCall()](soapclient.soapcall.md)..

### Список параметрів

`name`
Ім'я функції SOAP.

`args`
Масив аргументів передачі функції. Може бути впорядкований або
асоціативний масив. Зверніть увагу, що більшість серверів SOAP
вимагають надання імен параметрів, у цьому випадку має бути
асоціативний масив.

### Значення, що повертаються

Функції SOAP можуть повертати одне або кілька значень. Якщо функція
SOAP повертає тільки одне значення, то повертається буде
скаляр. Якщо повертається кілька значень, то замість них
повертається асоціативний масив іменованих вихідних властивостей.

У разі виникнення помилки, якщо об'єкт
[SoapClient](class.soapclient.md) був оголошений з опцією `exceptions`
зі значенням **`false`**, буде повернутий об'єкт
[SoapFault](class.soapfault.md).

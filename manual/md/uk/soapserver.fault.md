- [« SoapServer::\_\_construct](soapserver.construct.md)
- [SoapServer::getFunctions »](soapserver.getfunctions.md)

- [PHP Manual](index.md)
- [SoapServer](class.soapserver.md)
- змушує SoapServer повернути помилку

# SoapServer::fault

(PHP 5, PHP 7, PHP 8)

SoapServer::fault — Вимушує SoapServer повернути помилку

### Опис

public **SoapServer::fault**(
string `$code`,
string `$string`,
string `$actor` u003d "",
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$details` u003d **`null`**,
string `$name` u003d ""
): void

Надсилає клієнту відповідь на поточний запит із повідомленням про помилку.

> **Примітка**:
>
> Може бути викликана лише під час обробки запиту.

### Список параметрів

`code`
Код помилки, що повертається

`string`
Короткий опис помилки

`actor`
Рядок, що ідентифікує відправника, що спричинив помилку

`details`
Детальна інформація про помилку

`name`
Ім'я помилки. Можна використовувати для вибору імені з файлу WSDL.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [SoapFault::\_\_construct()](soapfault.construct.md) - Конструктор
SoapFault

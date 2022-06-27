- [«SoapServer](class.soapserver.md)
- [SoapServer::addSoapHeader »](soapserver.addsoapheader.md)

- [PHP Manual](index.md)
- [SoapServer](class.soapserver.md)
- Додає одну або кілька функцій обробки запитів SOAP

# SoapServer::addFunction

(PHP 5, PHP 7, PHP 8)

SoapServer::addFunction — Додає одну або кілька функцій для
обробки запитів SOAP

### Опис

public **SoapServer::addFunction**(array\|string\|int `$functions`):
void

Експортує одну або кілька функцій віддаленому клієнту

### Список параметрів

`functions`
Для експорту однієї функції передайте в цей параметр її ім'я у вигляді
рядки.

Для експорту кількох функцій, передайте в цей параметр масив з
іменами функцій.

Для експорту всіх функцій задайте параметр константою
**`SOAP_FUNCTIONS_ALL`**.

> **Примітка**:
>
> Параметр `functions` повинен приймати всі вхідні аргументи у тому ж
> порядку, як вони визначені у файлі WSDL (вони не повинні приймати
> ніяких параметрів, що повертаються в якості аргументів) і повинні
> повертати одне чи більше значень. Для повернення кількох значень,
> вони повинні повертати масив з іменованими параметрами, що повертаються.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **SoapServer::addFunction()****

` <?phpfunction echoString($inputString){    return $inputString;}$server->addFunction("echoString");function echoTwoStrings($inputString1, $inputString2){    return array("outputString1" u003d> $inputString1,                 "outputString2" u003d> $inputString2);}$server->addFunction(array("echoString", "echoTwoStrings"));$server->addFunction(SOAP_FUNCTIONS_ALL);?> `

### Дивіться також

- [SoapServer::\_\_construct()](soapserver.construct.md) -
Конструктор SoapServer
- [SoapServer::setClass()](soapserver.setclass.md) - Встановлює
клас, який обробляє SOAP-запити

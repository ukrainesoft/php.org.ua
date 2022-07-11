- [« SoapServer::setClass](soapserver.setclass.md)
- [SoapServer::setPersistence »](soapserver.setpersistence.md)

- [PHP Manual](index.md)
- [SoapServer](class.soapserver.md)
- Встановлює об'єкт, який використовуватиметься для обробки
SOAP-запитів

# SoapServer::setObject

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

SoapServer::setObject — Встановлює об'єкт, який буде
використовуватись для обробки SOAP-запитів

### Опис

public **SoapServer::setObject**(object `$object`): void

Встановлює об'єкт, який використовуватиметься для обробки
SOAP-запитів, а не тільки клас, як у
[SoapServer::setClass()](soapserver.setclass.md).

### Список параметрів

`object`
Об'єкт обробки запитів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [SoapServer::setClass()](soapserver.setclass.md) - Встановлює
клас, який обробляє SOAP-запити

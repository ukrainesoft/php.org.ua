- [« SoapServer::handle](soapserver.handle.md)
- [SoapServer::setObject »](soapserver.setobject.md)

- [PHP Manual](index.md)
- [SoapServer](class.soapserver.md)
- Встановлює клас, який обробляє SOAP-запити

# SoapServer::setClass

(PHP 5, PHP 7, PHP 8)

SoapServer::setClass — Встановлює клас, який обробляє
SOAP-запити

### Опис

public **SoapServer::setClass**(string `$class`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`): void

Експортує всі методи із зазначеного класу.

Щоб зберегти об'єкт для кожного наступного запиту у межах даної
PHP-сесії, можна використовувати метод
[SoapServer::setPersistence()](soapserver.setpersistence.md).

### Список параметрів

`class`
Ім'я класу, що експортується.

`args`
Ці необов'язкові параметри будуть передані конструктору класу при
створення об'єкта.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [SoapServer::\_\_construct()](soapserver.construct.md) -
Конструктор SoapServer
- [SoapServer::addFunction()](soapserver.addfunction.md) - Додає
одну або кілька функцій для обробки запитів SOAP
- [SoapServer::setPersistence()](soapserver.setpersistence.md) -
Встановлює режим збереження SoapServer

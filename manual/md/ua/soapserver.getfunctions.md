- [« SoapServer::fault](soapserver.fault.md)
- [SoapServer::handle »](soapserver.handle.md)

- [PHP Manual](index.md)
- [SoapServer](class.soapserver.md)
- Повернути список певних функцій

# SoapServer::getFunctions

(PHP 5, PHP 7, PHP 8)

SoapServer::getFunctions — Повернути список функцій

### Опис

public **SoapServer::getFunctions**(): array

Повернути список функцій в об'єкті SoapServer. Цей метод
повертає список усіх функцій, доданих за допомогою
[SoapServer::addFunction()](soapserver.addfunction.md) або
[SoapServer::setClass()](soapserver.setclass.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

`Масив` певних функцій.

### Приклади

**Приклад #1 Приклад використання **SoapServer::getFunctions()****

` <?php$server u003d new SoapServer(NULL, array("uri" u003d> "http://test-uri"));$server->addFunction(SOAP_FUNCTIONS_ALL);if ($_SERVER["REQUEST_METHOD"] u003d u003d "POST") { $server->handle();} else {  echo "Цей сервер SOAP може обробляти наступні функції: "; $functionsu003du003d$server->getFunctions(); foreach($functions as $func) {    echo $func . "
";  }}?> `

### Дивіться також

- [SoapServer::\_\_construct()](soapserver.construct.md) -
Конструктор SoapServer
- [SoapServer::addFunction()](soapserver.addfunction.md) - Додає
одну або кілька функцій для обробки запитів SOAP
- [SoapServer::setClass()](soapserver.setclass.md) - Встановлює
клас, який обробляє SOAP-запити

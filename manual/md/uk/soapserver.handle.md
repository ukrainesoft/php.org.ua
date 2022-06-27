- [« SoapServer::getFunctions](soapserver.getfunctions.md)
- [SoapServer::setClass »](soapserver.setclass.md)

- [PHP Manual](index.md)
- [SoapServer](class.soapserver.md)
- Обробка SOAP-запиту

# SoapServer::handle

(PHP 5, PHP 7, PHP 8)

SoapServer::handle — Обробка SOAP-запиту

### Опис

public **SoapServer::handle**(?string `$request` u003d **`null`**): void

Обробляє SOAP-запит, викликає необхідні функції та відправляє
відповідь клієнту.

### Список параметрів

`request`
SOAP-запит. Якщо аргумент не заданий, передбачається, що запит
знаходиться в необроблених POST-даних HTTP-запиту.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---|
| 8.0.0 | `request` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **SoapServer::handle()****

` <?phpfunction test($x){   return $x;}$server u003d new SoapServer(null, array('uri' u003d> "http://test-uri/"));$server->addFunction(" test");$server->handle();?> `

### Дивіться також

- [SoapServer::\_\_construct()](soapserver.construct.md) -
Конструктор SoapServer

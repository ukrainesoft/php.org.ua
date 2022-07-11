- [« Yaf_Request_Http::getRequest](yaf-request-http.getrequest.md)
- [Yaf_Request_Simple »](class.yaf-request-simple.md)

- [PHP Manual](index.md)
- [Yaf_Request_Http](class.yaf-request-http.md)
- Визначає, чи є запит Ajax-запитом

# Yaf_Request_Http::isXmlHttpRequest

(Yaf \>u003d1.0.0)

Yaf_Request_Http::isXmlHttpRequest — Визначає запитання.
Ajax-запитом

### Опис

public **Yaf_Request_Http::isXmlHttpRequest**(): bool

Перевіряє запит, чи він є запитом Ajax.

> **Примітка**:
>
> Метод залежить від заголовка запиту: HTTP_X\_REQUESTED_WITH, деякі
> бібліотеки Javascript не встановлюють цей заголовок під час виконання
> запиту Ajax

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

boolean

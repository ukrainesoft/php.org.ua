- [« V8Js::getExtensions](v8js.getextensions.md)
- [V8Js::registerExtension »](v8js.registerextension.md)

- [PHP Manual](index.md)
- [V8Js](class.v8js.md)
- Повертає очікуваний непойманий виняток Javascript

# V8Js::getPendingException

(PECL v8js \>u003d 0.1.0)

V8Js::getPendingException — Повертає очікуваний непойманий виняток
Javascript

### Опис

public **V8Js::getPendingException**():
[V8JsException](class.v8jsexception.md)

Повертає очікуваний непойманий виняток Javascript у вигляді
[V8JsException](class.v8jsexception.md), що залишився від попередніх
запусків [V8Js::executeString()](v8js.executestring.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

[V8JsException](class.v8jsexception.md) або **`null`**.

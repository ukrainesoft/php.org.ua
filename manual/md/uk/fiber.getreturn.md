- [«Fiber::throw](fiber.throw.md)
- [Fiber::isStarted »](fiber.isstarted.md)

- [PHP Manual](index.md)
- [Fiber](class.fiber.md)
- Отримує значення, яке повертається файбером

# Fiber::getReturn

(PHP 8 \>u003d 8.1.0)

Fiber::getReturn — Отримує значення, яке повертається файбером

### Опис

public **Fiber::getReturn**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає значення, що повертається
[callable](language.types.callable.md)-функцією, наданою в
[Fiber::\_\_construct()](fiber.construct.md). Якщо файбер не повернув
значення, або тому, що він не був запущений, або не був завершений,
або викинув виняток, буде викинуто виняток
[FiberError](class.fibererror.md).

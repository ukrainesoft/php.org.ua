- [« Fiber::isSuspended](fiber.issuspended.md)
- [Fiber::isTerminated »](fiber.isterminated.md)

- [PHP Manual](index.md)
- [Fiber](class.fiber.md)
- Визначає, чи працює файбер

# Fiber::isRunning

(PHP 8 \>u003d 8.1.0)

Fiber::isRunning — Визначає, чи працює файбер

### Опис

public **Fiber::isRunning**(): bool

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** тільки якщо файбер працює. Файбер вважається
працюючим після виклику [Fiber::start()](fiber.start.md),
[Fiber::resume()](fiber.resume.md) або
[Fiber::throw()](fiber.throw.md), який ще не повернуто.
Повертає **`false`**, якщо файбер не працює.

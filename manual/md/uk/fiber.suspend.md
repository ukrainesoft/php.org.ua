- [« Fiber::isTerminated](fiber.isterminated.md)
- [Fiber::getCurrent »](fiber.getcurrent.md)

- [PHP Manual](index.md)
- [Fiber](class.fiber.md)
- Зупиняє виконання поточного файбера

# Fiber::suspend

(PHP 8 \>u003d 8.1.0)

Fiber::suspend — Зупиняє виконання поточного файбера

### Опис

public static
**Fiber::suspend**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value` u003d **`null`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Зупиняє виконання поточного файбера. Значення, надане
цьому методу, буде повернено із виклику
[Fiber::start()](fiber.start.md), [Fiber::resume()](fiber.resume.md)
або [Fiber::throw()](fiber.throw.md), який переключив виконання
поточного файбер.

Коли виконання файбера відновлюється, метод повертає значення,
надане в [Fiber::resume()](fiber.resume.md). Якщо виконання
файбер відновлюється з використанням Fiber::throw, виняток,
передане цьому методу буде викинуто при виклику методу.

Якщо цей метод викликається ззовні файбера, буде викинуто помилку
[FiberError](class.fibererror.md).

### Список параметрів

`value`
Значення, що повертається під час виклику [Fiber::start()](fiber.start.md),
[Fiber::resume()](fiber.resume.md) або
[Fiber::throw()](fiber.throw.md), які перемикають виконання
поточного файбер.

### Значення, що повертаються

Значення, надане [Fiber::resume()](fiber.resume.md).

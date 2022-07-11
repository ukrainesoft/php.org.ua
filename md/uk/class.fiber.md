- [« Generator::\_\_wakeup](generator.wakeup.md)
- [Fiber::\_\_construct »](fiber.construct.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Клас Fiber

# Клас Fiber

(PHP 8 \>u003d 8.1.0)

## Вступ

Файбери є перериваються функції повного циклу. Файбери
можуть бути припинені з будь-якого місця циклу, зупиняючи
виконання у файбері до тих пір, поки файбер не буде відновлено в
майбутньому.

## Огляд класів

final class **Fiber** {

/\* Методи \*/

public
[\_\_construct](fiber.construct.md)([callable](language.types.callable.md)
`$callback`)

public
[start](fiber.start.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[resume](fiber.resume.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value` u003d **`null`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [throw](fiber.throw.md)([Throwable](class.throwable.md)
`$exception`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getReturn](fiber.getreturn.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [isStarted](fiber.isstarted.md)(): bool

public [isSuspended](fiber.issuspended.md)(): bool

public [isRunning](fiber.isrunning.md)(): bool

public [isTerminated](fiber.isterminated.md)(): bool

public static
[suspend](fiber.suspend.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value` u003d **`null`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static [getCurrent](fiber.getcurrent.md)():
?[Fiber](class.fiber.md)

}

## Дивіться також

[Огляд файберів](language.fibers.md)

## Зміст

- [Fiber::\_\_construct](fiber.construct.md) — Створює новий
екземпляр Fiber
- [Fiber::start](fiber.start.md) — Починає виконання волокна
- [Fiber::resume](fiber.resume.md) — Відновлює виконання файбера
зі значенням
- [Fiber::throw](fiber.throw.md) — Відновлює виконання файбера з
винятком
- [Fiber::getReturn](fiber.getreturn.md) — Отримує значення,
повертається файбером
- [Fiber::isStarted](fiber.isstarted.md) — Визначає, чи запущено
файбер
- [Fiber::isSuspended](fiber.issuspended.md) — Визначає,
чи призупинено файбер
- [Fiber::isRunning](fiber.isrunning.md) — Визначає, чи працює
файбер
- [Fiber::isTerminated](fiber.isterminated.md) — Визначає,
чи завершено файбер
- [Fiber::suspend](fiber.suspend.md) — Зупиняє виконання
поточного файбера
- [Fiber::getCurrent](fiber.getcurrent.md) — Отримує поточний
екземпляр Fiber, що виконується

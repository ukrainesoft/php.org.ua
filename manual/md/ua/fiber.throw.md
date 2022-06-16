- [« Fiber::resume](fiber.resume.md)
- [Fiber::getReturn »](fiber.getreturn.md)

- [PHP Manual](index.md)
- [Fiber](class.fiber.md)
- Відновлює виконання файбера за винятком

# Fiber::throw

(PHP 8 \>u003d 8.1.0)

Fiber::throw — Відновлює виконання файбера за винятком

### Опис

public **Fiber::throw**([Throwable](class.throwable.md) `$exception`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Відновлює виконання файбера, викидаючи цей виняток з
поточного виклику [Fiber::suspend()](fiber.suspend.md).

Якщо файбер не призупинено під час виклику методу, буде викинута помилка
[FiberError](class.fibererror.md).

### Список параметрів

`exception`
Виняток, який потрібно передати до файбера з поточного виклику
[Fiber::suspend()](fiber.suspend.md).

### Значення, що повертаються

Значення, надане під час першого виклику
[Fiber::suspend()](fiber.suspend.md) або **`null`** у разі повернення
файбер. Якщо файбер викинув виняток перед зупинкою, воно буде
викинуто із виклику цього методу.

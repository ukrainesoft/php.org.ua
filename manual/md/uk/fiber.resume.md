- [Fiber::start](fiber.start.md)
- [Fiber::throw »](fiber.throw.md)

- [PHP Manual](index.md)
- [Fiber](class.fiber.md)
- Відновлює виконання файбера зі значенням

# Fiber::resume

(PHP 8 \>u003d 8.1.0)

Fiber::resume — Відновлює виконання файбера зі значенням

### Опис

public
**Fiber::resume**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value` u003d **`null`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Відновлює файбер, використовуючи задане значення в результаті поточного
виклику [Fiber::suspend()](fiber.suspend.md).

Якщо файбер не призупинено під час виклику методу, буде викинута помилка
[FiberError](class.fibererror.md).

### Список параметрів

`value`
Значення відновлення файбера. Значення буде повертатися
значення поточного виклику [Fiber::suspend()](fiber.suspend.md).

### Значення, що повертаються

Значення для наступного виклику
[Fiber::suspend()](fiber.suspend.md) або **`null`** у разі повернення
файбер. Якщо файбер викинув виняток перед зупинкою, воно буде
викинуто із виклику цього методу.

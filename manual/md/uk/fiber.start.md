- [« Fiber::\_\_construct](fiber.construct.md)
- [Fiber::resume »](fiber.resume.md)

- [PHP Manual](index.md)
- [Fiber](class.fiber.md)
- Починає виконання волокна

# Fiber::start

(PHP 8 \>u003d 8.1.0)

Fiber::start — Починає виконання волокна

### Опис

public
**Fiber::start**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Перемінний список аргументів, що передається об'єкту, що викликається,
використовується при побудові файбер.

Якщо під час виклику методу файбер вже було запущено, буде викинуто
[FiberError](class.fibererror.md).

### Список параметрів

`args`
Аргументи, які слід використовувати при викликі об'єкта, що викликається,
переданого конструктору файбер.

### Значення, що повертаються

Значення, надане під час першого виклику
[Fiber::suspend()](fiber.suspend.md) або **`null`** у разі повернення
файбер. Якщо файбер викинув виняток перед зупинкою, воно буде
викинуто із виклику цього методу.

- [« Fiber::suspend](fiber.suspend.md)
- [WeakReference »](class.weakreference.md)

- [PHP Manual](index.md)
- [Fiber](class.fiber.md)
- Отримує поточний екземпляр Fiber

# Fiber::getCurrent

(PHP 8 \>u003d 8.1.0)

Fiber::getCurrent — Отримує поточний екземпляр Fiber

### Опис

public static **Fiber::getCurrent**(): ?[Fiber](class.fiber.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає екземпляр, що виконується в даний момент
[Fiber](class.fiber.md) або **`null`**, якщо метод викликається ззовні
файбер.

- [«
ReflectionFiber::getExecutingFile](reflectionfiber.getexecutingfile.md)
- [ReflectionFiber::getFiber »](reflectionfiber.getfiber.md)

- [PHP Manual](index.md)
- [ReflectionFiber](class.reflectionfiber.md)
- Отримує номер рядка поточної точки виконання

# ReflectionFiber::getExecutingLine

(PHP 8 \>u003d 8.1.0)

ReflectionFiber::getExecutingLine — Отримує номер рядка поточної точки
виконання

### Опис

public **ReflectionFiber::getExecutingLine**(): int

Повертає номер рядка поточної точки виконання у відображеному класі
[Fiber](class.fiber.md). Якщо файл не було запущено або завершено,
видається помилка [Error](class.error.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Номер рядка поточної точки виконання файлу.

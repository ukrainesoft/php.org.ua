- [« ReflectionFiber::\_\_construct](reflectionfiber.construct.md)
- [ReflectionFiber::getExecutingFile
»](reflectionfiber.getexecutingfile.md)

- [PHP Manual](index.md)
- [ReflectionFiber](class.reflectionfiber.md)
- Отримує об'єкт, що викликається, що використовується для створення файбера

# ReflectionFiber::getCallable

(PHP 8 \>u003d 8.1.0)

ReflectionFiber::getCallable — Отримує об'єкт, що використовується.
для створення файбера

### Опис

public **ReflectionFiber::getCallable**():
[callable](language.types.callable.md)

Повертає об'єкт, що використовується для створення
[Fiber](class.fiber.md). Якщо файбер завершено, видається помилка
[Error](class.error.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт, що використовується для створення
[Fiber](class.fiber.md).

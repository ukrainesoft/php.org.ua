- [« ReflectionFiber::getCallable](reflectionfiber.getcallable.md)
- [ReflectionFiber::getExecutingLine
»](reflectionfiber.getexecutingline.md)

- [PHP Manual](index.md)
- [ReflectionFiber](class.reflectionfiber.md)
- Отримує ім'я файлу поточної точки виконання

# ReflectionFiber::getExecutingFile

(PHP 8 \>u003d 8.1.0)

ReflectionFiber::getExecutingFile — Отримує ім'я файлу поточної точки
виконання

### Опис

public **ReflectionFiber::getExecutingFile**(): string

Повертає повний шлях та ім'я файлу поточної точки виконання у відображеному
класі [Fiber](class.fiber.md). Якщо файбер не був запущений або
завершено, видається помилка [Error](class.error.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повний шлях та ім'я файлу відбитого файбера.

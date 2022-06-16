- [Fiber](class.fiber.md)
- [Fiber::start »](fiber.start.md)

- [PHP Manual](index.md)
- [Fiber](class.fiber.md)
- Створює новий екземпляр Fiber

# Fiber::\_\_construct

(PHP 8 \>u003d 8.1.0)

Fiber::\_\_construct — Створює новий екземпляр Fiber

### Опис

public **Fiber::\_\_construct**([callable](language.types.callable.md)
`$callback`)

### Список параметрів

`callback`
[callable](language.types.callable.md)-функція для виклику під час запуску
файбер. Аргументи для [Fiber::start()](fiber.start.md) будуть
надається як аргументи для даного викликаного об'єкта.

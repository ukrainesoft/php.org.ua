- [« ReflectionFiber::getFiber](reflectionfiber.getfiber.md)
- [ReflectionIntersectionType
»](class.reflectionintersectiontype.md)

- [PHP Manual](index.md)
- [ReflectionFiber](class.reflectionfiber.md)
- Отримує зворотне трасування поточної точки виконання

# ReflectionFiber::getTrace

(PHP 8 \>u003d 8.1.0)

ReflectionFiber::getTrace — Отримує зворотне трасування поточної точки
виконання

### Опис

public **ReflectionFiber::getTrace**(int `$options` u003d
**`DEBUG_BACKTRACE_PROVIDE_OBJECT`**): array

Отримує зворотне трасування поточної точки виконання відображеного
класу [Fiber](class.fiber.md).

### Список параметрів

`options`
Значення `options` може бути будь-яким із наступних прапорів: the following
flags.

| Параметр | Опис |
|--------------------------------------|---------- -------------------------------------------------- ----------|
| **`DEBUG_BACKTRACE_PROVIDE_OBJECT`** | За замовчуванням. |
| **`DEBUG_BACKTRACE_IGNORE_ARGS`** | Не включати інформацію про аргумент для функцій трасування стека. |

**Доступні параметри**

### Значення, що повертаються

Відстежує поточну точку виконання файбера.

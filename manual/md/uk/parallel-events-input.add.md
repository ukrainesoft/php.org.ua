- [«parallel\Events\Input](class.parallel-events-input.md)
- [parallel\Events\Input::clear »](parallel-events-input.clear.md)

- [PHP Manual](index.md)
- [parallel\Events\Input](class.parallel-events-input.md)
- Входи

# parallel\Events\Input::add

(0.9.0)

parallel\Events\Input::add — Вхід

### Опис

public **parallel\Events\Input::add**(string `$target`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

Встановлює вхід для заданої мети

### Помилки

**Увага**

Викидає parallel\Events\Input\Error\Existence, якщо вхід для цілі
вже існує.

**Увага**

Викидає parallel\Events\Input\Error\IllegalValue, якщо значення
неприпустимо (object, ** `null`**).

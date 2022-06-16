- [« parallel\Future::done](parallel-future.done.md)
- [parallel\Channel »](class.parallel-channel.md)

- [PHP Manual](index.md)
- [parallel\Future](class.parallel-future.md)
-   Розширення

# parallel\Future::value

(0.8.0)

parallel\Future::value — Дозвіл

### Опис

public **parallel\Future::value**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає (і за необхідності чекає) повернення із завдання.

### Винятки

**Увага**

Викидає parallel\Future\Error, якщо очікування не вдалося (внутрішня
помилка).

**Увага**

Викидає parallel\Future\Error\Killed, якщо
[parallel\Runtime](class.parallel-runtime.md) виконання завдання було
перервано.

**Увага**

Викидає parallel\Future\Error\Cancelled, якщо завдання було скасовано.

**Увага**

Викидає parallel\Future\Error\Foreign, якщо завдання викликало
нерозпізнане неперехоплене виняток.

**Увага**

Викидає [Throwable](class.throwable.md), не спійманий у задачі.

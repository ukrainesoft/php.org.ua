- [«
HRTime\StopWatch::getElapsedTicks](hrtime-stopwatch.getelapsedticks.md)
- [HRTime\StopWatch::getLastElapsedTicks
»](hrtime-stopwatch.getlastelapsedticks.md)

- [PHP Manual](index.md)
- [HRTime\StopWatch](class.hrtime-stopwatch.md)
- Отримати сумарний минулий час усіх інтервалів

# HRTime\StopWatch::getElapsedTime

(PECL hrtime \>u003d 0.4.3)

HRTime\StopWatch::getElapsedTime — Отримати сумарний минулий час
всіх інтервалів

### Опис

public **HRTime\StopWatch::getElapsedTime**(int `$unit` u003d ?): float

Повертає сумарний час усіх інтервалів.

### Список параметрів

`unit`
Одиниця часу, задана однією із констант HRTime\Unit. За замовчуванням
HRTime\Unit::SECOND.

### Значення, що повертаються

Повертає значення типу float, що дорівнює минулому часу.

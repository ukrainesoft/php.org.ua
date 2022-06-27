- [«
HRTime\StopWatch::getLastElapsedTicks](hrtime-stopwatch.getlastelapsedticks.md)
- [HRTime\StopWatch::isRunning »](hrtime-stopwatch.isrunning.md)

- [PHP Manual](index.md)
- [HRTime\StopWatch](class.hrtime-stopwatch.md)
- Отримати минулий час для останнього інтервалу

# HRTime\StopWatch::getLastElapsedTime

(PECL hrtime \>u003d 0.4.3)

HRTime\StopWatch::getLastElapsedTime — Отримати минулий час для
останнього інтервалу

### Опис

public **HRTime\StopWatch::getLastElapsedTime**(int `$unit` u003d ?): float

Повертає час для раніше закритого інтервалу.

### Список параметрів

`unit`
Одиниця часу, задана однією із констант HRTime\Unit. За замовчуванням
HRTime\Unit::SECOND.

### Значення, що повертаються

Повертає значення типу float, що дорівнює минулому часу.

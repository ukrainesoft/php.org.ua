- [«EvPeriodic::again](evperiodic.again.md)
- [EvPeriodic::\_\_construct »](evperiodic.construct.md)

- [PHP Manual](index.md)
- [EvPeriodic](class.evperiodic.md)
- Повертає абсолютний час, коли спостерігач запуститься у
Наступного разу

# EvPeriodic::at

(PECL ev \>u003d 0.2.0)

EvPeriodic::at — Повертає абсолютний час, коли спостерігач
запуститься наступного разу

### Опис

public **EvPeriodic::at**(): float

Якщо спостерігач активний, повертає абсолютний час, коли спостерігач
запуститься наступного разу. Це не те ж саме, що аргумент offset для
[EvPeriodic::set()](evperiodic.set.md) або
[EvPeriodic::\_\_construct()](evperiodic.construct.md), він працює
навіть у інтервальному режимі.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає абсолютний час, коли спостерігач запуститься наступного
раз на секунди

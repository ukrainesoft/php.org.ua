- [«EvPeriodic::\_\_construct](evperiodic.construct.md)
- [EvPeriodic::set »](evperiodic.set.md)

- [PHP Manual](index.md)
- [EvPeriodic](class.evperiodic.md)
- створює зупинений спостерігач EvPeriodic

# EvPeriodic::createStopped

(PECL ev \>u003d 0.2.0)

EvPeriodic::createStopped — Створює зупинений спостерігач EvPeriodic

### Опис

final public static **EvPeriodic::createStopped**(
float `$offset`,
float `$interval`,
[callable](language.types.callable.md) `$reschedule_cb` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvPeriodic](class.evperiodic.md)

Створює зупинений спостерігач EvPeriodic. На відміну від
[EvPeriodic::\_\_construct()](evperiodic.construct.md), цей метод не
запускає спостерігача автоматично.

### Список параметрів

`offset`
Дивіться [Періодичні режими роботи
спостерігача] (ev.periodic-modes.md)

`interval`
Дивіться [Періодичні режими роботи
спостерігача] (ev.periodic-modes.md)

`reschedule_cb`
Перепризначити callback-функцію. Ви можете передати **`null`**. Дивіться
[Періодичні режими роботи спостерігача](ev.periodic-modes.md)

`callback`
Дивіться [Callback-функції спостерігачів](ev.watcher-callbacks.md) .

`data`
Користувальницькі дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігачів](class.ev.md#ev.constants.watcher-pri)

### Значення, що повертаються

Повертає об'єкт спостерігача EvPeriodic у разі успішного виконання.

### Дивіться також

- [EvPeriodic::\_\_construct()](evperiodic.construct.md) -
Конструктор об'єкта спостерігача EvPeriodic
- [EvTimer::createStopped()](evtimer.createstopped.md) - Створює
зупинений спостерігач EvTimer

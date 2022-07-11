- [«EvPeriodic::at](evperiodic.at.md)
- [EvPeriodic::createStopped »](evperiodic.createstopped.md)

- [PHP Manual](index.md)
- [EvPeriodic](class.evperiodic.md)
- Конструктор об'єкта спостерігача EvPeriodic

# EvPeriodic::\_\_construct

(PECL ev \>u003d 0.2.0)

EvPeriodic::\_\_construct — Конструктор об'єкта спостерігача EvPeriodic

### Опис

public **EvPeriodic::\_\_construct**(
float `$offset`,
string `$interval` ,
[callable](language.types.callable.md) `$reschedule_cb` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
)

Створює об'єкт спостерігача EvPeriodic та запускає його автоматично.
Метод [EvPeriodic::createStopped()](evperiodic.createstopped.md)
створює зупинений періодичний спостерігач.

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
Дивіться [Наблюдатели callback-функції](ev.watcher-callbacks.md) .

`data`
Користувальницькі дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Приклади

**Приклад #1 Періодичний таймер. Використовуйте перепризначення
callback-функції**

`<?php// відзначає кожні 10.5 секундfunction reschedule_cb ($watcher, $now) { return $now + (10.5. -fmod($now, 10.5));}   reschedule_cb", function ($w, $revents) { echo time(), PHP_EOL;});Ev::run();?> `

**Приклад #2 Періодичний таймер. Відзначає кожні 10,5 секунд, починаючи з
поточного моменту**

` <?php// Відзначає кожні 10.5 секунд, починаючи з поточного моменту$w u003d new EvPeriodic(fmod(Ev::now(), 10.5), 10.5, NULL, fun   , PHP_EOL;});Ev::run();?> `

**Приклад #3 Часовий спостерігач**

`<?php$hourly u003d EvPeriodic(0, 3600, NULL, function () { echo "раз в година
";});?> `

### Дивіться також

- [Періодичні режими роботи спостерігача](ev.periodic-modes.md)
- [EvTimer](class.evtimer.md)
- [EvPeriodic::createStopped()](evperiodic.createstopped.md) -
Створює зупинений спостерігач EvPeriodic

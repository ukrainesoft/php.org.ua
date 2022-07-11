- [«EvTimer::\_\_construct](evtimer.construct.md)
- [EvTimer::set »](evtimer.set.md)

- [PHP Manual](index.md)
- [EvTimer](class.evtimer.md)
- створює зупинений спостерігач EvTimer

# EvTimer::createStopped

(PECL ev \>u003d 0.2.0)

EvTimer::createStopped — Створює зупинений спостерігач EvTimer

### Опис

final public static **EvTimer::createStopped**(
float `$after`,
float `$repeat`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvTimer](class.evtimer.md)

Створює зупинений спостерігач EvTimer. На відміну від
[EvTimer::\_\_construct()](evtimer.construct.md), цей метод не
запускає спостерігача автоматично.

### Список параметрів

`after`
Налаштовує таймер для запуску через секунди.

`repeat`
Якщо час повтору дорівнює **`0.0`**, то він буде автоматично зупинено
після закінчення часу очікування. Якщо позитивне, таймер буде
автоматично налаштований на повторний запуск кожні повторювані секунди,
доки не буде зупинено вручну.

`callback`
Дивіться [Наблюдатели callback-функцій](ev.watcher-callbacks.md) .

`data`
Користувальницькі дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Значення, що повертаються

Повертає об'єкт спостерігача EvTimer у разі успішного виконання.

### Приклади

**Приклад #1 Стежте за змінами /var/log/messages. Уникаємо
пропущені оновлення із затримкою в одну секунду**

`<?php$timer u003d EvTimer::createStopped(0., 1.02, function ($w) {    $w->stop();   $stat u003d $w->daта; з| з| "Поточний розмір: %ld
", $stat->attr()['size']);});$stat u003d new EvStat("/var/log/messages", 0., function () use ($timer) {    // Скидання таймера спостерігача    $timer->again();});$timer->data u003d $stat;Ev::run();?> `

### Дивіться також

- [EvTimer::\_\_construct()](evtimer.construct.md) - Конструктор
об'єкта спостерігача EvTimer
- [EvPeriodic](class.evperiodic.md)

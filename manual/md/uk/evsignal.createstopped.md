- [«EvSignal::\_\_construct](evsignal.construct.md)
- [EvSignal::set »](evsignal.set.md)

- [PHP Manual](index.md)
- [EvSignal](class.evsignal.md)
- Create stopped EvSignal watcher object

# EvSignal::createStopped

(PECL ev \>u003d 0.2.0)

EvSignal::createStopped — Create stopped EvSignal watcher object

### Опис

final public static **EvSignal::createStopped**(
int `$signum` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvSignal](class.evsignal.md)

Створює зупинений об'єкт спостерігача EvSignal. На відміну від
[EvSignal::\_\_construct()](evsignal.construct.md), цей метод не
запускає створеного спостерігача.

### Список параметрів

`signum`
Номер сигналу. Дивіться константи модуля *pcntl* та документацію по
`signal(7)`.

`callback`
Дивіться [Функції зворотного дзвінка
спостерігачів](ev.watcher-callbacks.md).

`data`
Користувальницькі дані, асоційовані із спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Значення, що повертаються

У разі успішного виконання повертає об'єкт EvSignal.

### Дивіться також

- [EvWatcher::start()](evwatcher.start.md) - Запускає спостерігача
- [EvSignal::\_\_construct()](evsignal.construct.md) - Конструктор
об'єкта спостерігача EvSignal

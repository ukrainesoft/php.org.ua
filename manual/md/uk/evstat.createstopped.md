- [«EvStat::\_\_construct](evstat.construct.md)
- [EvStat::prev »](evstat.prev.md)

- [PHP Manual](index.md)
- [EvStat](class.evstat.md)
- створює зупинений об'єкт спостерігача EvStat

# EvStat::createStopped

(PECL ev \>u003d 0.2.0)

EvStat::createStopped — Створює зупинений об'єкт спостерігача EvStat

### Опис

final public static **EvStat::createStopped**(
string `$path`,
float `$interval`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): void

Створює об'єкт спостерігача EvStat, але не запускає його автоматично (у
на відміну від [EvStat::\_\_construct()](evstat.construct.md)).

### Список параметрів

`path`
Шлях очікування зміни статусу.

`interval`
Підказує, як швидко очікується виявлення змін, та його зазвичай
вказується **`0.0`**, щоб дозволити *libev* вибрати відповідне
значення.

`callback`
Дивіться [Спостерігачі зворотного дзвінка](ev.watcher-callbacks.md) .

`data`
Користувальницькі дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Значення, що повертаються

Повертає зупинений об'єкт спостерігача EvStat у разі успішного
виконання.

### Дивіться також

- [EvStat::\_\_construct()](evstat.construct.md) - Створює об'єкт
спостерігача EvStat
- [EvWatcher::start()](evwatcher.start.md) - Запускає спостерігача

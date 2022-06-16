- [«EvPrepare::\_\_construct](evprepare.construct.md)
- [EvSignal »](class.evsignal.md)

- [PHP Manual](index.md)
- [EvPrepare](class.evprepare.md)
- Створити об'єкт класу EvPrepare, але не стартувати його

# EvPrepare::createStopped

(PECL ev \>u003d 0.2.0)

EvPrepare::createStopped — Створити об'єкт класу EvPrepare, але не
стартувати його

### Опис

final public static **EvPrepare::createStopped**(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** , int `$priority` u003d 0 ):
[EvPrepare](class.evprepare.md)

Те саме, що й
[EvPrepare::\_\_construct()](evprepare.construct.md) , але не
здійснює автоматичний старт спостерігача.

### Список параметрів

`callback`
Дивіться [функції зворотного дзвінка
спостерігачів](ev.watcher-callbacks.md).

`data`
Довільні дані, асоційовані із спостерігачем

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Значення, що повертаються

Повертає зупинений об'єкт EvPrepare.

### Дивіться також

- [EvPrepare::\_\_construct()](evprepare.construct.md) - Конструктор
спостерігача EvPrepare
- [EvWatcher::start()](evwatcher.start.md) - Запускає спостерігача

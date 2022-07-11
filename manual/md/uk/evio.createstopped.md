- [«Evio::\_\_construct](evio.construct.md)
- [EvIo::set »](evio.set.md)

- [PHP Manual](index.md)
- [EvIo](class.evio.md)
- Створює зупинений об'єкт спостерігача EvIo

# EvIo::createStopped

(PECL ev \>u003d 0.2.0)

EvIo::createStopped — Створює зупинений об'єкт спостерігача EvIo

### Опис

final public static **EvIo::createStopped**(

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` ,
int `$events` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvIo](class.evio.md)

Те саме, що і [EvIo::\_\_construct()](evio.construct.md) , але не
відбувається автоматичний запуск спостерігача.

### Список параметрів

`fd`
Дивіться [EvIo::\_\_construct()](evio.construct.md)

`events`
Дивіться [EvIo::\_\_construct()](evio.construct.md)

`callback`
Дивіться [Callback-функції спостерігачів](ev.watcher-callbacks.md) .

`data`
Довільні дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Значення, що повертаються

У разі успішного виконання, повертає об'єкт EvIo.

### Дивіться також

- [EvIo::\_\_construct()](evio.construct.md) - Створює об'єкт
спостерігач EvIo
- [EvLoop::io()](evloop.io.md) - Створює об'єкт спостерігача EvIo,
пов'язаний з поточним екземпляром циклу подій

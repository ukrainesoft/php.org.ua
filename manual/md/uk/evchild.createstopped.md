- [«EvChild::\_\_construct](evchild.construct.md)
- [EvChild::set »](evchild.set.md)

- [PHP Manual](index.md)
- [EvChild](class.evchild.md)
- Створює зупинений екземпляр спостерігача EvCheck

# EvChild::createStopped

(PECL ev \>u003d 0.2.0)

EvChild::createStopped — Створює зупинений екземпляр спостерігача
EvCheck

### Опис

final public static **EvChild::createStopped**(
int `$pid`,
bool `$trace`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?,
int `$priority` u003d ?
): object

Те саме, що і [EvChild::\_\_construct()](evchild.construct.md) ,
але відбувається автоматичного запуску спостерігача.

### Список параметрів

`pid`
Дивіться [EvChild::\_\_construct()](evchild.construct.md)

`trace`
Дивіться [EvChild::\_\_construct()](evchild.construct.md)

`callback`
Дивіться [Callback-функції спостерігачів](ev.watcher-callbacks.md) .

`data`
Довільні дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Значення, що повертаються

### Дивіться також

- [EvChild::\_\_construct()](evchild.construct.md) - Створює об'єкт
спостерігач EvChild
- [EvLoop::child()](evloop.child.md) - Створює об'єкт EvChild,
пов'язаний із поточним циклом подій

- [«EvFork](class.evfork.md)
- [EvFork::createStopped »](evfork.createstopped.md)

- [PHP Manual](index.md)
- [EvFork](class.evfork.md)
- Конструктор спостерігача EvFork

# EvFork::\_\_construct

(PECL ev \>u003d 0.2.0)

EvFork::\_\_construct - Конструктор спостерігача EvFork

### Опис

public **EvFork::\_\_construct**(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** , int `$priority` u003d 0 )

Створює об'єкт спостерігач EvFork та автоматично його стартує.

### Список параметрів

`callback`
Дивіться [callback-функції спостерігачів](ev.watcher-callbacks.md).

`data`
Довільні дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Дивіться також

- [EvLoop::fork()](evloop.fork.md) - Створює об'єкт спостерігача
EvFork, пов'язаний з поточним екземпляром циклу подій
- [EvCheck](class.evcheck.md)

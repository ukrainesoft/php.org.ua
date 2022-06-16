- [«EvCheck](class.evcheck.md)
- [EvCheck::createStopped »](evcheck.createstopped.md)

- [PHP Manual](index.md)
- [EvCheck](class.evcheck.md)
- Конструктор об'єкту EvCheck

# EvCheck::\_\_construct

(PECL ev \>u003d 0.2.0)

EvCheck::\_\_construct — Конструктор об'єкту EvCheck

### Опис

public **EvCheck::\_\_construct**(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?, int `$priority` u003d ?)

Створює спостерігач [EvCheck](class.evcheck.md).

### Список параметрів

`callback`
Дивіться [Callback-функції спостерігача](ev.watcher-callbacks.md) .

`data`
Дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Дивіться також

- [EvPrepare](class.evprepare.md)
- [EvLoop::check()](evloop.check.md) - Створює об'єкт EvCheck,
пов'язаний з поточним екземпляром циклу подій

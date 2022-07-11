- [«EvCheck::\_\_construct](evcheck.construct.md)
- [EvChild »](class.evchild.md)

- [PHP Manual](index.md)
- [EvCheck](class.evcheck.md)
- Створює зупинений екземпляр спостерігача EvCheck

# EvCheck::createStopped

(PECL ev \>u003d 0.2.0)

EvCheck::createStopped — Створює зупинений екземпляр спостерігача
EvCheck

### Опис

final public static **EvCheck::createStopped**( string `$callback` ,
string `$data` u003d ?, string `$priority` u003d ?): object

Створює зупинений екземпляр спостерігача EvCheck.

### Список параметрів

`callback`
Дивіться [Callback-функції спостерігача](ev.watcher-callbacks.md) .

`data`
Дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Значення, що повертаються

У разі успішного виконання повертає об'єкт EvCheck.

### Дивіться також

- [EvPrepare](class.evprepare.md)

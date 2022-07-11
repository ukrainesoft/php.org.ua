- [«Evio](class.evio.md)
- [EvIo::createStopped »](evio.createstopped.md)

- [PHP Manual](index.md)
- [EvIo](class.evio.md)
- Створює об'єкт спостерігач EvIo

# EvIo::\_\_construct

(PECL ev \>u003d 0.2.0)

EvIo::\_\_construct — Створює об'єкт спостерігача EvIo

### Опис

public **EvIo::\_\_construct**(

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` ,
int `$events` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?,
int `$priority` u003d ?
)

Створює та автоматично стартує об'єкт спостерігач EvIo.

### Список параметрів

`fd`
Може бути потоком, відкритим за допомогою функції
[fopen()](function.fopen.md) або аналогічною, числовим дескриптором
файл або сокет.

`events`
**`Ev::READ`** та/або **`Ev::WRITE`**. Дивіться [бітові
маски](class.ev.md#ev.constants.watcher-revents).

`callback`
Дивіться [Callback-функції спостерігачів](ev.watcher-callbacks.md) .

`data`
Довільні дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Дивіться також

- [EvIo::createStopped()](evio.createstopped.md) - Створює
зупинений об'єкт спостерігача EvIo
- [EvLoop::io()](evloop.io.md) - Створює об'єкт спостерігача EvIo,
пов'язаний з поточним екземпляром циклу подій

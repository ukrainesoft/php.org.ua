- [«Evidle::\_\_construct](evidle.construct.md)
- [EvIo »](class.evio.md)

- [PHP Manual](index.md)
- [EvIdle](class.evidle.md)
- Створити об'єкт класу EvIdle, але не стартувати його

# EvIdle::createStopped

(PECL ev \>u003d 0.2.0)

EvIdle::createStopped — Створити об'єкт класу EvIdle, але не стартувати
його

### Опис

final public static **EvIdle::createStopped**( string `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?, int `$priority` u003d ?): object

Те саме, що і [EvIdle::\_\_construct()](evidle.construct.md) , але
не здійснює автоматичного старту спостерігача.

### Список параметрів

`callback`
Дивіться [функції зворотного дзвінка
спостерігачів](ev.watcher-callbacks.md).

`data`
Довільні дані, асоційовані із спостерігачем

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Значення, що повертаються

Повертає зупинений об'єкт EvIdle.

### Дивіться також

- [EvIdle::\_\_construct()](evidle.construct.md) - Конструктор
спостерігача EvIdle
- [EvLoop::idle()](evloop.idle.md) - Створює об'єкт спостерігача
EvIdle, пов'язаний з поточним екземпляром циклу подій

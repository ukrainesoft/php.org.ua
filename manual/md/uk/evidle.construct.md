- [«Evidle](class.evidle.md)
- [EvIdle::createStopped »](evidle.createstopped.md)

- [PHP Manual](index.md)
- [EvIdle](class.evidle.md)
- Конструктор спостерігача EvIdle

# EvIdle::\_\_construct

(PECL ev \>u003d 0.2.0)

EvIdle::\_\_construct — Конструктор спостерігача EvIdle

### Опис

public **EvIdle::\_\_construct**(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?, int `$priority` u003d ?)

Створює об'єкт спостерігач EvIdle та автоматично його стартує.

### Список параметрів

`callback`
Дивіться [функції зворотного дзвінка
спостерігачів](ev.watcher-callbacks.md).

`data`
Довільні дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Дивіться також

- [EvIdle::createStopped()](evidle.createstopped.md) - Створити
об'єкт класу EvIdle, але не стартувати його
- [EvLoop::idle()](evloop.idle.md) - Створює об'єкт спостерігача
EvIdle, пов'язаний з поточним екземпляром циклу подій

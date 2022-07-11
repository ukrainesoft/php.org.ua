- [«EvLoop::invokePending](evloop.invokepending.md)
- [EvLoop::loopFork »](evloop.loopfork.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Створює об'єкт спостерігача EvIo, пов'язаний із поточним екземпляром
циклу подій

# EvLoop::io

(PECL ev \>u003d 0.2.0)

EvLoop::io — Створює об'єкт спостерігача EvIo, пов'язаний із поточним
екземпляром циклу подій

### Опис

final public **EvLoop::io**(

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` ,
int `$events` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvIo](class.evio.md)

Створює об'єкт спостерігача EvIo, пов'язаний із поточним екземпляром циклу
подій

### Список параметрів

Усі параметри, що й для [EvIo::\_\_construct()](evio.construct.md)

### Значення, що повертаються

Повертає об'єкт EvIo у разі успішного виконання.

### Дивіться також

- [EvIo::\_\_construct()](evio.construct.md) - Створює об'єкт
спостерігач EvIo

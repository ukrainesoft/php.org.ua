- [«EvLoop::fork](evloop.fork.md)
- [EvLoop::invokePending »](evloop.invokepending.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Створює об'єкт спостерігача EvIdle, пов'язаний із поточним екземпляром
циклу подій

# EvLoop::idle

(PECL ev \>u003d 0.2.0)

EvLoop::idle — Створює об'єкт спостерігача EvIdle, пов'язаний із поточним
екземпляром циклу подій

### Опис

final public **EvLoop::idle**( [callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** , int `$priority` u003d 0 ):
[EvIdle](class.evidle.md)

Створює об'єкт спостерігача EvIdle, пов'язаний з поточним екземпляром циклу
подій

### Список параметрів

Усі параметри, що й для
[EvIdle::\_\_construct()](evidle.construct.md)

### Значення, що повертаються

Повертає об'єкт EvIdle у разі успішного виконання.

### Дивіться також

- [EvIdle::\_\_construct()](evidle.construct.md) - Конструктор
спостерігача EvIdle

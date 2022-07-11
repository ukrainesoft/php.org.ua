- [«EvLoop::embed](evloop.embed.md)
- [EvLoop::idle »](evloop.idle.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Створює об'єкт спостерігача EvFork, пов'язаний із поточним екземпляром
циклу подій

# EvLoop::fork

(PECL ev \>u003d 0.2.0)

EvLoop::fork — Створює об'єкт спостерігача EvFork, пов'язаний із поточним
екземпляром циклу подій

### Опис

final public **EvLoop::fork**( [callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** , int `$priority` u003d 0 ):
[EvFork](class.evfork.md)

Створює об'єкт спостерігача EvFork, пов'язаний із поточним екземпляром циклу
подій

### Список параметрів

Усі параметри, що й для
[EvFork::\_\_construct()](evfork.construct.md)

### Значення, що повертаються

Повертає об'єкт EvFork у разі успішного виконання.

### Дивіться також

- [EvFork::\_\_construct()](evfork.construct.md) - Конструктор
спостерігача EvFork

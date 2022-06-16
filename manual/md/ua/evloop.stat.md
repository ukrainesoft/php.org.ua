- [«EvLoop::signal](evloop.signal.md)
- [EvLoop::stop »](evloop.stop.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Створює об'єкт спостерігача EvStat, пов'язаний із поточним екземпляром
циклу подій

# EvLoop::stat

(PECL ev \>u003d 0.2.0)

EvLoop::stat — Створює об'єкт спостерігача EvStat, пов'язаний із поточним
екземпляром циклу подій

### Опис

final public **EvLoop::stat**(
string `$path`,
float `$interval`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvStat](class.evstat.md)

Створює об'єкт спостерігача EvStat, пов'язаний з поточним екземпляром циклу
подій.

### Список параметрів

Усі параметри, що й для
[EvSignal::\_\_construct()](evsignal.construct.md)

### Значення, що повертаються

Повертає об'єкт EvStat у разі успішного виконання

### Дивіться також

- [EvSignal::\_\_construct()](evsignal.construct.md) - Конструктор
об'єкта спостерігача EvSignal

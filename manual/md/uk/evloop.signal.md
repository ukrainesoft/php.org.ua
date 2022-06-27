- [«EvLoop::run](evloop.run.md)
- [EvLoop::stat »](evloop.stat.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Створює об'єкт спостерігача EvSignal, пов'язаний із поточним екземпляром
циклу подій

# EvLoop::signal

(PECL ev \>u003d 0.2.0)

EvLoop::signal — Створює об'єкт спостерігача EvSignal, пов'язаний із
поточним екземпляром циклу подій

### Опис

final public **EvLoop::signal**(
int `$signum` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvSignal](class.evsignal.md)

Створює об'єкт спостерігача EvSignal, пов'язаний із поточним екземпляром
циклу подій

### Список параметрів

Усі параметри, що й для
[EvSignal::\_\_construct()](evsignal.construct.md)

### Значення, що повертаються

Повертає об'єкт EvSignal у разі успішного виконання

### Дивіться також

- [EvSignal::\_\_construct()](evsignal.construct.md) - Конструктор
об'єкта спостерігача EvSignal

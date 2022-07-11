- [«EvLoop::suspend](evloop.suspend.md)
- [EvLoop::verify »](evloop.verify.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Створює об'єкт спостерігача EvTimer, пов'язаний із поточним екземпляром
циклу подій

# EvLoop::timer

(PECL ev \>u003d 0.2.0)

EvLoop::timer — Створення об'єкта спостерігача EvTimer, пов'язаного з поточним
екземпляром циклу подій

### Опис

final public **EvLoop::timer**(
float `$after`,
float `$repeat`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvTimer](class.evtimer.md)

Створює об'єкт спостерігача EvTimer, пов'язаний із поточним екземпляром
циклу подій.

### Список параметрів

Усі параметри, що й для
[EvTimer::\_\_construct()](evtimer.construct.md)

### Значення, що повертаються

Повертає об'єкт EvTimer у разі успішного виконання.

### Дивіться також

- [EvTimer::\_\_construct()](evtimer.construct.md) - Конструктор
об'єкта спостерігача EvTimer

- [«EvLoop::nowUpdate](evloop.nowupdate.md)
- [EvLoop::prepare »](evloop.prepare.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Створює об'єкт спостерігача EvPeriodic, пов'язаний із поточним
екземпляром циклу подій

# EvLoop::periodic

(PECL ev \>u003d 0.2.0)

EvLoop::periodic — Створює об'єкт спостерігача EvPeriodic, пов'язаний із
поточним екземпляром циклу подій

### Опис

final public **EvLoop::periodic**(
float `$offset`,
float `$interval`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvPeriodic](class.evperiodic.md)

Створює об'єкт спостерігача EvPeriodic, пов'язаний із поточним екземпляром
циклу подій

### Список параметрів

Усі параметри, що й для
[EvPeriodic::\_\_construct()](evperiodic.construct.md)

### Значення, що повертаються

Повертає об'єкт EvPeriodic у разі успішного виконання.

### Дивіться також

- [EvPeriodic::\_\_construct()](evperiodic.construct.md) -
Конструктор об'єкта спостерігача EvPeriodic

- [«EvLoop::periodic](evloop.periodic.md)
- [EvLoop::resume »](evloop.resume.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Створює об'єкт спостерігача EvPrepare, пов'язаний із поточним
екземпляром циклу подій

# EvLoop::prepare

(PECL ev \>u003d 0.2.0)

EvLoop::prepare — Створює об'єкт спостерігача EvPrepare, пов'язаний із
поточним екземпляром циклу подій

### Опис

final public **EvLoop::prepare**(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** , int `$priority` u003d 0 ):
[EvPrepare](class.evprepare.md)

Створює об'єкт спостерігача EvPrepare, пов'язаний із поточним екземпляром
циклу подій

### Список параметрів

Усі параметри, що й для **EvPrepare()**

### Значення, що повертаються

Повертає об'єкт EvPrepare у разі успішного виконання

### Дивіться також

- [EvPrepare::\_\_construct()](evprepare.construct.md) - Конструктор
спостерігача EvPrepare

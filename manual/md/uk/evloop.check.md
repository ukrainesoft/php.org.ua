- [«EvLoop::backend](evloop.backend.md)
- [EvLoop::child »](evloop.child.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Створює об'єкт EvCheck, пов'язаний з поточним екземпляром циклу
подій

# EvLoop::check

(PECL ev \>u003d 0.2.0)

EvLoop::check — Створює об'єкт EvCheck, пов'язаний із поточним екземпляром
циклу подій

### Опис

final public **EvLoop::check**( string `$callback` , string `$data` u003d ?,
string `$priority` u003d ?): [EvCheck](class.evcheck.md)

Створює об'єкт EvCheck, пов'язаний із поточним екземпляром циклу подій.

### Список параметрів

Усі параметри, що й для
[EvCheck::\_\_construct()](evcheck.construct.md)

### Значення, що повертаються

Повертає об'єкт EvCheck у разі успішного виконання.

### Дивіться також

- [EvCheck::\_\_construct()](evcheck.construct.md) - Конструктор
об'єкту EvCheck

- [«EvLoop::child](evloop.child.md)
- [EvLoop::defaultLoop »](evloop.defaultloop.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Конструктор об'єкта циклу подій

# EvLoop::\_\_construct

(PECL ev \>u003d 0.2.0)

EvLoop::\_\_construct - Конструктор об'єкта циклу подій

### Опис

public **EvLoop::\_\_construct**(
int `$flags` u003d ?,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d NULL ,
float `$io_interval` u003d 0.0 ,
float `$timeout_interval` u003d 0.0
)

Конструктор об'єкта циклу подій.

### Список параметрів

`flags`
Один з [прапорів циклу подій](class.ev.md#ev.constants.loop-flags)

`data`
Дані користувача, пов'язані з циклом.

`io_interval`
Дивіться [io_interval](class.evloop.md#evloop.props.io-interval)

`timeout_interval`
Дивіться
[timeout_interval](class.evloop.md#evloop.props.timeout-interval)

### Дивіться також

- [EvLoop::defaultLoop()](evloop.defaultloop.md) - Повертає або
створює цикл подій за умовчанням

- [« EvLoop::defaultLoop](evloop.defaultloop.md)
- [EvLoop::fork »](evloop.fork.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Створює екземпляр спостерігача EvEmbed, пов'язаний із поточним об'єктом
EvLoop

# EvLoop::embed

(PECL ev \>u003d 0.2.0)

EvLoop::embed — Створює екземпляр спостерігача EvEmbed, пов'язаний з
поточним об'єктом EvLoop

### Опис

final public **EvLoop::embed**(
string `$other` ,
string `$callback` u003d ?,
string `$data` u003d ?,
string `$priority` u003d ?
): [EvEmbed](class.evembed.md)

Створює екземпляр спостерігача [EvEmbed](class.evembed.md), пов'язаний із
поточним об'єктом [EvLoop](class.evloop.md).

### Список параметрів

Усі параметри, що й для
[EvEmbed::\_\_construct()](evembed.construct.md) .

### Значення, що повертаються

Повертає об'єкт EvEmbed у разі успішного виконання.

### Дивіться також

- [EvEmbed::\_\_construct()](evembed.construct.md) - Конструктор
об'єкту EvEmbed

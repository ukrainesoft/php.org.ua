- [«EvChild::set](evchild.set.md)
- [EvEmbed::\_\_construct »](evembed.construct.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvEmbed

# Клас EvEmbed

(PECL ev \>u003d 0.2.0)

## Вступ

Використовується для вставлення одного циклу подій в інший.

## Огляд класів

class **EvEmbed** extends [EvWatcher](class.evwatcher.md) {

/\* Властивості \*/

public `$embed`;

/\* Методи \*/

public [\_\_construct](evembed.construct.md)(
object `$other` ,
[callable](language.types.callable.md) `$callback` u003d ?,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?,
int `$priority` u003d ?
)

final public static [createStopped](evembed.createstopped.md)(
object `$other` ,
[callable](language.types.callable.md) `$callback` u003d ?,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?,
int `$priority` u003d ?
): void

public [set](evembed.set.md)( object `$other` ): void

public [sweep](evembed.sweep.md)(): void

/\* Наслідувані методи \*/

public [EvWatcher::clear](evwatcher.clear.md)(): int

public [EvWatcher::feed](evwatcher.feed.md)( int `$revents` ): void

public [EvWatcher::getLoop](evwatcher.getloop.md)():
[EvLoop](class.evloop.md)

public [EvWatcher::invoke](evwatcher.invoke.md)( int `$revents` ):
void

public [EvWatcher::keepalive](evwatcher.keepalive.md)( bool `$value` u003d
?): bool

public [EvWatcher::setCallback](evwatcher.setcallback.md)(
[callable](language.types.callable.md) `$callback` ): void

public [EvWatcher::start](evwatcher.start.md)(): void

public [EvWatcher::stop](evwatcher.stop.md)(): void

}

## Властивості

`is_active`

`data`

`is_pending`

`priority`

`embed`

## Зміст

- [EvEmbed::\_\_construct](evembed.construct.md) - Конструктор
об'єкту EvEmbed
- [EvEmbed::createStopped](evembed.createstopped.md) — Створює
зупинений об'єкт спостерігач EvEmbed
- [EvEmbed::set](evembed.set.md) — Налаштування спостерігача
- [EvEmbed::sweep](evembed.sweep.md) - Робить одиночну,
неблокуючу розгортку за вбудованим циклом

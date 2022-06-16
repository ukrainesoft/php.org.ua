- [« EvEmbed::sweep](evembed.sweep.md)
- [EvFork::\_\_construct »](evfork.construct.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvFork

# Клас EvFork

(PECL ev \>u003d 0.2.0)

## Вступ

Паралельний процес спостерігача викликається тоді, коли викликається
`fork()` (зазвичай тому, що про це повідомили *libev* шляхом виклику
[EvLoop::fork()](evloop.fork.md)). Виклик робиться до наступної
блокування циклом подій та до початку виклику спостерігачів
[EvCheck](class.evcheck.md) і тільки в дочірньому процесі після
розгалуження. Якщо хтось зробить виклик
[EvLoop::fork()](evloop.fork.md) у неправильному процесі, обробники
розгалуження також будуть викликані.

## Огляд класів

class **EvFork** extends [EvWatcher](class.evwatcher.md) {

/\* Наслідувані властивості \*/

public `$is_active`;

public `$data`;

public `$is_pending`;

public `$priority`;

/\* Методи \*/

public [\_\_construct](evfork.construct.md)(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** , int `$priority` u003d 0 )

final public static [createStopped](evfork.createstopped.md)( string
`$callback` , string `$data` u003d ?, string `$priority` u003d ?): object

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

## Зміст

- [EvFork::\_\_construct](evfork.construct.md) - Конструктор
спостерігача EvFork
- [EvFork::createStopped](evfork.createstopped.md) — Створити об'єкт
класу EvFork, але не стартувати його

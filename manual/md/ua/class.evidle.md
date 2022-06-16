- [«EvFork::createStopped](evfork.createstopped.md)
- [EvIdle::\_\_construct »](evidle.construct.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvIdle

# Клас EvIdle

(PECL ev \>u003d 0.2.0)

## Вступ

Спостерігачі **EvIdle** викликають події тоді, коли жодні інші
події такого ж чи вищого пріоритету не перебувають в очікуванні
([EvPrepare](class.evprepare.md), [EvCheck](class.evcheck.md) та
інші спостерігачі **EvIdle** не вважаються одержуючими *події*).

Таким чином, цей процес зайнятий обробкою сокетів або очікувань (або
навіть сигналів) такого ж або вищого пріоритету доти, доки
він не буде активовано. Але коли процес перебуває в режимі очікування
(або в черзі лише спостерігачі з нижчим пріоритетом),
спостерігачі **EvIdle** викликатимуться один раз за ітерацію циклу
подій - доки не будуть зупинені або поки що процесом не будуть отримані
нові повідомлення і він не буде зайнятий пріоритетнішими завданнями.

Крім підтримки неблокуючого процесу (котрий корисний у деяких
випадках), спостерігачі **EvIdle** є гарним місцем для виконання
*"псевдо-фонової обробки"* або затримки обробки даних до моменту,
поки цикл подій не опрацює всі виняткові події.

Найбільш помітний ефект проявляється в тому, що поки що *сплячі*
спостерігачі активні, процес *не* блокуватиметься у процесі
очікування на нові події.

## Огляд класів

class **EvIdle** extends [EvWatcher](class.evwatcher.md) {

/\* Наслідувані властивості \*/

public `$is_active`;

public `$data`;

public `$is_pending`;

public `$priority`;

/\* Методи \*/

public [\_\_construct](evidle.construct.md)(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?, int `$priority` u003d ?)

final public static [createStopped](evidle.createstopped.md)( string
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?, int `$priority` u003d ?): object

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

- [EvIdle::\_\_construct](evidle.construct.md) - Конструктор
спостерігача EvIdle
- [EvIdle::createStopped](evidle.createstopped.md) — Створити об'єкт
класу EvIdle, але не стартувати його

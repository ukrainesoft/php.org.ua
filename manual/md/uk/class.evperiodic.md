- [«EvLoop::verify](evloop.verify.md)
- [EvPeriodic::again »](evperiodic.again.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvPeriodic

# Клас EvPeriodic

(PECL ev \>u003d 0.2.0)

## Вступ

Періодичні спостерігачі також, свого роду, таймери, але набагато більше
непостійні.

На відміну від [EvTimer](class.evtimer.md), спостерігачі **EvPeriodic**
базуються не на реальному часі (або відносному часі, фізично
минулому), а на "системному" (тому, що показується на вашому годиннику).
Різниця в тому, що такий час може йти швидше чи повільніше
"реального", або взагалі скакати, в момент переходу на зимове/літнє
час або просто ручної зміни часу.

Спостерігач **EvPeriodic** можна налаштувати на спрацювання після
певного часу. Наприклад, якщо спостерігач **EvPeriodic**
налаштований спрацювати *"в 10 секунд"* (тобто.
[EvLoop::now()](evloop.now.md) + **`10.0`** секунд по "системному"
часу, а не через 10 секунд!) і одразу після цього системний час
скинули на "перше січня минулого року", то спостерігач спрацює
через рік чи більше, рівно в той момент, коли системний час буде
і заданому. Хоча [EvTimer](class.evtimer.md) просто
спрацює через 10 секунд після запуску.

Так само як і з таймерами, callback-функція гарантовано спрацює після
настання необхідного часу. Якщо кілька таймерів будуть готові
спрацювати в одній і тій же ітерації подієвого циклу, то першими
спрацюють ті, які мають спрацювати раніше за часом. (це більше не
поширюється на ситуації, коли callback-функції рекурсивно викликають
[EvLoop::run()](evloop.run.md)).

## Огляд класів

class **EvPeriodic** extends [EvWatcher](class.evwatcher.md) {

/\* Властивості \*/

public `$offset`;

public `$interval`;

/\* Наслідувані властивості \*/

public `$is_active`;

public `$data`;

public `$is_pending`;

public `$priority`;

/\* Методи \*/

public [\_\_construct](evperiodic.construct.md)(
float `$offset`,
string `$interval` ,
[callable](language.types.callable.md) `$reschedule_cb` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
)

public [again](evperiodic.again.md)(): void

public [at](evperiodic.at.md)(): float

final public static [createStopped](evperiodic.createstopped.md)(
float `$offset`,
float `$interval`,
[callable](language.types.callable.md) `$reschedule_cb` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvPeriodic](class.evperiodic.md)

public [set](evperiodic.set.md)( float `$offset` , float `$interval`
): void

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

`offset`
При повторенні цей параметр містить значення зсуву, інакше
випадку - абсолютний час (значення зсуву передається в
[EvPeriodic::set()](evperiodic.set.md) , хоча *libev* може його
поміняти для кращої чисельної стабільності).

`interval`
Поточне значення інтервалу. Може бути змінено у будь-який час, але
зміни набудуть чинності лише після спрацьовування спостерігача, або за
виклику [EvPeriodic::again()](evperiodic.again.md).

## Зміст

- [EvPeriodic::again](evperiodic.again.md) - Зупиняє і знову
запускає періодичний спостерігач
- [EvPeriodic::at](evperiodic.at.md) - Повертає абсолютний час,
коли спостерігач запуститься наступного разу
- [EvPeriodic::\_\_construct](evperiodic.construct.md) - Конструктор
об'єкта спостерігача EvPeriodic
- [EvPeriodic::createStopped](evperiodic.createstopped.md) — Створює
зупинений спостерігач EvPeriodic
- [EvPeriodic::set](evperiodic.set.md) — Налаштовує спостерігача

- [«EvPeriodic::set](evperiodic.set.md)
- [EvPrepare::\_\_construct »](evprepare.construct.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvPrepare

# Клас EvPrepare

(PECL ev \>u003d 0.2.0)

## Вступ

Спостерігачі **EvPrepare** та [EvCheck](class.evcheck.md) зазвичай
використовуються у парі. Спостерігач **EvPrepare** викликається до блокування
процесу, потім викликається [EvCheck](class.evcheck.md)

Не дозволяється викликати [EvLoop::run()](evloop.run.md) або аналогічні
методи або функції, введені в поточний цикл подій
спостерігачами **EvPrepare** або [EvCheck](class.evcheck.md). Проте
інші цикли подій, що не поточний, можуть. Сенс у тому, що поточному не
Необхідно перевіряти рекурсію у таких спостерігачах, тобто. завжди буде
послідовність: **EvPrepare** -\> блокування -\>
[EvCheck](class.evcheck.md), тому спостерігача кожного виду завжди
викликатимуть у парах, захоплюючи блокуючий виклик.

Основна мета полягає в інтеграції інших подійних механізмів у
*libev* та покращене їх використання. Вони можуть бути використані,
наприклад, при відслідковуванні зміни змінних, при реалізації
спостерігачів, при інтегруванні NET-SNMP або
співпрограм бібліотеки та багато іншого. Вони також іноді корисні при
кешування даних та при очищенні даних до блокування.

Рекомендується встановлювати спостерігачам [EvCheck](class.evcheck.md)
найвищий пріоритет (**`Ev::MAXPRI`**), щоб забезпечити можливість їх
запуску раніше за будь-яких інших спостерігачів після опитування (це не має
значення для спостерігачів **EvPrepare**).

Крім того, спостерігачі [EvCheck](class.evcheck.md) не зможуть
активувати/подавати події. Поки що *libev* повністю підтримує все
це, вони можуть виконуватися раніше, ніж інші спостерігачі
[EvCheck](class.evcheck.md) виконають свою роботу.

## Огляд класів

class **EvPrepare** extends [EvWatcher](class.evwatcher.md) {

/\* Наслідувані властивості \*/

public `$is_active`;

public `$data`;

public `$is_pending`;

public `$priority`;

/\* Методи \*/

public [\_\_construct](evprepare.construct.md)( string `$callback` ,
string `$data` u003d ?, string `$priority` u003d ?)

final public static [createStopped](evprepare.createstopped.md)(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** , int `$priority` u003d 0 ):
[EvPrepare](class.evprepare.md)

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

- [EvPrepare::\_\_construct](evprepare.construct.md) - Конструктор
спостерігача EvPrepare
- [EvPrepare::createStopped](evprepare.createstopped.md) — Створити
об'єкт класу EvPrepare, але не стартувати його

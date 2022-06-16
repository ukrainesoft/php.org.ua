- [«Ev::verify](ev.verify.md)
- [EvCheck::\_\_construct »](evcheck.construct.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvCheck

# Клас EvCheck

(PECL ev \>u003d 0.2.0)

## Вступ

Спостерігачі [EvPrepare](class.evprepare.md) та **EvCheck** зазвичай
використовуються у парі. Спостерігач [EvPrepare](class.evprepare.md)
викликається до блокування процесу, потім викликається **EvCheck**

Не дозволяється викликати [EvLoop::run()](evloop.run.md) або аналогічні
методи або функції, введені в поточний цикл подій
спостерігачами [EvPrepare](class.evprepare.md) або **EvCheck**. Проте
інші цикли подій, що не поточний, можуть. Сенс у тому, що поточному не
Необхідно перевіряти рекурсію у таких спостерігачах, тобто. завжди буде
послідовність: [EvPrepare](class.evprepare.md) -\> блокування -\>
**EvCheck**, так що спостерігача кожного виду завжди будуть викликати в
парах, захоплюючи блокуючий виклик.

Основна мета полягає в інтеграції інших подійних механізмів у
*libev* та покращене їх використання. Вони можуть бути використані,
наприклад, при відслідковуванні зміни змінних, при реалізації
спостерігачів, при інтегруванні NET-SNMP або
співпрограм бібліотеки та багато іншого. Вони також іноді корисні при
кешування даних та при очищенні даних до блокування.

Рекомендується встановлювати спостерігачам **EvCheck** найвищий пріоритет
(**`Ev::MAXPRI`**), щоб забезпечити можливість їх запуску раніше, ніж будь-які
інших спостерігачів після опитування (це не має значення для спостерігачів
[EvPrepare](class.evprepare.md)).

Крім того, спостерігачі **EvCheck** не зможуть активувати/подавати
події. Поки *libev* повністю підтримує все це вони можуть
виконуватися раніше, ніж інші спостерігачі **EvCheck** виконають свою
роботу.

## Огляд класів

class **EvCheck** extends [EvWatcher](class.evwatcher.md) {

/\* Наслідувані властивості \*/

public `$is_active`;

public `$data`;

public `$is_pending`;

public `$priority`;

/\* Методи \*/

public [\_\_construct](evcheck.construct.md)(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?, int `$priority` u003d ?)

final public static [createStopped](evcheck.createstopped.md)( string
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

- [EvCheck::\_\_construct](evcheck.construct.md) - Конструктор
об'єкту EvCheck
- [EvCheck::createStopped](evcheck.createstopped.md) — Створює
зупинений екземпляр спостерігача EvCheck

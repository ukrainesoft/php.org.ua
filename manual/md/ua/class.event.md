- [« Створення подій для
сигналів](event.constructing.signal.events.md)
- [Event::add »](event.add.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Клас Event

# Клас Event

(PECL event \>u003d 1.2.6-beta)

## Вступ

Клас **Event** представляє та спрацьовує на наступні події:
файловий дескриптор готовий до читання чи запису; стає готовим до читання
або записи (тільки edge-triggered I/O (одноразове спрацьовування));
закінчується очікування; отримано системний сигнал; сталося
користувальницька подія.

Кожна подія пов'язана з [EventBase](class.eventbase.md). Проте
подія не буде оброблена, поки не буде додана за допомогою методу
[Event::add()](event.add.md). Додана подія знаходиться у статусі
очікування *pending*, доки воно не відбулося. Після цього воно переходить у
статус активний (*active*). Для обробки подій користувач може
зареєструвати функцію зворотного дзвінка, яка буде викликана в
момент переходу події на активний статус. Якщо подія налаштована як
постійне (*persistent*), воно повернеться до статусу очікування. Якщо воно не
постійне, воно вийде з режиму очікування після запуску функції
зворотного дзвінка. Метод [Event::del()](event.del.md) *видаляє*,
відповідно виводячи його зі статусу очікування. Додати його за новою
можна з допомогою методу [Event::add()](event.add.md).

## Огляд класів

final class **Event** {

/\* Константи \*/

const int `ET` u003d 32;

const int `PERSIST` u003d 16;

const int `READ` u003d 2;

const int `WRITE` u003d 4;

const int `SIGNAL` u003d 8;

const int `TIMEOUT` u003d 1;

/\* Властивості \*/

public readonly bool `$pending`;

/\* Методи \*/

public [add](event.add.md)( float `$timeout` u003d ?): bool

public [\_\_construct](event.construct.md)(
[EventBase](class.eventbase.md) `$base` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` ,
int `$what` ,
[callable](language.types.callable.md) `$cb` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
$arg u003d NULL
)

public [del](event.del.md)(): bool

public [free](event.free.md)(): void

public static [getSupportedMethods](event.getsupportedmethods.md)():
array

public [pending](event.pending.md)( int `$flags` ): bool

public [set](event.set.md)(
[EventBase](class.eventbase.md) `$base` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` ,
int `$what` u003d ?,
[callable](language.types.callable.md) `$cb` u003d ?,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d ?
): bool

public [setPriority](event.setpriority.md)( int `$priority` ): bool

public [setTimer](event.settimer.md)(
[EventBase](class.eventbase.md) `$base` ,
[callable](language.types.callable.md) `$cb` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d ?): bool

public static [signal](event.signal.md)(
[EventBase](class.eventbase.md) `$base` ,
int `$signum` ,
[callable](language.types.callable.md) `$cb` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d ?
): [Event](class.event.md)

public static [timer](event.timer.md)(
[EventBase](class.eventbase.md) `$base` ,
[callable](language.types.callable.md) `$cb` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d ?): [Event](class.event.md)

}

## Властивості

`pending`
Позначає, що подія може очікувати. Дивіться [Про постійні
подіях](event.persistence.md) .

## Зумовлені константи

**`Event::ET`**
Означає, що подія повинна спрацьовувати один раз при зміні статусу
(edge-triggered), якщо використовуваний бекенд підтримує таку поведінку.
Це впливає на семантику **`Event::READ`** та **`Event::WRITE`** .

**`Event::PERSIST`**
Позначає, що подія стала. Дивіться [Про постійні
подіях](event.persistence.md) .

**`Event::READ`**
Цей прапор вказує подію, яка стає активною, коли
наданий файл (зазвичай потоковий ресурс чи сокет) готовий до читання.

**`Event::WRITE`**
Цей прапор вказує подію, яка стає активною, коли
наданий файл (зазвичай потоковий ресурс чи сокет) готовий до запису.

**`Event::SIGNAL`**
Використовується для відстеження системних сигналів. Дивіться
"Створення подій для сигналів" нижче.

**`Event::TIMEOUT`**
Прапор означає, що активізувалась подія після закінчення очікування
(Timeout).

Прапор **`Event::TIMEOUT`** ігнорується під час створення події: його можна
встановити при *додаванні*. Він задається в аргументі `$what` функції
зворотного дзвінка, якщо сталася подія цього типу.

## Зміст

- [Event::add](event.add.md) — Перевести подію у стан
очікування
- [Event::addSignal](event.addsignal.md) - Псевдонім Event::add
- [Event::addTimer](event.addtimer.md) - Псевдонім Event::add
- [Event::\_\_construct](event.construct.md) - Конструктор об'єкта
Event
- [Event::del](event.del.md) — Перевести подію на пасивну
стан
- [Event::delSignal](event.delsignal.md) - Псевдонім Event::del
- [Event::delTimer](event.deltimer.md) - Псевдонім Event::del
- [Event::free](event.free.md) — Перевести подію на пасивну
стан та звільнити всі виділені для нього ресурси
- [Event::getSupportedMethods](event.getsupportedmethods.md) -
Отримати масив з іменами методів, які підтримуються в поточній версії
Libevent
- [Event::pending](event.pending.md) — Перевірити, що подія
перебуває в стані очікування або що воно заплановане
- [Event::set](event.set.md) — Переконфігурувати подію
- [Event::setPriority](event.setpriority.md) — Вказати пріоритет
події
- [Event::setTimer](event.settimer.md) — Переконфігурація події
таймера
- [Event::signal](event.signal.md) — Створити об'єкт події сигналу
- [Event::timer](event.timer.md) — Створити об'єкт події таймера

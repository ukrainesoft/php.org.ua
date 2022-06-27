- [« EvIdle::createStopped](evidle.createstopped.md)
- [EvIo::\_\_construct »](evio.construct.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvIo

# Клас EvIo

(PECL ev \>u003d 0.2.0)

## Вступ

Спостерігачі **EvIo** перевіряють, чи є файл, сокет чи потік,
перетворюваний на числовий дескриптор файлу, доступним на читання або на
запис при кожній ітерації подійного циклу, або, якщо точніше,
коли читання не заблокує процес, а запис може бути зроблено.
Така поведінка називається *перемикання рівня (level-triggering)*,
тому, що події будуть створюватися весь час, доки зберігається
стан, що відстежується. Для припинення створення подій треба просто
зупинити спостерігача.

Кількість таких спостерігачів для одного файлового дескриптора `fd` не
обмежено. Бажано, але не обов'язково встановити для файлового
дескриптора неблокуючий режим

Інший момент, який необхідно пам'ятати, це те, що завжди
Існує можливість помилкового спрацьовування. Наприклад **`Ev::READ`**
викличе callback-функцію, але водночас файл заблокується
підзапитом *read()*. У таку ситуацію дуже легко потрапити і саме
тому рекомендується завжди використовувати неблокуючий введення/виведення.
Повернення *read()* додаткового **`EAGAIN`** набагато краще,
ніж "зависання" програми в очікуванні даних.

Якщо з якихось причин неможливо використовувати `fd` у неблокуючому
режимі, то має сенс додатково перевіряти, чи доступний файл на
читання на даний момент. Хтось додатково використовує
**`SIGALRM`** та внутрішній таймер для перевірки, що блокування не
вічна.

Намагайтеся завжди використовувати неблокуючий режим.

## Огляд класів

class **EvIo** extends [EvWatcher](class.evwatcher.md) {

/\* Властивості \*/

public `$fd`;

public `$events`;

/\* Наслідувані властивості \*/

public `$is_active`;

public `$data`;

public `$is_pending`;

public `$priority`;

/\* Методи \*/

public [\_\_construct](evio.construct.md)(

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` ,
int `$events` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?,
int `$priority` u003d ?
)

final public static [createStopped](evio.createstopped.md)(

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` ,
int `$events` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvIo](class.evio.md)

public [set](evio.set.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` , int `$events` ): void

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

`fd`

`events`

## Зміст

- [EvIo::\_\_construct](evio.construct.md) — Створює об'єкт
спостерігач EvIo
- [EvIo::createStopped](evio.createstopped.md) - Створює
зупинений об'єкт спостерігача EvIo
- [EvIo::set](evio.set.md) - Конфігурування спостерігача

- [«EvSignal::set](evsignal.set.md)
- [EvStat::attr »](evstat.attr.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvStat

# Клас EvStat

(PECL ev \>u003d 0.2.0)

## Вступ

**EvStat** спостерігає за зміною атрибутів об'єкта по заданому шляху
файлової системи. Це досягається шляхом регулярного запуску *stat()* для
цього шляху (або шляхом отримання сигналу про зміну від операційної
системи) та порівняння отриманих даних з результатами попереднього
виклику. У разі виявлення зміни атрибутів викликається
callback-функція.

Шлях не обов'язково має існувати насправді. Зміна
статусу з "шлях існує" на "шлях не існує" - це таке ж
зміна, як і будь-яке інше. Стан "шлях не існує"
визначається за значенням **``nlink'`** рівним 0 (яке повертається
методом [EvStat::attr()](evstat.attr.md)).

Шлях не повинен закінчуватися слішем або містити спеціальні компоненти,
такі як **``.'`** або **`..`**. Шлях має бути абсолютним. Якщо
задати відносний шлях та змінити робочий каталог, то поведінка буде
невизначеним.

Оскільки немає інтерфейсу оповіщення про зміни,
переносна реалізація просто викликає *stat()* через рівні проміжки
часу і дивиться, чи не змінилося чогось. Тому рекомендується ставити
інтервал опитування. Якщо інтервал опитування заданий рівним **`0.0`** (що
дуже рекомендується), то буде використовуватись значення за замовчуванням
(якого ніхто не знає, але передбачається, що десь близько 5 секунд,
але при цьому може динамічно змінюватись). *libev* має обмеження на
мінімальне значення інтервалу, яке зараз дорівнює приблизно
**`0.1`**, але такий інтервал – це стрілянина з гармати по горобцях.

Не рекомендується використовувати велику кількість одночасно працюючих
спостерігачів **EvStat**, тому що це може сильно вплинути на
споживання ресурсів у зв'язку з використанням механізмів оповіщення
ОС.

## Огляд класів

class **EvStat** extends [EvWatcher](class.evwatcher.md) {

/\* Властивості \*/

public `$ path`;

public `$interval`;

/\* Наслідувані властивості \*/

public `$is_active`;

public `$data`;

public `$is_pending`;

public `$priority`;

/\* Методи \*/

public [\_\_construct](evstat.construct.md)(
string `$path`,
float `$interval`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
)

public [attr](evstat.attr.md)(): array

final public static [createStopped](evstat.createstopped.md)(
string `$path`,
float `$interval`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): void

public [prev](evstat.prev.md)(): void

public [set](evstat.set.md)( string `$path` , float `$interval` ):
void

public [stat](evstat.stat.md)(): bool

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

`interval`
* Тільки читання *. Показує, наскільки часто відбуваються опитування статусу та
зазвичай дорівнює **`0.0`**, що дозволяє *libev* самостійно визначати
інтервал.

`path`
* Тільки читання *. Шлях, для якого відслідковуються зміни.

## Зміст

- [EvStat::attr](evstat.attr.md) — Повертає значення нещодавно
виявлені Ev
- [EvStat::\_\_construct](evstat.construct.md) — Створює об'єкт
спостерігача EvStat
- [EvStat::createStopped](evstat.createstopped.md) — Створює
зупинений об'єкт спостерігача EvStat
- [EvStat::prev](evstat.prev.md) — Повертає попередній набір
значень, що повертаються EvStat::attr
- [EvStat::set](evstat.set.md) — Налаштовує спостерігача
- [EvStat::stat](evstat.stat.md) - Ініціює виклик статистики

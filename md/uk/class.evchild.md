- [« EvCheck::createStopped](evcheck.createstopped.md)
- [EvChild::\_\_construct »](evchild.construct.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvChild

# Клас EvChild

(PECL ev \>u003d 0.2.0)

## Вступ

Спостерігач **EvChild** викликається тоді, коли процес отримує сигнал
**`SIGCHLD`** у відповідь на деякі зміни статусу дочірнього елемента
(зазвичай коли дочірній процес завершує свою роботу або виходить із
нього). Дозволяється встановлювати спостерігач **`EvChild`** після того,
як дочірній потік був відгалужений (що має на увазі, що він повинен був
вже завершитися), доки не почалася ітерація циклу подій (або
продовжується з спостерігача), тобто. розгалуження і потім негайна
реєстрація спостерігача для дочірнього елемента є гарною
практикою, а розгалуження та реєстрація спостерігача після кількох
ітерацій циклу подій або при наступному запуску callback-функції – немає.

Спостерігачів **EvChild** дозволяється реєструвати тільки в *циклі
замовчуванням*.

## Огляд класів

class **EvChild** extends [EvWatcher](class.evwatcher.md) {

/\* Властивості \*/

public `$pid`;

public `$ rpid`;

public `$ rstatus`;

/\* Наслідувані властивості \*/

public `$is_active`;

public `$data`;

public `$is_pending`;

public `$priority`;

/\* Методи \*/

public [\_\_construct](evchild.construct.md)(
int `$pid`,
bool `$trace`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
)

final public static [createStopped](evchild.createstopped.md)(
int `$pid`,
bool `$trace`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?,
int `$priority` u003d ?
): object

public [set](evchild.set.md)( int `$pid` , bool `$trace` ): void

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

`pid`
* Тільки читання *. Ідентифікатор процесу, який слідкує, або **`0`**,
що означає будь-який ідентифікатор процесу.

`rpid`
* Тільки читання *. Ідентифікатор процесу, який слідкує за зміною
статусу.

`rstatus`
* Тільки читання *. Статус завершення процесу, спричинений `rpid`.

## Зміст

- [EvChild::\_\_construct](evchild.construct.md) — Створює об'єкт
спостерігач EvChild
- [EvChild::createStopped](evchild.createstopped.md) — Створює
зупинений екземпляр спостерігача EvCheck
- [EvChild::set](evchild.set.md) — Налаштування спостерігача

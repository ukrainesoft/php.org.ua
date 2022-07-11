- [« EvPrepare::createStopped](evprepare.createstopped.md)
- [EvSignal::\_\_construct »](evsignal.construct.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvSignal

# Клас EvSignal

(PECL ev \>u003d 0.2.0)

## Вступ

Спостерігач **EvSignal** створює подію, коли процес отримує один або
кілька конкретних сигналів. Оскільки сигнали приходять асинхронно,
*libev* намагається з цим боротися та доставляти їх синхронно, тобто
аналогічно всім іншим подіям у нормальному режимі обробки.

Обмежень на кількість спостерігачів за одним і тим самим сигналом немає,
але лише в межах одного подієвого циклу. Наприклад, у циклі по
замовчуванням працює спостерігач за **`SIGINT`**, а в іншому циклі
спостерігач за **`SIGIO`**, але при цьому не можна спостерігати за **`SIGINT`**
у двох циклах одразу. Ну і за **`SIGCHLD`** можна спостерігати лише у
цикл за замовчуванням.

Якщо доступно та підтримується, *libev* встановлює свої обробники з
дозволеною поведінкою `SA_RESTART` (або аналогом), тому системні
дзвінки не будуть некоректно перериватися. Якщо виникатимуть проблеми з
перериванням системних викликів сигналами, всі сигнали можна блокувати в
спостерігачеві [EvCheck](class.evcheck.md) та розблокувати у спостерігачі
[EvPrepare](class.evprepare.md).

## Огляд класів

class **EvSignal** extends [EvWatcher](class.evwatcher.md) {

/\* Властивості \*/

public `$signum`;

/\* Наслідувані властивості \*/

public `$is_active`;

public `$data`;

public `$is_pending`;

public `$priority`;

/\* Методи \*/

public [\_\_construct](evsignal.construct.md)(
int `$signum` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
)

final public static [createStopped](evsignal.createstopped.md)(
int `$signum` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvSignal](class.evsignal.md)

public [set](evsignal.set.md)( int `$signum`): void

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

`signum`
Номер сигналу. Дивіться константи, експортовані модулем *pcntl*.
Також дивіться сторінку керівництва `signal(7)`.

## Зміст

- [EvSignal::\_\_construct](evsignal.construct.md) - Конструктор
об'єкта спостерігача EvSignal
- [EvSignal::createStopped](evsignal.createstopped.md) - Create
stopped EvSignal watcher object
- [EvSignal::set](evsignal.set.md) — Налаштування спостерігача

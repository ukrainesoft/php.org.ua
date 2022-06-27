- [«EvTimer::set](evtimer.set.md)
- [EvWatcher::clear »](evwatcher.clear.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvWatcher

# Клас EvWatcher

(PECL ev \>u003d 0.2.0)

## Вступ

**EvWatcher** є базовим класом для всіх спостерігачів(
[EvCheck](class.evcheck.md), [EvChild](class.evchild.md) та ін.).
Оскільки конструктор **EvWatcher** має модифікатор abstract, ви не
повинні (і не зможете) створювати об'єкти цього класу безпосередньо.

## Огляд класів

abstract class **EvWatcher** {

/\* Властивості \*/

public `$is_active`;

public `$data`;

public `$is_pending`;

public `$priority`;

/\* Методи \*/

abstract public [\_\_construct](evwatcher.construct.md)()

public [clear](evwatcher.clear.md)(): int

public [feed](evwatcher.feed.md)( int `$revents` ): void

public [getLoop](evwatcher.getloop.md)(): [EvLoop](class.evloop.md)

public [invoke](evwatcher.invoke.md)( int `$revents` ): void

public [keepalive](evwatcher.keepalive.md)( bool `$value` u003d ?): bool

public [setCallback](evwatcher.setcallback.md)(
[callable](language.types.callable.md) `$callback` ): void

public [start](evwatcher.start.md)(): void

public [stop](evwatcher.stop.md)(): void

}

## Властивості

`is_active`
* Тільки читання *. Якщо спостерігач активний, то **`true`**, якщо ні, то
**`false`**.

`data`
Довільні дані користувача.

`is_pending`
* Тільки читання *. якщо спостерігач у режимі очікування, тобто має
нерозібрані повідомлення, а callback-функція ще не запускалася, то
**`true`**. Інакше **`false`**. Поки що спостерігач знаходиться в
режимі очікування (але не активний), ви не повинні змінювати його пріоритет.

`priority`
Ціле число (int) в діапазоні від **`Ev::MINPRI`** до **`Ev::MAXPRI`**.
Очікуючі спостерігачі з більш високим пріоритетом будуть викликані раніше
спостерігачів із нижчим пріоритетом, але пріоритет не буде
перешкоджати запуску спостерігача (за винятком спостерігачів
[EvIdle](class.evidle.md)). Спостерігачі [EvIdle](class.evidle.md)
надають функціонал, що запобігає виклику, якщо є ті, що очікують
високопріоритетні повідомлення.

## Зміст

- [EvWatcher::clear](evwatcher.clear.md) — Очистити статус очікування
спостерігача
- [EvWatcher::\_\_construct](evwatcher.construct.md) - Абстрактний
конструктор об'єкта спостерігача
- [EvWatcher::feed](evwatcher.feed.md) — Подає зазначені події у
цикл подій
- [EvWatcher::getLoop](evwatcher.getloop.md) - Повертає цикл,
відповідальний за спостерігача
- [EvWatcher::invoke](evwatcher.invoke.md) - Викликає
callback-функцію спостерігача із заданою бітовою маскою прийнятих
подій
- [EvWatcher::keepalive](evwatcher.keepalive.md) — Налаштовує,
чи повертатиметься цикл
- [EvWatcher::setCallback](evwatcher.setcallback.md) - Встановлює
нову callback-функцію для спостерігача
- [EvWatcher::start](evwatcher.start.md) — Запускає спостерігача
- [EvWatcher::stop](evwatcher.stop.md) - Зупиняє спостерігача

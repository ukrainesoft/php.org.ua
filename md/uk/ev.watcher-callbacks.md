- [« Спостерігачі](ev.watchers.md)
- [Режими роботи періодичних спостерігачів»] (ev.periodic-modes.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Watcher callbacks

# Watcher callbacks

Усі спостерігачі можуть бути або активними (очікувати повідомлення), або
неактивними (зупиненими). Тільки активні спостерігачі можуть
викликати свої callback-функції. Усі такі функції викликаються як мінімум
з двома параметрами: `watcher` - спостерігач, та `revents` - бітова
маска прийнятих подій.

Callback-функції спостерігачів передаються до конструкторів спостерігачів
(Класи, що успадковують від [EvWatcher](class.evwatcher.md) -
[EvCheck::\_\_construct()](evcheck.construct.md),
[EvChild::\_\_construct()](evchild.construct.md) і т.д.)
Callback-функція спостерігача має відповідати наступному
прототипу:

**callback**( object `$watcher` u003d NULL , int `$revents` u003d NULL ): void

`watcher`
Примірник спостерігача (клас розширює
[EvWatcher](class.evwatcher.md)).

`revents`
[Прийняті спостерігачем
події](class.ev.md#ev.constants.watcher-revents).

Кожен тип спостерігача має власний біт в `revents`,
асоційований з ним, що дозволяє використовувати ту саму
callback-функцію для багатьох спостерігачів. Подієва маска називається
після типу, тобто. [EvChild](class.evchild.md) (або
[EvLoop::child()](evloop.child.md)) встановлює **`EV::CHILD`**,
[EvPrepare](class.evprepare.md) (або
[EvLoop::prepare()](evloop.prepare.md)) встановлює
**`Ev::PREPARE`**, [EvPeriodic](class.evperiodic.md) (або
[EvLoop::periodic()](evloop.periodic.md)) встановлює
**`Ev::PERIODIC`** і так далі, за винятком подій введення/виводу
(які встановлюють обидва біти, і **`Ev::READ`** і **`Ev::WRITE`**).

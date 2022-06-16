- [«EvFork::\_\_construct](evfork.construct.md)
- [EvIdle »](class.evidle.md)

- [PHP Manual](index.md)
- [EvFork](class.evfork.md)
- створити об'єкт класу EvFork, але не стартувати його

# EvFork::createStopped

(PECL ev \>u003d 0.2.0)

EvFork::createStopped — Створити об'єкт класу EvFork, але не стартувати
його

### Опис

final public static **EvFork::createStopped**( string `$callback` ,
string `$data` u003d ?, string `$priority` u003d ?): object

Те саме, що і [EvFork::\_\_construct()](evfork.construct.md) , але
не здійснює автоматичного старту спостерігача.

### Список параметрів

`callback`
Дивіться [функції спостерігачів callback](ev.watcher-callbacks.md) .

`data`
Довільні дані, асоційовані із спостерігачем

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Значення, що повертаються

Повертає зупинений об'єкт EvFork.

### Дивіться також

- [EvFork::\_\_construct()](evfork.construct.md) - Конструктор
спостерігача EvFork

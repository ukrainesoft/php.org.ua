- [«Event::timer](event.timer.md)
- [EventBase::\_\_construct »](eventbase.construct.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Клас EventBase

# Клас EventBase

(PECL event \>u003d 1.2.6-beta)

## Вступ

Клас **EventBase** представляє структуру подієвої бази libevent. Він
містить набір подій і може їх опитувати для визначення, які
них активні.

Кожна подієва база має *метод* або *бекенд*, які використовуються
визначення готових подій. Методи, що використовуються: `select`, `poll`
, `epoll`, `kqueue`, `devpoll`, `evport` та `win32`.

Для налаштування подійної бази або для виключення певних бекендів
Ви можете використовувати клас [EventConfig](class.eventconfig.md).

**Увага**

*НЕ* руйнуйте об'єкт **EventBase** доки не звільнені пов'язані з
`Event` ресурси. Інакше це призведе до непередбачуваних
результатам!

## Огляд класів

final class **EventBase** {

/\* Константи \*/

const int `LOOP_ONCE` u003d 1;

const int `LOOP_NONBLOCK` u003d 2;

const int `NOLOCK` u003d 1;

const int `STARTUP_IOCP` u003d 4;

const int `NO_CACHE_TIME` u003d 8;

const int `EPOLL_USE_CHANGELIST` u003d 16;

/\* Методи \*/

public [\_\_construct](eventbase.construct.md)(
[EventConfig](class.eventconfig.md) `$cfg` u003d ?)

public [dispatch](eventbase.dispatch.md)(): void

public [exit](eventbase.exit.md)( float `$timeout` u003d ?): bool

public [free](eventbase.free.md)(): void

public [getFeatures](eventbase.getfeatures.md)(): int

public [getMethod](eventbase.getmethod.md)(): string

public [getTimeOfDayCached](eventbase.gettimeofdaycached.md)(): float

public [gotExit](eventbase.gotexit.md)(): bool

public [gotStop](eventbase.gotstop.md)(): bool

public [loop](eventbase.loop.md)( int `$flags` u003d ?): bool

public [priorityInit](eventbase.priorityinit.md)( int `$n_priorities`
): bool

public [reInit](eventbase.reinit.md)(): bool

public [stop](eventbase.stop.md)(): bool

}

## Зумовлені константи

**`EventBase::LOOP_ONCE`**
Прапор використовується з методом [EventBase::loop()](eventbase.loop.md) та
означає: "блокувати, поки libevent не отримає активну подію, а
потім вийти після завершення функції зворотного дзвінка для
всіх активних подій.

**`EventBase::LOOP_NONBLOCK`**
Прапор використовується з методом [EventBase::loop()](eventbase.loop.md) та
означає: "не блокувати: подивитися, які події вже готові,
запустити зворотні дзвінки з найвищим пріоритетом, потім вийти.

**`EventBase::NOLOCK`**
Прапор конфігурації. Не виділяти блокування для подійної бази, навіть якщо
блокування настроєно.

**`EventBase::STARTUP_IOCP`**
Прапорець конфігурації лише для Windows. Дозволяє диспетчер IOCP при
старті.

**`EventBase::NO_CACHE_TIME`**
Прапор конфігурації. Замість перевірки поточного часу щоразу, коли
цикл готовий запустити функцію зворотного виклику за таймером, перевіряти його
після кожного виклику такої функції.

**`EventBase::EPOLL_USE_CHANGELIST`**
Якщо використовується бекенд `epoll`, цей прапор повідомляє, що можна
безпечно використовувати внутрішній код списку змін Libevent для
пакетного додавання та видалення з метою мінімізації кількості системних
викликів.

Встановлення цього прапора може підвищити продуктивність, але може
призвести до прояву бага Linux: не безпечно використовувати цей прапор,
якщо будь-який із файлових дескрипторів був клонований за допомогою dup() або
його аналогів. Може призвести до дивних і важко діагностованих
помилок.

Цей прапор також може бути активований установкою змінного оточення
`EVENT_EPOLL_USE_CHANGELIST`.

Цей прапор не діє, якщо ви використовуєте будь-який бекенд, крім `epoll`
.

## Зміст

- [EventBase::\_\_construct](eventbase.construct.md) - Конструктор
об'єкта EventBase
- [EventBase::dispatch](eventbase.dispatch.md) - Відправляє
очікуючі події
- [EventBase::exit](eventbase.exit.md) — Припиняє надсилання подій
- [EventBase::free](eventbase.free.md) — Визволяє ресурси,
виділені для цієї бази подій
- [EventBase::getFeatures](eventbase.getfeatures.md) - Повертає
бітову маску підтримуваних функцій
- [EventBase::getMethod](eventbase.getmethod.md) - Повертає
використовуваний метод події
- [EventBase::getTimeOfDayCached](eventbase.gettimeofdaycached.md) -
Повертає поточний час базовий подій
- [EventBase::gotExit](eventbase.gotexit.md) — Перевіряє, чи був він
цикл обробки подій завершено
- [EventBase::gotStop](eventbase.gotstop.md) — Перевіряє, чи був він
цикл обробки подій завершено
- [EventBase::loop](eventbase.loop.md) — Надсилання очікуваних подій
- [EventBase::priorityInit](eventbase.priorityinit.md) -
Встановлює кількість пріоритетів на основі подій
- [EventBase::reInit](eventbase.reinit.md) - Повторна ініціалізація
бази подій (після розгалуження)
- [EventBase::stop](eventbase.stop.md) — Повідомляє event_base
припинити надсилання подій

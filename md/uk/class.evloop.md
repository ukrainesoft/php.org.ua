- [«Evio::set](evio.set.md)
- [EvLoop::backend »](evloop.backend.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvLoop

# Клас EvLoop

(PECL ev \>u003d 0.2.0)

## Вступ

Представляє подійний цикл, який завжди відрізняється від циклу по
замовчуванням*. На відміну від циклу за замовчуванням, він не може працювати з
спостерігачами [EvChild](class.evchild.md).

Якщо доступна робота з потоками виконання, необхідно створити цикл
для кожного потоку використовуючи як батько *цикл за замовчуванням*.

*Події за замовчуванням* ініціалізується автоматично за допомогою
*Ev*. Він доступний за допомогою методів класу [Ev](class.ev.md) або з
за допомогою методу [EvLoop::defaultLoop()](evloop.defaultloop.md).

## Огляд класів

final class **EvLoop** {

/\* Властивості \*/

public `$data`;

public `$backend`;

public `$is_default_loop`;

public `$iteration`;

public `$pending`;

public `$io_interval`;

public `$timeout_interval`;

public `$ depth`;

/\* Методи \*/

public [\_\_construct](evloop.construct.md)(
int `$flags` u003d ?,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d NULL ,
float `$io_interval` u003d 0.0 ,
float `$timeout_interval` u003d 0.0
)

public [backend](evloop.backend.md)(): int

final public [check](evloop.check.md)( string `$callback` , string
`$data` u003d ?, string `$priority` u003d ?): [EvCheck](class.evcheck.md)

final public [child](evloop.child.md)(
string `$pid` ,
string `$trace` ,
string `$callback`,
string `$data` u003d ?,
string `$priority` u003d ?
): [EvChild](class.evchild.md)

public static [defaultLoop](evloop.defaultloop.md)(
int `$flags` u003d Ev::FLAG_AUTO ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d NULL ,
float `$io_interval` u003d 0. ,
float `$timeout_interval` u003d 0.
): [EvLoop](class.evloop.md)

final public [embed](evloop.embed.md)(
string `$other` ,
string `$callback` u003d ?,
string `$data` u003d ?,
string `$priority` u003d ?
): [EvEmbed](class.evembed.md)

final public [fork](evloop.fork.md)(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** , int `$priority` u003d 0 ):
[EvFork](class.evfork.md)

final public [idle](evloop.idle.md)(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** , int `$priority` u003d 0 ):
[EvIdle](class.evidle.md)

public [invokePending](evloop.invokepending.md)(): void

final public [io](evloop.io.md)(

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` ,
int `$events` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvIo](class.evio.md)

public [loopFork](evloop.loopfork.md)(): void

public [now](evloop.now.md)(): float

public [nowUpdate](evloop.nowupdate.md)(): void

final public [periodic](evloop.periodic.md)(
float `$offset`,
float `$interval`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvPeriodic](class.evperiodic.md)

final public [prepare](evloop.prepare.md)(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** , int `$priority` u003d 0 ):
[EvPrepare](class.evprepare.md)

public [resume](evloop.resume.md)(): void

public [run](evloop.run.md)( int `$flags` u003d 0 ): void

final public [signal](evloop.signal.md)(
int `$signum` ,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvSignal](class.evsignal.md)

final public [stat](evloop.stat.md)(
string `$path`,
float `$interval`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvStat](class.evstat.md)

public [stop](evloop.stop.md)( int `$how` u003d ?): void

public [suspend](evloop.suspend.md)(): void

final public [timer](evloop.timer.md)(
float `$after`,
float `$repeat`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvTimer](class.evtimer.md)

public [verify](evloop.verify.md)(): void

}

## Властивості

`data`
Довільні дані, додані циклу

`backend`
* Тільки читання *. [Прапори
бекенда](class.ev.md#ev.constants.watcher-backends) вказують який
подієвий бекенд використовується.

`is_default_loop`
* Тільки читання *. Якщо **`true`**, то це цикл за замовчуванням.

`iteration`
Поточний лічильник ітерацій. Дивись [Ev::iteration()](ev.iteration.md)

`pending`
Кількість спостерігачів, що очікують. **`0`** означає, що очікують
спостерігачі відсутні.

`io_interval`
Вищі значення `io_interval` дозволяють *libev* витрачати більше
часу для збору подій [EvIo](class.evio.md), що дозволить
обробити більше подій за одну ітерацію заплативши за це збільшеними
затримки. Час очікування (і [EvPeriodic](class.evperiodic.md) та
[EvTimer](class.evtimer.md)) не буде порушено. Встановлення в ненульове
значення додати додатковий виклик `sleep()` у більшість ітерацій
циклу. Час сну гарантує, що *libev* не передаватиме події
[EvIo](class.evio.md) частіше, ніж один раз за цей період, у середньому.
Для більшості програм хорошим значенням `io_interval` буде значення
близько **`0.1`**, цього достатньо для більшості інтерактивних серверів
(Не для ігор). Зазвичай ви не помітите жодної різниці, якщо встановіть його
менше **`0.01`**, тому що це значення буде близько до мінімального
інтервалу обчислюваного часу більшості систем.

Також читайте [» ФУНКЦІЇ УПРАВЛІННЯ ПОДІЙНИМИ
ЦИКЛАМИ](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#FUNCTIONS_CONTROLLING_EVENT_LOOPS).

`timeout_interval`
Вищі значення `timeout_interval` дозволять *libev* витрачати
більше часу для збору перевищеного часу очікування за рахунок
збільшення затримок/джиттерів/неточностей (функція зворотного виклику
спостерігача буде викликано пізніше). Спостерігачі [EvIo](class.evio.md) не
будуть порушені. Збільшення цього значення не викликає перевитрати
ресурсів у *libev*. Також читайте [» ФУНКЦІЇ УПРАВЛІННЯ ПОДІЙНИМИ
ЦИКЛАМИ](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#FUNCTIONS_CONTROLLING_EVENT_LOOPS).

`depth`
Глибина рекурсії. Дивіться [Ev::depth()](ev.depth.md).

## Зміст

- [EvLoop::backend](evloop.backend.md) — Повертає ціле число,
описує бекенд, використовуваний libev
- [EvLoop::check](evloop.check.md) — Створює об'єкт EvCheck,
пов'язаний з поточним екземпляром циклу подій
- [EvLoop::child](evloop.child.md) — Створює об'єкт EvChild,
пов'язаний із поточним циклом подій
- [EvLoop::\_\_construct](evloop.construct.md) - Конструктор об'єкта
циклу подій
- [EvLoop::defaultLoop](evloop.defaultloop.md) — Повертає або
створює цикл подій за умовчанням
- [EvLoop::embed](evloop.embed.md) — Створює екземпляр спостерігача
EvEmbed, пов'язаний з поточним об'єктом EvLoop
- [EvLoop::fork](evloop.fork.md) — Створює об'єкт спостерігача
EvFork, пов'язаний з поточним екземпляром циклу подій
- [EvLoop::idle](evloop.idle.md) — Створює об'єкт спостерігача
EvIdle, пов'язаний з поточним екземпляром циклу подій
- [EvLoop::invokePending](evloop.invokepending.md) — Викликає всіх
спостерігачів, що очікують, при скиданні їх відкладеного стану
- [EvLoop::io](evloop.io.md) — Створює об'єкт спостерігача EvIo,
пов'язаний з поточним екземпляром циклу подій
- [EvLoop::loopFork](evloop.loopfork.md) — Викликається після
розгалуження
- [EvLoop::now](evloop.now.md) — Повертає поточний "event loop"
time"
- [EvLoop::nowUpdate](evloop.nowupdate.md) — Встановлює поточне
час, запитуючи ядро, оновлюючи час, що повертається EvLoop::now
процесі
- [EvLoop::periodic](evloop.periodic.md) — Створює об'єкт
спостерігача EvPeriodic, пов'язаний з поточним екземпляром циклу
подій
- [EvLoop::prepare](evloop.prepare.md) — Створення об'єкта спостерігача
EvPrepare, пов'язаний з поточним екземпляром циклу подій
- [EvLoop::resume](evloop.resume.md) — Поновлює раніше
призупинений цикл подій
- [EvLoop::run](evloop.run.md) — Перевіряє події та викликає
callback-функції у циклі
- [EvLoop::signal](evloop.signal.md) — Створення об'єкта спостерігача
EvSignal, пов'язаний з поточним екземпляром циклу подій
- [EvLoop::stat](evloop.stat.md) — Створює об'єкт спостерігача
EvStat, пов'язаний з поточним екземпляром циклу подій
- [EvLoop::stop](evloop.stop.md) — Зупиняє цикл подій
- [EvLoop::suspend](evloop.suspend.md) — Припиняє цикл
- [EvLoop::timer](evloop.timer.md) — Створення об'єкта спостерігача
EvTimer, пов'язаний з поточним екземпляром циклу подій
- [EvLoop::verify](evloop.verify.md) — Виконує внутрішні перевірки
узгодженості (для налагодження)

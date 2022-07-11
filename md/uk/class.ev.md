- [« Режими роботи періодичних спостерігачів](ev.periodic-modes.md)
- [Ev::backend »](ev.backend.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас Ev

# Клас Ev

(PECL ev \>u003d 0.2.0)

## Вступ

Клас EV є статичним класом, забезпечуючи доступ до циклу
замовчуванням та деяким поширеним операціям.

## Огляд класів

final class **Ev** {

/\* Константи \*/

const int `FLAG_AUTO` u003d 0;

const int `FLAG_NOENV` u003d 16777216;

const int `FLAG_FORKCHECK` u003d 33554432;

const int `FLAG_NOINOTIFY` u003d 1048576;

const int `FLAG_SIGNALFD` u003d 2097152;

const int `FLAG_NOSIGMASK` u003d 4194304;

const int `RUN_NOWAIT` u003d 1;

const int `RUN_ONCE` u003d 2;

const int `BREAK_CANCEL` u003d 0;

const int `BREAK_ONE` u003d 1;

const int `BREAK_ALL` u003d 2;

const int `MINPRI` u003d -2;

const int `MAXPRI` u003d 2;

const int `READ` u003d 1;

const int `WRITE` u003d 2;

const int `TIMER` u003d 256;

const int `PERIODIC` u003d 512;

const int `SIGNAL` u003d 1024;

const int `CHILD` u003d 2048;

const int `STAT` u003d 4096;

const int `IDLE` u003d 8192;

const int `PREPARE` u003d 16384;

const int `CHECK` u003d 32768;

const int `EMBED` u003d 65536;

const int `CUSTOM` u003d 16777216;

const int `ERROR` u003d 2147483648;

const int `BACKEND_SELECT` u003d 1;

const int `BACKEND_POLL` u003d 2;

const int `BACKEND_EPOLL` u003d 4;

const int `BACKEND_KQUEUE` u003d 8;

const int `BACKEND_DEVPOLL` u003d 16;

const int `BACKEND_PORT` u003d 32;

const int `BACKEND_ALL` u003d 63;

const int `BACKEND_MASK` u003d 65535;

/\* Методи \*/

final public static [backend](ev.backend.md)(): int

final public static [depth](ev.depth.md)(): int

final public static [embeddableBackends](ev.embeddablebackends.md)():
int

final public static [feedSignal](ev.feedsignal.md)( int `$signum` ):
void

final public static [feedSignalEvent](ev.feedsignalevent.md)( int
`$signum` ): void

final public static [iteration](ev.iteration.md)(): int

final public static [now](ev.now.md)(): float

final public static [nowUpdate](ev.nowupdate.md)(): void

final public static
[recommendedBackends](ev.recommendedbackends.md)(): int

final public static [resume](ev.resume.md)(): void

final public static [run](ev.run.md)( int `$flags` u003d ?): void

final public static [sleep](ev.sleep.md)( float `$seconds`): void

final public static [stop](ev.stop.md)( int `$how` u003d ?): void

final public static [supportedBackends](ev.supportedbackends.md)():
int

final public static [suspend](ev.suspend.md)(): void

final public static [time](ev.time.md)(): float

final public static[verify](ev.verify.md)(): void

}

## Зумовлені константи

Прапори, що передаються під час створення циклу:

**`Ev::FLAG_AUTO`**
Задає прапори значення за замовчуванням

**`Ev::FLAG_NOENV`**
Якщо прапор використовується (або програма запускає setuid або setgid), то
`libev` не дивиться на змінну оточення `LIBEV_FLAGS`. В протилежному
випадку (за замовчуванням), якщо знайдено `LIBEV_FLAGS`, то він повністю
перевизначає прапори. Корисно для тестів продуктивності та пошуку
помилок.

**`Ev::FLAG_FORKCHECK`**
Примушує libev перевіряти розгалуження в кожній ітерації замість виклику
[EvLoop::fork()](evloop.fork.md) вручну. Це працює шляхом виклику
`getpid()` на кожній ітерації циклу, і, таким чином, це може бути
уповільнити роботу циклу подій з великою кількістю ітерацій циклу, але
зазвичай не сильно. Цей прапор не може бути перевизначений або вказаний у
змінного середовища `LIBEV_FLAGS`.

**`Ev::FLAG_NOINOTIFY`**
Якщо цей прапор вказано, то 'libev' не намагатиметься використовувати API
`inotify` для своїх спостерігачів
[» ev_stat](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#code_ev_stat_code_did_the_file_attri)
Прапор може бути корисним для збереження файлових дескрипторів inotify,
в іншому випадку кожен цикл, який використовує спостерігачів `ev_stat`, буде
споживати один дескриптор `inotify`.

**`Ev::FLAG_SIGNALFD`**
Якщо прапор вказаний, то `libev` намагатиметься використовувати API `signalfd`
для своїх спостерігачів
[» ev_signal](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#code_ev_signal_code_signal_me_when_a)
(і
[» ev_child](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#code_ev_child_code_watch_out_for_pro)).
API передає сигнали синхронно, що робить його швидшим і, можливо,
дозволить отримати дані із черги сигналів, а також дозволяє
спростити обробку сигналів за допомогою потоків, оскільки сигнали
коректно блокуються у потоках. `Signalfd` не використовується по
замовчуванням.

**`Ev::FLAG_NOSIGMASK`**
Якщо вказаний прапор, то libev уникатиме зміни маски сигналу. В
зокрема, це застосовується, щоб перед отриманням сигналу переконатися,
що він розблокований.

Така поведінка корисна для обробки сигналів користувача або
обробки сигналів лише певних потоків.

Прапори, що передаються в [Ev::run()](ev.run.md), або
[EvLoop::run()](evloop.run.md)

**`Ev::RUN_NOWAIT`**
Означає, що цикл подій шукатиме і оброблятиме нові події, а
також будь-які чекають виконання події з них, але не буде чекати і
блокувати процес у разі, якщо не було жодних подій та завершиться
після однієї ітерації циклу. Це іноді корисно для опитування та обробки
нових подій під час виконання тривалих обчислень, зберігаючи при
це можливість взаємодії з програмою.

**`Ev::RUN_ONCE`**
Означає, що цикл подій шукатиме нові події (очікуючи, у разі
необхідності) і обробляти ці та будь-які вже очікувані події з них.
Він блокуватиме процес, доки не надійде принаймні одне
нова подія (це може бути внутрішня подія libev, тому немає
ніякої гарантії, що буде викликана задана callback-функція) та
завершиться після однієї ітерації циклу.

Прапори, що передаються в [Ev::stop()](ev.stop.md) , або
[EvLoop::stop()](evloop.stop.md)

**`Ev::BREAK_CANCEL`**
Скасування операції переривання.

**`Ev::BREAK_ONE`**
Повертає найглибший запит [Ev::run()](ev.run.md) (або
[EvLoop::run()](evloop.run.md) ).

**`Ev::BREAK_ALL`**
Завершує всі вкладені дзвінки [Ev::run()](ev.run.md) (або
[EvLoop::run()](evloop.run.md) ).

Пріоритети спостерігачів:

**`Ev::MINPRI`**
Мінімально допустимий пріоритет спостерігача.

**`Ev::MAXPRI`**
Найбільш допустимий пріоритет спостерігача.

Побутові маски (отриманих) подій:

**`Ev::READ`**
Дескриптор файлу в спостерігачі [EvIo](class.evio.md) доступний для
читання.

**`Ev::WRITE`**
Дескриптор файлу в спостерігачі [EvIo](class.evio.md) доступний для
запису.

**`Ev::TIMER`**
[EvTimer](class.evtimer.md) спостерігає за перевищенням ліміту часу.

**`Ev::PERIODIC`**
[EvPeriodic](class.evperiodic.md) спостерігає за перевищенням ліміту
часу.

**`Ev::SIGNAL`**
Вказаний в [EvSignal::\_\_construct()](evsignal.construct.md) сигнал
отримано.

**`Ev::CHILD`**
`pid` Вказаний у [EvChild::\_\_construct()](evchild.construct.md)
отримано та статус змінено.

**`Ev::STAT`**
Шлях, вказаний у спостерігачі [EvStat](class.evstat.md) змінив свої
атрибути.

**`Ev::IDLE`**
Спостерігач [EvIdle](class.evidle.md) працює, коли решта
спостерігачі нічого не роблять.

**`Ev::PREPARE`**
Усі спостерігачі [EvPrepare](class.evprepare.md) викликані рівно перед
стартом [Ev::run()](ev.run.md) таким чином, спостерігачі
[EvPrepare](class.evprepare.md) є останніми викликаними
спостерігачами перед тим, як цикл подій засне чи опитає нові
події.

**`Ev::CHECK`**
Усі спостерігачі [EvCheck](class.evcheck.md) поміщені в чергу відразу
після того, як [Ev::run()](ev.run.md) зібрав нові події, але до
того, як вони викличуть будь-яку callback-функцію для отриманих
подій. Таким чином, спостерігачі [EvCheck](class.evcheck.md) будуть
викликані раніше, ніж будь-які інші спостерігачі з таким самим або більше
низьким пріоритетом у цій ітерації циклу подій.

**`Ev::EMBED`**
Вбудований цикл подій, заданий у спостерігачі
[EvEmbed](class.evembed.md) вимагає уваги.

**`Ev::CUSTOM`**
Ніколи не надсилається (або іншим чином використовується) бібліотекою
`libev` самостійно, але може вільно використовуватись користувачами
`libev` для сигналізуючих спостерігачів (тобто за допомогою
[EvWatcher::feed()](evwatcher.feed.md) ).

**`Ev::ERROR`**
Відбулася невідома помилка та спостерігача буде зупинено. Може
статися через некоректний запуск спостерігача, тому що `libev`
вичерпав ліміт по пам'яті, через закритий дескриптор файлу або по
будь-якої ще причини. `Libev` вважає, що ці помилки програми.
Також читайте розділ [» АНАТОМІЯ
СПОСТЕРІГАЧІВ](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#ANATOMY_OF_A_WATCHER_CONTENT)

Прапори бекенда:

**`Ev::BACKEND_SELECT`**
`вибір бекенда - select(2)`

**`Ev::BACKEND_POLL`**
`опитування бекенда - poll(2)`

**`Ev::BACKEND_EPOLL`**
Специфічний для Linux бекенд `epoll(7)` для ядер до та після 2.6.9

**`Ev::BACKEND_KQUEUE`**
`kqueue` - бекенде, що використовується в більшості систем BSD. Спостерігач
[EvEmbed](class.evembed.md) може бути використаний для вставки одного
циклу (з бекендом kqueue) до іншого. Наприклад, можна спробувати створити
цикл подій з бекендом `kqueue` та використовувати його тільки для сокетів.

**`Ev::BACKEND_DEVPOLL`**
Бекенд Solaris 8. Поки що не реалізований.

**`Ev::BACKEND_PORT`**
Механізм порту подій із гарним масштабуванням у Solaris 10.

**`Ev::BACKEND_ALL`**
Пробувати всі бекенди (крім зіпсованих). Не рекомендується використовувати
безпосередньо. Тут потрібно використовувати побітові операції (тобто.
**`Ev::BACKEND_ALL`** & \~ **`Ev::BACKEND_KQUEUE`** ). Використати
[Ev::recommendedBackends()](ev.recommendedbackends.md) , чи не
ставити ніякого бекенда взагалі.

**`Ev::BACKEND_MASK`**
Чи не бекенд, але маска для вибору всіх біт бекендів зі значення `flags`,
для виключення будь-яких бекендів. (тобто коли модифікуєте змінну
оточення `LIBEV_FLAGS`).

> **Примітка**:
>
> Для циклу за замовчуванням, під час фази ініціалізації модуля `Ev`,
> реєструється виклик
> [» ev_loop_fork](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#FUNCTIONS_CONTROLLING_EVENT_LOOPS_CO)
> за допомогою `pthread_atfork` (якщо є).

> **Примітка**:
>
> Є методи, що дозволяють отримати доступ до циклу подій
> замовчуванням* у класі **Ev** (наприклад,
> [Ev::iteration()](ev.iteration.md), [Ev::depth()](ev.depth.md) та
> і т.д.). Для *користувацьких циклів* (створених за допомогою
> **EvLoop::\_\_ construct()**) ці значення можуть бути доступні через
> відповідні властивості та методи класу [EvLoop](class.evloop.md).
>
> Примірник циклу подій за замовчуванням може бути вилучений за допомогою
> метод [EvLoop::defaultLoop()](evloop.defaultloop.md).

## Зміст

- [Ev::backend](ev.backend.md) - Повертає ціле число, що описує
бекенд, використовуваний libev
- [Ev::depth](ev.depth.md) — Здобути глибину рекурсії
- [Ev::embeddableBackends](ev.embeddablebackends.md) - Повертає
набір бекендів, які можна вбудувати в інші цикли подій
- [Ev::feedSignal](ev.feedsignal.md) — Передаємо подію сигналу в Ev
- [Ev::feedSignalEvent](ev.feedsignalevent.md) — Надіслати подію
сигналу в цикл за замовчуванням
- [Ev::iteration](ev.iteration.md) — Отримати кількість
проведених опитувань циклу за умовчанням щодо нових подій
- [Ev::now](ev.now.md) — Отримати час початку останньої ітерації
циклу за замовчуванням
- [Ev::nowUpdate](ev.nowupdate.md) — Встановлює поточний час
шляхом запиту до ядра в процесі оновлюючи час, що повертається Ev::now
- [Ev::recommendedBackends](ev.recommendedbackends.md) — Отримати
бітову маску рекомендованих бекендів для даної платформи
- [Ev::resume](ev.resume.md) — Відновити виконання
призупиненого раніше циклу подій за умовчанням
- [Ev::run](ev.run.md) — Розпочати перевірку наявності подій та виклик
callback-функцій циклу за замовчуванням
- [Ev::sleep](ev.sleep.md) — Блокувати процес задану кількість
секунд
- [Ev::stop](ev.stop.md) — Зупинити цикл подій за замовчуванням
- [Ev::supportedBackends](ev.supportedbackends.md) — Повертає
набір бекендів, що підтримуються поточною конфігурацією libev
- [Ev::suspend](ev.suspend.md) — Призупинити цикл подій
замовчуванням
- [Ev::time](ev.time.md) — Повертає поточний час до
секундах (дрібне число) минуле з початку епохи Unix
- [Ev::verify](ev.verify.md) — Виконує внутрішню перевірку
цілісності (для налагодження)

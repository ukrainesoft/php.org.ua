- [«EvStat::stat](evstat.stat.md)
- [EvTimer::again »](evtimer.again.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Клас EvTimer

# Клас EvTimer

(PECL ev \>u003d 0.2.0)

## Вступ

Спостерігачі **EvTimer** - це звичайні відносні таймери, які
створюють подію через заданий час і, опціонально, періодично
повторюють через задані інтервали часу.

Таймери базуються на реальному часі, тобто якщо задати таймер з
повторами раз на годину і скинути системний годинник на *Січень минулого року*,
то таймер буде також спрацьовувати через (грубо) годину. "Грубо" тому,
що відстежити стрибки часу досить складно та деякі неточності
неминучі.

Callback-функція гарантовано запуститься лише після того, як
пройде перевищення заданого часу очікування (не рівно в той же момент,
т.к. на системах з годинником з низькою роздільною здатністю можуть спостерігатися
невеликі затримки). Якщо кілька таймерів будуть готові спрацювати в
одну і ту ж ітерацію подієвого циклу, то callback-функції
спостерігачів буде запущено в порядку часу спрацьовування та з урахуванням
пріоритету (але це не працює, якщо callback-функції викликають
[EvLoop::run()](evloop.run.md) рекурсивно).

Самі по собі таймери намагаються всіма силами уникнути накопичення
помилки, тобто якщо таймер налаштований спрацьовувати кожні **`10`**
секунд, то зазвичай він спрацьовує точно з **`10`** секундним інтервалом.
Однак якщо скрипт не встигає за таймером, оскільки його робота
займає більше **`10`** секунд, то таймер спрацює не частіше ніж один раз
за ітерацію подієвого циклу.

## Огляд класів

class **EvTimer** extends [EvWatcher](class.evwatcher.md) {

/\* Властивості \*/

public `$repeat`;

public `$ remaining`;

/\* Наслідувані властивості \*/

public `$is_active`;

public `$data`;

public `$is_pending`;

public `$priority`;

/\* Методи \*/

public [\_\_construct](evtimer.construct.md)(
float `$after`,
float `$repeat`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
)

public [again](evtimer.again.md)(): void

final public static [createStopped](evtimer.createstopped.md)(
float `$after`,
float `$repeat`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
): [EvTimer](class.evtimer.md)

public [set](evtimer.set.md)( float `$after` , float `$repeat` ): void

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

`repeat`
Якщо **`0.0`**, то таймер автоматично зупиниться, коли буде
перевищено час очікування. Якщо більше нуля, то таймер автоматично
перейде в режим нескінченного повторення через задані інтервали, доки
ви його самостійно не зупиніть.

`remaining`
Повертає час, що залишився до спрацьовування таймера. Якщо таймер
активний, то цей час буде вважатися щодо часу поточного
подієвого циклу, а якщо таймер не активний, то воно буде рівним
конфігурованого значення часу очікування.

Тобто, після того, як створено екземпляр **EvTimer** з `after` рівним
**`5.0`** та `repeat` рівним **`7.0`**, `remaining` поверне **`5.0`**.
Коли таймер запуститься і пройде 1 секунда, remaining поверне
**`4.0`**. коли таймер закінчиться і буде перезапущено, буде "грубо"
повернуто **`7.0`** (зазвичай трохи менше, тому що запуск
callback-функції займає час) і т.д.

## Зміст

- [EvTimer::again](evtimer.again.md) — Перезапускає таймер
спостерігача
- [EvTimer::\_\_construct](evtimer.construct.md) - Конструктор
об'єкта спостерігача EvTimer
- [EvTimer::createStopped](evtimer.createstopped.md) — Створює
зупинений спостерігач EvTimer
- [EvTimer::set](evtimer.set.md) — Налаштовує спостерігача

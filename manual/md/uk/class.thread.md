- [« Threaded::wait](threaded.wait.md)
- [Thread::getCreatorId »](thread.getcreatorid.md)

- [PHP Manual](index.md)
- [pthreads](book.pthreads.md)
- Клас Thread

# Клас Thread

(PECL pthreads \>u003d 2.0.0)

## Вступ

Коли викликаний стартовий метод Thread, код методу run буде запущений у
окремому потоці, паралельно.

Після відпрацювання методу run, Thread відразу ж завершить роботу. Він буде
приєднаний шляхом створення Thread у потрібний час.

**Увага**

Якщо покладатися на двигун для визначення, коли Thread буде
приєднаний, можна зіткнутися з несподіваною поведінкою. Тому
необхідно, по можливості, керувати приєднанням у явному вигляді.

## Огляд класів

class **Thread** extends [Threaded](class.threaded.md) implements
[Countable](class.countable.md),
[Traversable](class.traversable.md),
[ArrayAccess](class.arrayaccess.md) {

/\* Методи \*/

public [getCreatorId](thread.getcreatorid.md)(): int

public static [getCurrentThread](thread.getcurrentthread.md)():
[Thread](class.thread.md)

public static [getCurrentThreadId](thread.getcurrentthreadid.md)():
int

public [getThreadId](thread.getthreadid.md)(): int

public [isJoined](thread.isjoined.md)(): bool

public [isStarted](thread.isstarted.md)(): bool

public [join](thread.join.md)(): bool

public [start](thread.start.md)(int `$options` u003d ?): bool

/\* Наслідувані методи \*/

public [Threaded::chunk](threaded.chunk.md)(int `$size`, bool
`$preserve`): array

public [Threaded::count](threaded.count.md)(): int

public [Threaded::extend](threaded.extend.md)(string `$class`): bool

public [Threaded::isRunning](thread.isrunning.md)(): bool

public [Threaded::isTerminated](threaded.isterminated.md)(): bool

public
[Threaded::merge](threaded.merge.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$from`, bool `$overwrite` u003d ?): bool

public [Threaded::notify](threaded.notify.md)(): bool

public [Threaded::notifyOne](threaded.notifyone.md)(): bool

public [Threaded::pop](threaded.pop.md)(): bool

public [Threaded::run](threaded.run.md)(): void

public [Threaded::shift](threaded.shift.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[Threaded::synchronized](threaded.synchronized.md)([Closure](class.closure.md)
`$block`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [Threaded::wait](threaded.wait.md)(int `$timeout` u003d ?): bool

}

## Зміст

- [Thread::getCreatorId](thread.getcreatorid.md) - Ідентифікація
- [Thread::getCurrentThread](thread.getcurrentthread.md) -
Ідентифікація
- [Thread::getCurrentThreadId](thread.getcurrentthreadid.md) -
Ідентифікація
- [Thread::getThreadId](thread.getthreadid.md) - Ідентифікація
- [Thread::isJoined](thread.isjoined.md) — Визначення стану
- [Thread::isStarted](thread.isstarted.md) — Визначення стану
- [Thread::join](thread.join.md) - Синхронізація
- [Thread::start](thread.start.md) - Виконання

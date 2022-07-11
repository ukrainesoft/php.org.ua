- [« Thread::start](thread.start.md)
- [Worker::collect »](worker.collect.md)

- [PHP Manual](index.md)
- [pthreads](book.pthreads.md)
- Клас Worker

# Клас Worker

(PECL pthreads \>u003d 2.0.0)

## Вступ

Робочі потоки мають постійний контекст, тому здебільшого
їх слід використовувати поверх потоків.

Коли Worker запущено, буде виконано метод run, але Thread не завершиться,
доки не буде виконано одну з наступних умов:

- Worker зникне з області видимості (не залишиться жодного посилання
на нього)

- програміст викличе функцію зупинки

- скрипт завершить роботу

Це означає, що програміст може перевикористовувати контекст під час
виконання. Розміщення об'єкта на стек об'єкта Worker призведе до запуску
методу run цього об'єкта.

## Огляд класів

class **Worker** extends [Thread](class.thread.md) implements
[Traversable](class.traversable.md),
[Countable](class.countable.md), [ArrayAccess](class.arrayaccess.md)
{

/\* Методи \*/

public
[collect](worker.collect.md)([Callable](language.types.callable.md)
`$collector` u003d ?): int

public [getStacked](worker.getstacked.md)(): int

public [isShutdown](worker.isshutdown.md)(): bool

public [shutdown](worker.shutdown.md)(): bool

public [stack](worker.stack.md)([Threaded](class.threaded.md)
`&$work`): int

public [unstack](worker.unstack.md)(): int

/\* Наслідувані методи \*/

public [Thread::getCreatorId](thread.getcreatorid.md)(): int

public static
[Thread::getCurrentThread](thread.getcurrentthread.md)():
[Thread](class.thread.md)

public static
[Thread::getCurrentThreadId](thread.getcurrentthreadid.md)(): int

public [Thread::getThreadId](thread.getthreadid.md)(): int

public [Thread::isJoined](thread.isjoined.md)(): bool

public [Thread::isStarted](thread.isstarted.md)(): bool

public [Thread::join](thread.join.md)(): bool

public [Thread::start](thread.start.md)(int `$options` u003d ?): bool

}

## Зміст

- [Worker::collect](worker.collect.md) — Зібрати посилання на
завершені завдання
- [Worker::getStacked](worker.getstacked.md) — Повертає поточний
розмір стеку
- [Worker::isShutdown](worker.isshutdown.md) — Визначення стану
- [Worker::shutdown](worker.shutdown.md) — Зупинити Worker
- [Worker::stack](worker.stack.md) — Покласти завдання на стек
- [Worker::unstack](worker.unstack.md) — Забрати завдання зі стеку

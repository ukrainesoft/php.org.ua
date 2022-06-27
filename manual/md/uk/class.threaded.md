- [«Зумовлені константи](pthreads.constants.md)
- [Threaded::chunk »](threaded.chunk.md)

- [PHP Manual](index.md)
- [pthreads](book.pthreads.md)
- Клас Threaded

# Клас Threaded

(PECL pthreads \>u003d 2.0.0)

## Вступ

Об'єкти Threaded формують базис здатності pthreads запускати
код користувача в нових потоках. Клас містить методи
синхронізації та різні корисні інтерфейси.

Найважливіше, що об'єкти Threaded забезпечують безпеку для
розробника. Усі операції у тих об'єкта - безпечні.

## Огляд класів

class **Threaded** implements [Collectable](class.collectable.md),
[Traversable](class.traversable.md),
[Countable](class.countable.md), [ArrayAccess](class.arrayaccess.md)
{

/\* Методи \*/

public [chunk](threaded.chunk.md)(int `$size`, bool `$preserve`):
array

public [count](threaded.count.md)(): int

public [extend](threaded.extend.md)(string `$class`): bool

public [isRunning](thread.isrunning.md)(): bool

public [isTerminated](threaded.isterminated.md)(): bool

public
[merge](threaded.merge.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$from`, bool `$overwrite` u003d ?): bool

public [notify](threaded.notify.md)(): bool

public [notifyOne](threaded.notifyone.md)(): bool

public [pop](threaded.pop.md)(): bool

public [run](threaded.run.md)(): void

public [shift](threaded.shift.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[synchronized](threaded.synchronized.md)([Closure](class.closure.md)
`$block`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [wait](threaded.wait.md)(int `$timeout` u003d ?): bool

}

## Зміст

- [Threaded::chunk](threaded.chunk.md) - Обробка
- [Threaded::count](threaded.count.md) - Обробка
- [Threaded::extend](threaded.extend.md) — Обробка під час
виконання
- [Threaded::isRunning](thread.isrunning.md) — Визначення стану
- [Threaded::isTerminated](threaded.isterminated.md) — Визначення
стану
- [Threaded::merge](threaded.merge.md) - Обробка
- [Threaded::notify](threaded.notify.md) — Синхронізація
- [Threaded::notifyOne](threaded.notifyone.md) — Синхронізація
- [Threaded::pop](threaded.pop.md) — Обробка
- [Threaded::run](threaded.run.md) — Виконання
- [Threaded::shift](threaded.shift.md) — Обробка
- [Threaded::synchronized](threaded.synchronized.md) — Синхронізація
- [Threaded::wait](threaded.wait.md) — Синхронізація

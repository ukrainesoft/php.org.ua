- [« Collectable::isGarbage](collectable.isgarbage.md)
- [Pool::collect »](pool.collect.md)

- [PHP Manual](index.md)
- [pthreads](book.pthreads.md)
- Клас Pool

# Клас Pool

(PECL pthreads \>u003d 2.0.0)

## Вступ

Об'єкт Pool є контейнером для зберігання об'єктів Worker,
управління ними та регулювання їх кількості.

Контейнеризація є найвищим рівнем абстракції над
функціоналом Worker включаючи управління посиланнями в коректному для
pthreads вигляді.

## Огляд класів

class **Pool** {

/\* Властивості \*/

protected `$size`;

protected `$class`;

protected `$workers`;

protected `$ctor`;

protected `$last`;

/\* Методи \*/

public [\_\_construct](pool.construct.md)(int `$size`, string `$class`
u003d ?, array `$ctor` u003d ?)

public
[collect](pool.collect.md)([Callable](language.types.callable.md)
`$collector` u003d ?): int

public [resize](pool.resize.md)(int `$size`): void

public [shutdown](pool.shutdown.md)(): void

public [submit](pool.submit.md)([Threaded](class.threaded.md)
`$task`): int

public [submitTo](pool.submitTo.md)(int `$worker`,
[Threaded](class.threaded.md) `$task`): int

}

## Властивості

`size`
максимальна кількість об'єктів Worker

`class`
клас Worker

`workers`
посилання на об'єкти Worker

`ctor`
аргументи конструктора нових об'єктів Worker

`last`
зміщення останнього використаного Worker у workers

## Зміст

- [Pool::collect](pool.collect.md) — Збирає посилання на виконані
завдання
- [Pool::\_\_construct](pool.construct.md) - Створює новий пул
воркерів
- [Pool::resize](pool.resize.md) — Змінює розмір пула
- [Pool::shutdown](pool.shutdown.md) — Вимикає всі воркери
- [Pool::submit](pool.submit.md) — Відправляє об'єкт на виконання
- [Pool::submitTo](pool.submitTo.md) — Надсилає завдання конкретному
воркеру для виконання

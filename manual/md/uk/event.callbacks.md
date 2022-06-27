- [« Про постійні(persistent) події](event.persistence.md)
- [Створення подій для сигналів
»](event.constructing.signal.events.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Callback-функції

# Callback-функції

Якщо для події зареєстрована функція callback, вона буде викликана
коли подія перейде до активного статусу. Для прив'язування функції до
події, необхідно передати її як параметр
[callable](language.types.callable.md)
[Event::\_\_construct()](event.construct.md) або
[Event::set()](event.set.md) або в один із фабричних методів, таких
як [Event::timer()](event.timer.md) .

Функція повинна відповідати наступному прототипу:

**callback**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` u003d **`null`** , int `$what` u003d ?,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d **`null`** ): void

`fd`
Дескриптор файлу, потокового ресурсу чи сокету, пов'язаний із подією.
Для подій сигналів `fd` збігається із номером сигналу.

`what`
Побітова маска всіх оброблюваних подій.

`arg`
Дані користувача.

Для [Event::timer()](event.timer.md) callback-функція повинна
відповідати наступному прототипу:

**callback**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d **`null`** ): void

`arg`
Дані користувача.

Для [Event::signal()](event.signal.md) callback-функція повинна
відповідати наступному прототипу:

**callback**( int `$signum` u003d ?,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d **`null`** ): void

`signum`
Номер сигналу (наприклад, **SIGTERM**).

`arg`
Дані користувача.

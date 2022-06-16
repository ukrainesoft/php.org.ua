- [« Swoole\Coroutine::suspend](swoole-coroutine.suspend.md)
- [Swoole\Event::add »](swoole-event.add.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Event

# Клас Swoole\Event

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Event** {

/\* Методи \*/

public static [add](swoole-event.add.md)(
int `$fd`,
[callable](language.types.callable.md) `$read_callback`,
[callable](language.types.callable.md) `$write_callback` u003d ?,
string `$events` u003d ?
): bool

public static
[defer](swoole-event.defer.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$callback`): void

public static [del](swoole-event.del.md)(string `$fd`): bool

public static [exit](swoole-event.exit.md)(): void

public static [set](swoole-event.set.md)(
int `$fd`,
string `$read_callback` u003d ?,
string `$write_callback` u003d ?,
string `$events` u003d ?
): bool

public static [wait](swoole-event.wait.md)(): void

public static [write](swoole-event.write.md)(string `$fd`, string
`$data`): void

}

## Зміст

- [Swoole\Event::add](swoole-event.add.md) - Додає нові
callback-функції сокету в EventLoop
- [Swoole\Event::defer](swoole-event.defer.md) - Додає
callback-функцію у наступний цикл подій
- [Swoole\Event::del](swoole-event.del.md) — Видаляє все
callback-функції події сокету
- [Swoole\Event::exit](swoole-event.exit.md) — Виходить із циклу
подій, доступне тільки на стороні клієнта
- [Swoole\Event::set](swoole-event.set.md) — Оновлює
callback-функції події сокету
- [Swoole\Event::wait](swoole-event.wait.md) — Опис
- [Swoole\Event::write](swoole-event.write.md) — Записує дані в
сокет

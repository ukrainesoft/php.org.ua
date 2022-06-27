- [« Swoole\Buffer::write](swoole-buffer.write.md)
- [Swoole\Channel::\_\_construct »](swoole-channel.construct.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Channel

# Клас Swoole\Channel

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Channel** {

/\* Методи \*/

public [\_\_destruct](swoole-channel.destruct.md)(): void

public [pop](swoole-channel.pop.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [push](swoole-channel.push.md)(string `$data`): bool

public [stats](swoole-channel.stats.md)(): array

}

## Зміст

- [Swoole\Channel::\_\_construct](swoole-channel.construct.md) -
Створює канал Swoole
- [Swoole\Channel::\_\_destruct](swoole-channel.destruct.md) -
Знищує канал Swoole
- [Swoole\Channel::pop](swoole-channel.pop.md) — Читає та витягує
дані з каналу Swoole
- [Swoole\Channel::push](swoole-channel.push.md) — Записує та
передає дані до каналу Swoole
- [Swoole\Channel::stats](swoole-channel.stats.md) — Отримує
статистику каналу Swoole

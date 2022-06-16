- [« Swoole\Client::wakeup](swoole-client.wakeup.md)
- [Swoole\Connection\Iterator::count
»](swoole-connection-iterator.count.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Connection\Iterator

# Клас Swoole\Connection\Iterator

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Connection\Iterator** implements
[Iterator](class.iterator.md), [Countable](class.countable.md),
[ArrayAccess](class.arrayaccess.md) {

/\* Методи \*/

public [count](swoole-connection-iterator.count.md)(): int

public [current](swoole-connection-iterator.current.md)(): Connection

public [key](swoole-connection-iterator.key.md)(): int

public [next](swoole-connection-iterator.next.md)(): Connection

public [offsetExists](swoole-connection-iterator.offsetexists.md)(int
`$index`): bool

public [offsetGet](swoole-connection-iterator.offsetget.md)(string
`$index`): Connection

public [offsetSet](swoole-connection-iterator.offsetset.md)(int
`$offset`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$connection`): void

public [offsetUnset](swoole-connection-iterator.offsetunset.md)(int
`$offset`): void

public [rewind](swoole-connection-iterator.rewind.md)(): void

public [valid](swoole-connection-iterator.valid.md)(): bool

}

## Зміст

- [Swoole\Connection\Iterator::count](swoole-connection-iterator.count.md)
- Вважає з'єднання
- [Swoole\Connection\Iterator::current](swoole-connection-iterator.current.md)
— Повертає поточний запис підключення
- [Swoole\Connection\Iterator::key](swoole-connection-iterator.key.md)
— Повертає ключ поточного з'єднання
- [Swoole\Connection\Iterator::next](swoole-connection-iterator.next.md)
— Переходить до наступного підключення
- [Swoole\Connection\Iterator::offsetExists](swoole-connection-iterator.offsetexists.md)
— Перевіряє, чи є усунення
- [Swoole\Connection\Iterator::offsetGet](swoole-connection-iterator.offsetget.md)
- Зміщення для вилучення
- [Swoole\Connection\Iterator::offsetSet](swoole-connection-iterator.offsetset.md)
— Призначає з'єднання для зазначеного усунення
- [Swoole\Connection\Iterator::offsetUnset](swoole-connection-iterator.offsetunset.md)
— скидає зміщення
- [Swoole\Connection\Iterator::rewind](swoole-connection-iterator.rewind.md)
- Перемотує ітератор
- [Swoole\Connection\Iterator::valid](swoole-connection-iterator.valid.md)
— Перевіряє правильність поточної позиції

- [« Swoole\Async::writeFile](swoole-async.writefile.md)
- [Swoole\Atomic::add »](swoole-atomic.add.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Atomic

# Клас Swoole\Atomic

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Atomic** {

/\* Методи \*/

public [add](swoole-atomic.add.md)(int `$add_value` u003d ?): int

public [cmpset](swoole-atomic.cmpset.md)(int `$cmp_value`, int
`$new_value`): int

public [get](swoole-atomic.get.md)(): int

public [set](swoole-atomic.set.md)(int $value): int

public [sub](swoole-atomic.sub.md)(int `$sub_value` u003d ?): int

}

## Зміст

- [Swoole\Atomic::add](swoole-atomic.add.md) — Додає число до
значення атомарного об'єкта
- [Swoole\Atomic::cmpset](swoole-atomic.cmpset.md) - Порівнює та
встановлює значення атомарного об'єкта
- [Swoole\Atomic::\_\_construct](swoole-atomic.construct.md) -
Створює атомарний об'єкт swoole
- [Swoole\Atomic::get](swoole-atomic.get.md) — Отримує поточне
значення атомарного об'єкта
- [Swoole\Atomic::set](swoole-atomic.set.md) - Встановлює нове
значення для атомарного об'єкта
- [Swoole\Atomic::sub](swoole-atomic.sub.md) — Віднімає число з
значення атомарного об'єкта

- [« Swoole\Atomic::add](swoole-atomic.add.md)
- [Swoole\Atomic::\_\_construct »](swoole-atomic.construct.md)

- [PHP Manual](index.md)
- [Swoole\Atomic](class.swoole-atomic.md)
- Порівнює та встановлює значення атомарного об'єкта

# Swoole\Atomic::cmpset

(PECL swoole \>u003d 1.9.0)

Swoole\Atomic::cmpset — Порівнює та встановлює значення атомарного
об'єкта

### Опис

public **Swoole\Atomic::cmpset**(int `$cmp_value`, int `$new_value`):
int

### Список параметрів

`cmp_value`
Значення порівняння з поточним значенням атомарного об'єкта.

`new_value`
Значення для атомарного об'єкта, якщо значення
cmp_value збігається із поточним значенням атомарного об'єкта.

### Значення, що повертаються

Нове значення атомарного об'єкта.

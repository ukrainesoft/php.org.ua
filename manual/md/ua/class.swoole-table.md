- [« Swoole\Server::tick](swoole-server.tick.md)
- [Swoole\Table::column »](swoole-table.column.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Table

# Клас Swoole\Table

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Table** implements [Iterator](class.iterator.md),
[Countable](class.countable.md) {

/\* Константи \*/

const int `TYPE_INT` u003d 1;

const int `TYPE_STRING` u003d 7;

const int `TYPE_FLOAT` u003d 6;

/\* Методи \*/

public [column](swoole-table.column.md)(string `$name`, string
`$type`, int `$size` u003d ?): ReturnType

public [count](swoole-table.count.md)(): int

public [create](swoole-table.create.md)(): void

public [current](swoole-table.current.md)(): array

public [decr](swoole-table.decr.md)(string `$key`, string `$column`,
int `$decrby` u003d ?): ReturnType

public [del](swoole-table.del.md)(string `$key`): void

public [destroy](swoole-table.destroy.md)(): void

public [exist](swoole-table.exist.md)(string `$key`): bool

public [get](swoole-table.get.md)(string `$row_key`, string
`$column_key`): int

public [incr](swoole-table.incr.md)(string `$key`, string `$column`,
int `$incrby` u003d ?): void

public [key](swoole-table.key.md)(): string

public [next](swoole-table.next.md)(): ReturnType

public [rewind](swoole-table.rewind.md)(): void

public [set](swoole-table.set.md)(string `$key`, array `$value`): VOID

public [valid](swoole-table.valid.md)(): bool

}

## Зумовлені константи

**`Swoole\Table::TYPE_INT`**

**`Swoole\Table::TYPE_STRING`**

**`Swoole\Table::TYPE_FLOAT`**

## Зміст

- [Swoole\Table::column](swoole-table.column.md) — Встановлює тип
даних та розмір стовпців
- [Swoole\Table::\_\_construct](swoole-table.construct.md) - Створює
таблицю пам'яті Swoole із фіксованим розміром
- [Swoole\Table::count](swoole-table.count.md) — Підраховує рядки
у таблиці або підраховує всі елементи у таблиці, якщо $mode u003d 1
- [Swoole\Table::create](swoole-table.create.md) — Створює таблицю
пам'яті swoole
- [Swoole\Table::current](swoole-table.current.md) - Отримує
поточний рядок
- [Swoole\Table::decr](swoole-table.decr.md) — Зменшує значення
таблиці Swoole за $row_key та $column_key
- [Swoole\Table::del](swoole-table.del.md) — Видаляє рядок у
таблиці Swoole за $row_key
- [Swoole\Table::destroy](swoole-table.destroy.md) - Знищує
таблицю Swoole
- [Swoole\Table::exist](swoole-table.exist.md) — Перевіряє,
чи існує рядок за $row_key
- [Swoole\Table::get](swoole-table.get.md) — Отримує значення в
таблиці Swoole за $row_key та $column_key
- [Swoole\Table::incr](swoole-table.incr.md) — Збільшує значення
за $row_key та $column_key
- [Swoole\Table::key](swoole-table.key.md) — Отримує ключ поточної
рядки
- [Swoole\Table::next](swoole-table.next.md) - Переміщує ітератор
на наступний рядок
- [Swoole\Table::rewind](swoole-table.rewind.md) - Перемотує
ітератор
- [Swoole\Table::set](swoole-table.set.md) — Оновлює рядок
таблиці за $row_key
- [Swoole\Table::valid](swoole-table.valid.md) — Перевіряє, чи є
чи поточний рядок коректним

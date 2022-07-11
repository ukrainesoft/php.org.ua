- [« Ds\Stack::toArray](ds-stack.toarray.md)
- [Ds\Queue::allocate »](ds-queue.allocate.md)

- [PHP Manual](index.md)
- [Структури даних](book.ds.md)
- Клас Queue

# Клас Queue

(No version information available, might only be in Git)

## Вступ

Черга – це колекція типу "Перший увійшов, перший вийшов" (First In,
First Out або FIFO), яка дозволяє працювати тільки з найпершим
значенням. Ітерація походить від початку до кінця з видаленням взятого
елемент.

## Огляд класів

class **Ds\Queue** implements **Ds\Collection**,
[ArrayAccess](class.arrayaccess.md) {

/\* Константи \*/

const int `MIN_CAPACITY` u003d 8;

/\* Методи \*/

public [allocate](ds-queue.allocate.md)(int `$capacity`): void

public [capacity](ds-queue.capacity.md)(): int

public [clear](ds-queue.clear.md)(): void

public [copy](ds-queue.copy.md)(): [Ds\Queue](class.ds-queue.md)

public [isEmpty](ds-queue.isempty.md)(): bool

public [peek](ds-queue.peek.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [pop](ds-queue.pop.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[push](ds-queue.push.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

public [toArray](ds-queue.toarray.md)(): array

}

## Зумовлені константи

**`Ds\Queue::MIN_CAPACITY`**

## Список змін

| Версія | Опис |
|---------------|--------------------------------- ------------------------------|
| PECL DS 1.3.0 | Тепер клас продає [ArrayAccess](class.arrayaccess.md). |

## Зміст

- [Ds\Queue::allocate](ds-queue.allocate.md) — Виділяє пам'ять під
зазначену місткість
- [Ds\Queue::capacity](ds-queue.capacity.md) — Повертає поточну
місткість
- [Ds\Queue::clear](ds-queue.clear.md) — Видаляє всі значення
- [Ds\Queue::\_\_construct](ds-queue.construct.md) - Створює новий
екземпляр
- [Ds\Queue::copy](ds-queue.copy.md) — Повертає поверхневу
копію черги
- [Ds\Queue::count](ds-queue.count.md) — Повертає кількість
елементів черги
- [Ds\Queue::isEmpty](ds-queue.isempty.md) — Перевіряє, чи порожня
колекція
- [Ds\Queue::jsonSerialize](ds-queue.jsonserialize.md) - Повертає
колекцію в JSON-представленні
- [Ds\Queue::peek](ds-queue.peek.md) — Повертає значення спочатку
черги
- [Ds\Queue::pop](ds-queue.pop.md) — Видаляє та повертає значення
з початку черги
- [Ds\Queue::push](ds-queue.push.md) — Додає значення в чергу
- [Ds\Queue::toArray](ds-queue.toarray.md) — Перетворює колекцію на
масив (array)

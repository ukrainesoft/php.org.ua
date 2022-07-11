- [« Ds\Queue::toArray](ds-queue.toarray.md)
- [Ds\PriorityQueue::allocate »](ds-priorityqueue.allocate.md)

- [PHP Manual](index.md)
- [Структури даних](book.ds.md)
- Клас PriorityQueue

# Клас PriorityQueue

(No version information available, might only be in Git)

## Вступ

Черга із пріоритетом дуже схожа на звичайну чергу. Значення
додаються в чергу із заданим пріоритетом, та значення з більш високим
пріоритетом завжди будуть ближче до початку.

Реалізовано з використанням максимальної купи.

> **Примітка**:
>
> Порядок FIFO зберігається у значень із однаковим пріоритетом.

> **Примітка**:
>
> Ітерація через чергу відбувається із видаленням взятого елемента.
> Еквівалентно використанню оператора pop, доки черга не стане
> порожній.

## Огляд класів

class **Ds\PriorityQueue** implements **Ds\Collection** {

/\* Константи \*/

const int `MIN_CAPACITY` u003d 8;

/\* Методи \*/

public [allocate](ds-priorityqueue.allocate.md)(int `$capacity`): void

public [capacity](ds-priorityqueue.capacity.md)(): int

public [clear](ds-priorityqueue.clear.md)(): void

public [copy](ds-priorityqueue.copy.md)():
[Ds\PriorityQueue](class.ds-priorityqueue.md)

public [isEmpty](ds-priorityqueue.isempty.md)(): bool

public [peek](ds-priorityqueue.peek.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [pop](ds-priorityqueue.pop.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[push](ds-priorityqueue.push.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$priority`): void

public [toArray](ds-priorityqueue.toarray.md)(): array

}

## Зумовлені константи

**`Ds\PriorityQueue::MIN_CAPACITY`**

## Зміст

- [Ds\PriorityQueue::allocate](ds-priorityqueue.allocate.md) -
Виділяє пам'ять під зазначену місткість
- [Ds\PriorityQueue::capacity](ds-priorityqueue.capacity.md) -
Повертає поточну місткість
- [Ds\PriorityQueue::clear](ds-priorityqueue.clear.md) — Видаляє все
значення
- [Ds\PriorityQueue::\_\_construct](ds-priorityqueue.construct.md) -
Створює новий екземпляр
- [Ds\PriorityQueue::copy](ds-priorityqueue.copy.md) - Повертає
поверхневу копію черги
- [Ds\PriorityQueue::count](ds-priorityqueue.count.md) - Повертає
кількість елементів у черзі
- [Ds\PriorityQueue::isEmpty](ds-priorityqueue.isempty.md) -
Перевіряє, чи порожня колекція
- [Ds\PriorityQueue::jsonSerialize](ds-priorityqueue.jsonserialize.md)
— Повертає колекцію в JSON-виставу
- [Ds\PriorityQueue::peek](ds-priorityqueue.peek.md) - Повертає
значення з початку черги
- [Ds\PriorityQueue::pop](ds-priorityqueue.pop.md) — Видаляє та
повертає значення з найвищим пріоритетом
- [Ds\PriorityQueue::push](ds-priorityqueue.push.md) - Додає
значення в чергу
- [Ds\PriorityQueue::toArray](ds-priorityqueue.toarray.md) -
Перетворює чергу на масив (array)

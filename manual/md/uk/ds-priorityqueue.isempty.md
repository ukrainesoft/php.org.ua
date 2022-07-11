- [« Ds\PriorityQueue::count](ds-priorityqueue.count.md)
- [Ds\PriorityQueue::jsonSerialize
»](ds-priorityqueue.jsonserialize.md)

- [PHP Manual](index.md)
- [Черга з пріоритетом](class.ds-priorityqueue.md)
- Перевіряє, чи порожня колекція

# Ds\PriorityQueue::isEmpty

(PECL ds \>u003d 1.0.0)

Ds\PriorityQueue::isEmpty — Перевіряє, чи порожня колекція

### Опис

public **Ds\PriorityQueue::isEmpty**(): bool

Перевіряє, чи колекція порожня.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо черга порожня, **`false`** у протилежному
випадку.

### Приклади

**Приклад #1 Приклад використання **Ds\PriorityQueue::isEmpty()****

` <?php$a u003d new \Ds\PriorityQueue();$b u003d new \Ds\PriorityQueue();$a->push("a",  5);$a->push("b", 15 );$a->push("c", 10);var_dump($a->isEmpty());var_dump($b->isEmpty());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)
bool(true)

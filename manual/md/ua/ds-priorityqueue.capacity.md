- [« Ds\PriorityQueue::allocate](ds-priorityqueue.allocate.md)
- [Ds\PriorityQueue::clear »](ds-priorityqueue.clear.md)

- [PHP Manual](index.md)
- [Черга з пріоритетом](class.ds-priorityqueue.md)
- Повертає поточну місткість

# Ds\PriorityQueue::capacity

(PECL ds \>u003d 1.0.0)

Ds\PriorityQueue::capacity — Повертає поточну місткість

### Опис

public **Ds\PriorityQueue::capacity**(): int

Повертає поточну місткість.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Поточна місткість.

### Приклади

**Приклад #1 Приклад використання **Ds\PriorityQueue::capacity()****

` <?php$queue u003d new \Ds\PriorityQueue();var_dump($queue->capacity());?> `

Результатом виконання цього прикладу буде щось подібне:

int(8)

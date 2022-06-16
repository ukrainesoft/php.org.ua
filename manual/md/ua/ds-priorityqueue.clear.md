- [« Ds\PriorityQueue::capacity](ds-priorityqueue.capacity.md)
- [Ds\PriorityQueue::\_\_construct »](ds-priorityqueue.construct.md)

- [PHP Manual](index.md)
- [Черга з пріоритетом](class.ds-priorityqueue.md)
- Видаляє всі значення

# Ds\PriorityQueue::clear

(PECL ds \>u003d 1.0.0)

Ds\PriorityQueue::clear — Видаляє всі значення

### Опис

public **Ds\PriorityQueue::clear**(): void

Видаляє всі значення із черги.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\PriorityQueue::clear()****

` <?php$queue u003d new \Ds\PriorityQueue();$queue->push("a",  5);$queue->push("b", 15);$queue->push("c" , 10);$queue->clear();print_r($queue);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\PriorityQueue Object
(
)

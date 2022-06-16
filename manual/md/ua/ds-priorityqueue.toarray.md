- [« Ds\PriorityQueue::push](ds-priorityqueue.push.md)
- [var_representation »](book.var_representation.md)

- [PHP Manual](index.md)
- [Черга з пріоритетом](class.ds-priorityqueue.md)
- Перетворює чергу на масив (array)

# Ds\PriorityQueue::toArray

(PECL ds \>u003d 1.0.0)

Ds\PriorityQueue::toArray — Перетворює чергу на масив (array)

### Опис

public **Ds\PriorityQueue::toArray**(): array

Перетворює чергу на масив (array).

> **Примітка**:
>
> Цей метод не є руйнівним.

> **Примітка**:
>
> Приведення до типу array поки що не підтримується.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив (array), що містить всі елементи черги із збереженням їх
порядку.

### Приклади

**Приклад #1 Приклад використання **Ds\PriorityQueue::toArray()****

` <?php$queue u003d new \Ds\PriorityQueue();$queue->push("a",  5);$queue->push("b", 15);$queue->push("c" , 10);var_dump($queue->toArray());?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
[0]u003d>
string(1) "b"
[1]u003d>
string(1) "c"
[2]u003d>
string(1) "a"
}

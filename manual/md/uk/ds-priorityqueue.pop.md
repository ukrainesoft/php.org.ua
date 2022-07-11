- [« Ds\PriorityQueue::peek](ds-priorityqueue.peek.md)
- [Ds\PriorityQueue::push »](ds-priorityqueue.push.md)

- [PHP Manual](index.md)
- [Черга з пріоритетом](class.ds-priorityqueue.md)
- Видаляє та повертає значення з найвищим пріоритетом

# Ds\PriorityQueue::pop

(PECL ds \>u003d 1.0.0)

Ds\PriorityQueue::pop — Видаляє та повертає значення з найвищим
пріоритетом

### Опис

public **Ds\PriorityQueue::pop**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє і повертає значення початку черги, тобто. значення з
найвищим пріоритетом.

> **Примітка**:
>
> Значення з однаковим пріоритетом повертаються за принципом FIFO.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Видалене значення з початку черги.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо черга порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\PriorityQueue::pop()****

` <?php$queue u003d new \Ds\PriorityQueue();$queue->push("a",  5);$queue->push("b", 15);$queue->push("c" , 10);print_r($queue->pop());print_r($queue->pop());print_r($queue->pop());?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"

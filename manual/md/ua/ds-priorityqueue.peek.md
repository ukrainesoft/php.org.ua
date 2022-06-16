- [«
Ds\PriorityQueue::jsonSerialize](ds-priorityqueue.jsonserialize.md)
- [Ds\PriorityQueue::pop »](ds-priorityqueue.pop.md)

- [PHP Manual](index.md)
- [Черга з пріоритетом](class.ds-priorityqueue.md)
- Повертає значення із початку черги

# Ds\PriorityQueue::peek

(PECL ds \>u003d 1.0.0)

Ds\PriorityQueue::peek — Повертає значення з початку черги

### Опис

public **Ds\PriorityQueue::peek**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає значення від початку черги, але не видаляє його.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Значення із початку черги.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо черга порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\PriorityQueue::peek()****

` <?php$queue u003d new \Ds\PriorityQueue();$queue->push("a",  5);$queue->push("b", 15);$queue->push("c" , 10);var_dump($queue->peek());?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "b"

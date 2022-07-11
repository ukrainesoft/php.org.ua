- [« Ds\PriorityQueue::pop](ds-priorityqueue.pop.md)
- [Ds\PriorityQueue::toArray »](ds-priorityqueue.toarray.md)

- [PHP Manual](index.md)
- [Черга з пріоритетом](class.ds-priorityqueue.md)
- Додає значення у чергу

# Ds\PriorityQueue::push

(PECL ds \>u003d 1.0.0)

Ds\PriorityQueue::push — Додає значення до черги

### Опис

public
**Ds\PriorityQueue::push**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$priority`): void

Додає `value` із заданим пріоритетом `priority` у чергу.

### Список параметрів

`value`
Значення, що додається.

`priority`
Пріоритет, з яким додається значення.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\PriorityQueue::push()****

` <?php$queue u003d new \Ds\PriorityQueue();$queue->push("a",  5);$queue->push("b", 15);$queue->push("c" , 10);print_r($queue->pop());print_r($queue->pop());print_r($queue->pop());?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "b"
string(1) "c"
string(1) "a"

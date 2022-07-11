- [« SplQueue](class.splqueue.md)
- [SplQueue::dequeue »](splqueue.dequeue.md)

- [PHP Manual](index.md)
- [SplQueue](class.splqueue.md)
- створює нову чергу, реалізовану з використанням двозв'язкового
списку

# SplQueue::\_\_construct

(PHP 5 u003d 5.3.0, PHP 7)

SplQueue::\_\_construct — Створює нову чергу, реалізовану з
використанням двозв'язкового списку

### Опис

public **SplQueue::\_\_construct**()

Створює нову порожню чергу.

> **Примітка**:
>
> Метод автоматично встановлює режим ітератора
> SplDoublyLinkedList::IT_MODE_FIFO.

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання **SplQueue::\_\_construct()****

` <?php$q u003d new SplQueue();$q[] u003d 1;$q[] u003d 2;$q[] u003d 3;foreach ($q as $elem)  { echo $elem."
";}?> `

Результат виконання цього прикладу:

1
2
3

**Приклад #2 Ефективне оброблення завдань за допомогою
[SplQueue](class.splqueue.md)**

` <?php$q u003d new SplQueue();$q->setIteratorMode(SplQueue::IT_MODE_DELETE);// ... поставити кілька задач в чергу ...// обробити ихforeach ($   / ... обробити $task ...     // додати нові завдання в чергу    $q[] u003d $newTask; // ...}?> `

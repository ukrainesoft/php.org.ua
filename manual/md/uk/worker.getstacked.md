- [« Worker::collect](worker.collect.md)
- [Worker::isShutdown »](worker.isshutdown.md)

- [PHP Manual](index.md)
- [Worker](class.worker.md)
- Повертає поточний розмір стеку

# Worker::getStacked

(PECL pthreads \>u003d 2.0.0)

Worker::getStacked — Повертає поточний розмір стека

### Опис

public **Worker::getStacked**(): int

Повертає кількість завдань, що залишилися у стеку.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає кількість завдань, що залишилися в стеку та чекають на запуск.

### Приклади

**Приклад #1 Приклад використання **Worker::getStacked****

`<?php$worker u003d new Worker();for ($i u003d 0; $i < 5; ++$i) {    $worker->stack(new class extends Threaded {});}echo $worker->getStacked()} stacked tasks
";

Результат виконання цього прикладу:

There are 5 stacked tasks

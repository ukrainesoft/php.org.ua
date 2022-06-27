- [« Ds\Queue::allocate](ds-queue.allocate.md)
- [Ds\Queue::clear »](ds-queue.clear.md)

- [PHP Manual](index.md)
- [Черга](class.ds-queue.md)
- Повертає поточну місткість

# Ds\Queue::capacity

(PECL ds \>u003d 1.0.0)

Ds\Queue::capacity — Повертає поточну місткість

### Опис

public **Ds\Queue::capacity**(): int

Повертає поточну місткість.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Поточна місткість.

### Приклади

**Приклад #1 Приклад використання **Ds\Queue::capacity()****

` <?php$queue u003d new \Ds\Queue();var_dump($queue->capacity());$queue->push(...range(1, 50));var_dump($queue->capacity ());?> `

Результатом виконання цього прикладу буде щось подібне:

int(8)
int(64)

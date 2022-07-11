- [« Ds\Deque::apply](ds-deque.apply.md)
- [Ds\Deque::clear »](ds-deque.clear.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Повертає поточну місткість

# Ds\Deque::capacity

(PECL ds \>u003d 1.0.0)

Ds\Deque::capacity — Повертає поточну місткість

### Опис

public **Ds\Deque::capacity**(): int

Повертає поточну місткість.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Поточна місткість.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::capacity()****

` <?php$deque u003d new \Ds\Deque();var_dump($deque->capacity());$deque->push(...range(1, 50));var_dump($deque->capacity ());?> `

Результатом виконання цього прикладу буде щось подібне:

int(8)
int(64)

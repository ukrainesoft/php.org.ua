- [« Ds\Queue::count](ds-queue.count.md)
- [Ds\Queue::jsonSerialize »](ds-queue.jsonserialize.md)

- [PHP Manual](index.md)
- [Черга](class.ds-queue.md)
- Перевіряє, чи порожня колекція

# Ds\Queue::isEmpty

(PECL ds \>u003d 1.0.0)

Ds\Queue::isEmpty — Перевіряє, чи порожня колекція

### Опис

public **Ds\Queue::isEmpty**(): bool

Перевіряє, чи колекція порожня.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо колекція порожня, **`false`** у протилежному
випадку.

### Приклади

**Приклад #1 Приклад використання **Ds\Queue::isEmpty()****

` <?php$a u003d new \Ds\Queue([1, 2, 3]);$b u003d new \Ds\Queue();var_dump($a->isEmpty());var_dump($b-> isEmpty());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)
bool(true)

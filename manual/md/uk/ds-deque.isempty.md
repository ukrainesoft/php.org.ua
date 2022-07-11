- [« Ds\Deque::insert](ds-deque.insert.md)
- [Ds\Deque::join »](ds-deque.join.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Перевіряє, чи порожня двостороння черга

# Ds\Deque::isEmpty

(PECL ds \>u003d 1.0.0)

Ds\Deque::isEmpty — Перевіряє, чи порожня двостороння черга

### Опис

public **Ds\Deque::isEmpty**(): bool

Перевіряє, чи порожня двостороння черга.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо двостороння черга порожня, **`false`** в
інакше.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::isEmpty()****

` <?php$a u003d new \Ds\Deque([1, 2, 3]);$b u003d new \Ds\Deque();var_dump($a->isEmpty());var_dump($b-> isEmpty());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)
bool(true)

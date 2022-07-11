- [« Ds\Stack::count](ds-stack.count.md)
- [Ds\Stack::jsonSerialize »](ds-stack.jsonserialize.md)

- [PHP Manual](index.md)
- [Стек](class.ds-stack.md)
- Перевіряє, чи порожня колекція

# Ds\Stack::isEmpty

(PECL ds \>u003d 1.0.0)

Ds\Stack::isEmpty — Перевіряє, чи порожня колекція

### Опис

public **Ds\Stack::isEmpty**(): bool

Перевіряє, чи колекція порожня.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо колекція порожня, та **`false`** у протилежному
випадку.

### Приклади

**Приклад #1 Приклад використання **Ds\Stack::isEmpty()****

` <?php$a u003d new \Ds\Stack([1, 2, 3]);$b u003d new \Ds\Stack();var_dump($a->isEmpty());var_dump($b-> isEmpty());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)
bool(true)

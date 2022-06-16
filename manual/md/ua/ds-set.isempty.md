- [« Ds\Set::intersect](ds-set.intersect.md)
- [Ds\Set::join »](ds-set.join.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Перевіряє, чи порожня колекція

# Ds\Set::isEmpty

(PECL ds \>u003d 1.0.0)

Ds\Set::isEmpty — Перевіряє, чи порожня колекція

### Опис

public **Ds\Set::isEmpty**(): bool

Перевіряє, чи колекція порожня.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо колекція порожня, **`false`** у протилежному
випадку.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::isEmpty()****

` <?php$a u003d new \Ds\Set([1, 2, 3]);$b u003d new \Ds\Set();var_dump($a->isEmpty());var_dump($b-> isEmpty());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)
bool(true)

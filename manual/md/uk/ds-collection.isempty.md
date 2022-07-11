- [« Ds\Collection::copy](ds-collection.copy.md)
- [Ds\Collection::toArray »](ds-collection.toarray.md)

- [PHP Manual](index.md)
- [Колекція](class.ds-collection.md)
- Перевіряє, чи порожня колекція

# Ds\Collection::isEmpty

(PECL ds \>u003d 1.0.0)

Ds\Collection::isEmpty — Перевіряє, чи порожня колекція

### Опис

abstract public **Ds\Collection::isEmpty**(): bool

Перевіряє, чи колекція порожня.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо колекція порожня, та **`false`** у протилежному
випадку.

### Приклади

**Приклад #1 Приклад **Ds\Collection::isEmpty()****

` <?php$a u003d new \Ds\Vector([1, 2, 3]);$b u003d new \Ds\Vector();var_dump($a->isEmpty());var_dump($b-> isEmpty());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)
bool(true)

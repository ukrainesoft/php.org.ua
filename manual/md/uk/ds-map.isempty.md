- [« Ds\Map::intersect](ds-map.intersect.md)
- [Ds\Map::jsonSerialize »](ds-map.jsonserialize.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Перевіряє, чи порожня колекція

# Ds\Map::isEmpty

(PECL ds \>u003d 1.0.0)

Ds\Map::isEmpty — Перевіряє, чи порожня колекція

### Опис

public **Ds\Map::isEmpty**(): bool

Перевіряє, чи колекція порожня.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо колекція порожня, та **`false`** у протилежному
випадку.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::isEmpty()****

` <?php$a u003d new \Ds\Map(["a" u003d> 1, "b" u003d> 2, c" u003d> 3]);$b u003d new \Ds\Map();var_dump( $a->isEmpty());var_dump($b->isEmpty());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)
bool(true)

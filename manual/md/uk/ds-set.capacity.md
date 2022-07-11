- [« Ds\Set::allocate](ds-set.allocate.md)
- [Ds\Set::clear »](ds-set.clear.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Повертає поточну місткість

# Ds\Set::capacity

(PECL ds \>u003d 1.0.0)

Ds\Set::capacity — Повертає поточну місткість

### Опис

public **Ds\Set::capacity**(): int

Повертає поточну місткість.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Поточна місткість.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::capacity()****

` <?php$set u003d new \Ds\Set();var_dump($set->capacity());$set->push(...range(1, 50));var_dump($set->capacity ());?> `

Результатом виконання цього прикладу буде щось подібне:

int(16)
int(64)

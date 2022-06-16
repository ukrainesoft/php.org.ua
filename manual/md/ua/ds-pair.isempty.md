- [« Ds\Pair::copy](ds-pair.copy.md)
- [Ds\Pair::jsonSerialize »](ds-pair.jsonserialize.md)

- [PHP Manual](index.md)
- [Пара](class.ds-pair.md)
- Перевіряє, чи пара порожня

# Ds\Pair::isEmpty

(No version information available, might only be in Git)

Ds\Pair::isEmpty — Перевіряє, чи пара порожня.

### Опис

public **Ds\Pair::isEmpty**(): bool

Визначає, чи пара порожня.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо пара порожня та **`false`** у протилежному
випадку.

### Приклади

**Приклад #1 Приклад використання **Ds\Pair::isEmpty()****

` <?php$a u003d new \Ds\Pair("a", 1);$b u003d new \Ds\Pair();var_dump($a->isEmpty());var_dump($b->isEmpty( ));?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)
bool(true)

- [« Пара](class.ds-pair.md)
- [Ds\Pair::\_\_construct »](ds-pair.construct.md)

- [PHP Manual](index.md)
- [Пара](class.ds-pair.md)
- Видаляє всі значення

# Ds\Pair::clear

(No version information available, might only be in Git)

Ds\Pair::clear — Видаляє всі значення

### Опис

public **Ds\Pair::clear**(): void

Видаляє всі значення з пари.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Pair::clear()****

` <?php$pair u003d new \Ds\Pair("a", 1);print_r($pair);$pair->clear();print_r($pair);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Pair Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
)
Ds\Pair Object
(
)

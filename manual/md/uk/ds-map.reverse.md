- [« Ds\Map::remove](ds-map.remove.md)
- [Ds\Map::reversed »](ds-map.reversed.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Перевертає поточну колекцію

# Ds\Map::reverse

(PECL ds \>u003d 1.0.0)

Ds\Map::reverse — Перевертає поточну колекцію

### Опис

public **Ds\Map::reverse**(): void

Перевертає поточну колекцію.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::reverse()****

` <?php$map u003d new \Ds\Map(["a" u003d> 1, "b" u003d> 2, c" u003d> 3]);$map->reverse();print_r($map) ;?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Map Object
(
[0] u003d> Ds\Pair Object
(
[key] u003d> c
[value] u003d> 3
)

[1] u003d> Ds\Pair Object
(
[key] u003d> b
[value] u003d> 2
)

[2] u003d> Ds\Pair Object
(
[key] u003d> a
[value] u003d> 1
)

)

- [« Ds\Map::\_\_construct](ds-map.construct.md)
- [Ds\Map::count »](ds-map.count.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Повертає поверхневу копію колекції

# Ds\Map::copy

(PECL ds \>u003d 1.0.0)

Ds\Map::copy — Повертає поверхневу копію колекції

### Опис

public **Ds\Map::copy**(): [Ds\Map](class.ds-map.md)

Повертає поверхневу копію колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Колекція поверхнева копія.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::copy()****

` <?php$map u003d new \Ds\Map([   "a" u003d> 1,   "b" u003d> 2,   "c" u003d> 3,]);print_r($map->copy()); > `

Результатом виконання цього прикладу буде щось подібне:

Ds\Map Object
(
[0] u003d> Ds\Pair Object
(
[key] u003d> a
[value] u003d> 1
)

[1] u003d> Ds\Pair Object
(
[key] u003d> b
[value] u003d> 2
)

[2] u003d> Ds\Pair Object
(
[key] u003d> c
[value] u003d> 3
)

)

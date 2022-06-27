- [« Ds\Map::reverse](ds-map.reverse.md)
- [Ds\Map::skip »](ds-map.skip.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Повертає перегорнуту копію колекції

# Ds\Map::reversed

(PECL ds \>u003d 1.0.0)

Ds\Map::reversed — Повертає перегорнуту копію колекції

### Опис

public **Ds\Map::reversed**(): [Ds\Map](class.ds-map.md)

Повертає копію колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Перегорнута копія колекції.

> **Примітка**:
>
> Поточна колекція не зміниться.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::reversed()****

` <?php$map u003d new \Ds\Map(["a" u003d> 1, "b" u003d> 2, c" u003d> 3]);print_r($map->reversed());?> `

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

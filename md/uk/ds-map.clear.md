- [« Ds\Map::capacity](ds-map.capacity.md)
- [Ds\Map::\_\_construct »](ds-map.construct.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Видаляє всі значення з колекції

# Ds\Map::clear

(PECL ds \>u003d 1.0.0)

Ds\Map::clear — Видаляє всі значення колекції.

### Опис

public **Ds\Map::clear**(): void

Видаляє всі значення колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::clear()****

` <?php$map u003d new \Ds\Map([   "a" u003d> 1,   "b" u003d> 2,    "c" u003d> 3,]);print_r($map);$map->ar );print_r($map);?> `

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
Ds\Map Object
(
)

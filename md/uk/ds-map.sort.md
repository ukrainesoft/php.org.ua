- [« Ds\Map::slice](ds-map.slice.md)
- [Ds\Map::sorted »](ds-map.sorted.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Сортує колекцію за значеннями

# Ds\Map::sort

(PECL ds \>u003d 1.0.0)

Ds\Map::sort — Сортує колекцію за значеннями

### Опис

public **Ds\Map::sort**([callable](language.types.callable.md)
`$comparator` u003d ?): void

Сортує колекцію за значеннями, необов'язково використовуючи
callback-функцію `comparator`.

### Список параметрів

`comparator`
Функція порівняння повинна повертати ціле, яке менше, або
більше нуля, якщо перший аргумент є відповідно меншим,
рівним чи більшим, ніж другий.

callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$a`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$b`): int

**Застереження**
*Не ціле* значення, повернене з функції порівняння, такого як
float, буде приведено до цілої кількості (int). Отже значення типу 0.99
і 0.1 будуть наведені до 0, що означатиме рівність порівнюваних
значень.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::sort()****

` <?php$map u003d new \Ds\Map(["a" u003d> 2, "b" u003d> 3, c" u003d> 1]);$map->sort();print_r($map) ;?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Map Object
(
[0] u003d> Ds\Pair Object
(
[key] u003d> c
[value] u003d> 1
)

[1] u003d> Ds\Pair Object
(
[key] u003d> a
[value] u003d> 2
)

[2] u003d> Ds\Pair Object
(
[key] u003d> b
[value] u003d> 3
)

)

**Приклад #2 Приклад використання **Ds\Map::sort()** з callback-функцією
порівняння**

` <?php$map u003d new \Ds\Map(["a" u003d> 2, "b" u003d> 3, "c" u003d> 1]);$map->sort(function($a, $b ) {    return $b <u003d>$a;});print_r($map);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Map Object
(
[0] u003d> Ds\Pair Object
(
[key] u003d> b
[value] u003d> 3
)

[1] u003d> Ds\Pair Object
(
[key] u003d> a
[value] u003d> 2
)

[2] u003d> Ds\Pair Object
(
[key] u003d> c
[value] u003d> 1
)

)

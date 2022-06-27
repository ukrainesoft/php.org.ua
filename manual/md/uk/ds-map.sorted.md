- [« Ds\Map::sort](ds-map.sort.md)
- [Ds\Map::sum »](ds-map.sum.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Повертає відсортовану за значенням копію колекції

# Ds\Map::sorted

(PECL ds \>u003d 1.0.0)

Ds\Map::sorted — Повертає копію колекції, відсортовану за значенням.

### Опис

public **Ds\Map::sorted**([callable](language.types.callable.md)
`$comparator` u003d ?): [Ds\Map](class.ds-map.md)

Повертає відсортовану за значенням копію колекції, необов'язково
використовуючи callback-функцію `comparator`.

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

Повертає копію колекції, відсортовану за значенням.

### Приклади

**Приклад #1 Приклад використання [Ds\Map::sort()](ds-map.sort.md)**

` <?php$map u003d new \Ds\Map(["a" u003d> 2, "b" u003d> 3, "c" u003d> 1]);print_r($map->sorted());?> `

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

**Приклад #2 Приклад використання [Ds\Map::sort()](ds-map.sort.md) з
callback-функцією порівняння**

` <?php$map u003d new \Ds\Map(["a" u003d> 2, "b" u003d> 3, c" u003d> 1]);// Reverse$sorted u003d $map->sorted(function ($a, $b) {   return $b <u003d> $a;});print_r($sorted);?> `

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

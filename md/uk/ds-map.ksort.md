- [« Ds\Map::keys](ds-map.keys.md)
- [Ds\Map::ksorted »](ds-map.ksorted.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Сортує поточну колекцію за ключами

# Ds\Map::ksort

(PECL ds \>u003d 1.0.0)

Ds\Map::ksort — Сортує поточну колекцію за ключами

### Опис

public **Ds\Map::ksort**([callable](language.types.callable.md)
`$comparator` u003d ?): void

Сортує поточну колекцію за ключами, опціонально використовуючи
callback-функцію `comparator` для порівняння елементів.

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

**Приклад #1 Приклад використання **Ds\Map::ksort()****

` <?php$map u003d new \Ds\Map(["b" u003d> 2, "c" u003d> 3, "a" u003d> 1]);$map->ksort();print_r($map) ;?> `

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

**Приклад #2 Приклад використання **Ds\Map::ksort()** з callback-функцією
порівняння**

` <?php$map u003d new \Ds\Map([1 u003d> "x", 2 u003d> "y", 0 u003d> "z"]);// Зворотний порядок$map->ksort(function($ a, $b) {   return $b <u003d> $a;});print_r($map);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Map Object
Ds\Map Object
(
[0] u003d> Ds\Pair Object
(
[key] u003d> 2
[value] u003d> y
)

[1] u003d> Ds\Pair Object
(
[key] u003d> 1
[value] u003d> x
)

[2] u003d> Ds\Pair Object
(
[key] u003d> 0
[value] u003d> z
)

)

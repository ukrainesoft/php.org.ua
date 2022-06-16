- [« Ds\Set::slice](ds-set.slice.md)
- [Ds\Set::sorted »](ds-set.sorted.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Сортує колекцію

# Ds\Set::sort

(PECL ds \>u003d 1.0.0)

Ds\Set::sort — Сортує колекцію

### Опис

public **Ds\Set::sort**([callable](language.types.callable.md)
`$comparator` u003d ?): void

Сортує колекцію, опціонально використовуючи callback-функцію
`Comparator`.

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

**Приклад #1 Приклад використання **Ds\Set::sort()****

` <?php$set u003d new \Ds\Set([4, 5, 1, 3, 2]);$set->sort();print_r($set);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Set Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
[3] u003d> 4
[4] u003d> 5
)

**Приклад #2 Приклад використання **Ds\Set::sort()** з callback-функцією
порівняння**

` <?php$set u003d new \Ds\Set([4, 5, 1, 3, 2]);$set->sort(function($a, $b) {   return $b <u003d> $a; });print_r($set);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Set Object
(
[0] u003d> 5
[1] u003d> 4
[2] u003d> 3
[3] u003d> 2
[4] u003d> 1
)

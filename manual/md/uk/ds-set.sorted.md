- [« Ds\Set::sort](ds-set.sort.md)
- [Ds\Set::sum »](ds-set.sum.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Повертає відсортовану за значенням копію колекції

# Ds\Set::sorted

(PECL ds \>u003d 1.0.0)

Ds\Set::sorted — Повертає копію колекції, відсортовану за значенням.

### Опис

public **Ds\Set::sorted**([callable](language.types.callable.md)
`$comparator` u003d ?): [Ds\Set](class.ds-set.md)

Повертає відсортовану копію колекції, опціонально використовуючи
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

Повертає копію колекції, відсортовану за значенням.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::sorted()****

` <?php$set u003d new \Ds\Set([4, 5, 1, 3, 2]);print_r($set->sorted());?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Set Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
[3] u003d> 4
[4] u003d> 5
)

**Приклад #2 Приклад використання **Ds\Set::sorted()** з
callback-функцією порівняння**

` <?php$set u003d new \Ds\Set([4, 5, 1, 3, 2]);$sorted u003d $set->sorted(function($a, $b) {    return $b <u003d> $a;});print_r($sorted);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Set Object
(
[0] u003d> 5
[1] u003d> 4
[2] u003d> 3
[3] u003d> 2
[4] u003d> 1
)

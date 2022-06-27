- [« Ds\Vector::sort](ds-vector.sort.md)
- [Ds\Vector::sum »](ds-vector.sum.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Повертає відсортовану за значенням копію колекції

# Ds\Vector::sorted

(PECL ds \>u003d 1.0.0)

Ds\Vector::sorted — Повертає відсортовану за значенням копію
колекції

### Опис

public **Ds\Vector::sorted**([callable](language.types.callable.md)
`$comparator` u003d ?): [Ds\Vector](class.ds-vector.md)

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

**Приклад #1 Приклад використання **Ds\Vector::sorted()****

` <?php$vector u003d new \Ds\Vector([4, 5, 1, 3, 2]);print_r($vector->sorted());?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
[3] u003d> 4
[4] u003d> 5
)

**Приклад #2 Приклад використання **Ds\Vector::sorted()** з
callback-функцією порівняння**

` <?php$vector u003d new \Ds\Vector([4, 5, 1, 3, 2]);$sorted u003d $vector->sorted(function($a, $b) {    return $b <u003d> $a;});print_r($sorted);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> 5
[1] u003d> 4
[2] u003d> 3
[3] u003d> 2
[4] u003d> 1
)

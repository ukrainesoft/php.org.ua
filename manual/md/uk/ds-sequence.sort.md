- [« Ds\Sequence::slice](ds-sequence.slice.md)
- [Ds\Sequence::sorted »](ds-sequence.sorted.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Сортує колекцію

# Ds\Sequence::sort

(PECL ds \>u003d 1.0.0)

Ds\Sequence::sort — Сортує колекцію

### Опис

abstract public
**Ds\Sequence::sort**([callable](language.types.callable.md)
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
*Не ціле* значення повернене з функції порівняння, такого як float,
буде приведено до цілого числа (int). Так що значення типу 0.99 та 0.1
будуть приведені до 0, що означатиме рівність порівнюваних значень.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::sort()****

` <?php$sequence u003d new \Ds\Vector([4, 5, 1, 3, 2]);$sequence->sort();print_r($sequence);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
[3] u003d> 4
[4] u003d> 5
)

**Приклад #2 Приклад використання **Ds\Sequence::sort()** з
callback-функцією порівняння**

` <?php$sequence u003d new \Ds\Vector([4, 5, 1, 3, 2]);$sequence->sort(function($a, $b) {    return $b <u003d> $a; });print_r($sequence);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> 5
[1] u003d> 4
[2] u003d> 3
[3] u003d> 2
[4] u003d> 1
)

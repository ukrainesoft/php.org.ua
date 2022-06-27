- [« Ds\Deque::slice](ds-deque.slice.md)
- [Ds\Deque::sorted »](ds-deque.sorted.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Сортує двосторонню чергу

# Ds\Deque::sort

(PECL ds \>u003d 1.0.0)

Ds\Deque::sort — Сортує двосторонню чергу

### Опис

public **Ds\Deque::sort**([callable](language.types.callable.md)
`$comparator` u003d ?): void

Сортує двосторонню чергу, опціонально використовуючи callback-функцію
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

**Приклад #1 Приклад використання **Ds\Deque::sort()****

` <?php$deque u003d new \Ds\Deque([4, 5, 1, 3, 2]);$deque->sort();print_r($deque);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Deque Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
[3] u003d> 4
[4] u003d> 5
)

**Приклад #2 Приклад використання **Ds\Deque::sort()** з
callback-функцією порівняння**

` <?php$deque u003d new \Ds\Deque([4, 5, 1, 3, 2]);$deque->sort(function($a, $b) {   return $b <u003d> $a; });print_r($deque);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Deque Object
(
[0] u003d> 5
[1] u003d> 4
[2] u003d> 3
[3] u003d> 2
[4] u003d> 1
)

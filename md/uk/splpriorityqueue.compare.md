- [« SplPriorityQueue](class.splpriorityqueue.md)
- [SplPriorityQueue::count »](splpriorityqueue.count.md)

- [PHP Manual](index.md)
- [SplPriorityQueue](class.splpriorityqueue.md)
- Порівнює пріоритети для коректного розміщення елементів у чергу

# SplPriorityQueue::compare

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplPriorityQueue::compare — Порівнює пріоритети для коректного
приміщення елементів у чергу

### Опис

public
**SplPriorityQueue::compare**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$priority1`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$priority2`): int

Порівнює `priority1` з `priority2`.

### Список параметрів

`priority1`
Пріоритет першого вузла.

`priority2`
Пріоритет другого вузла.

### Значення, що повертаються

Результат порівняння, позитивне число, коли `priority1` більше
`priority2`, якщо вони рівні, і негативне число в інших
випадках.

> **Примітка**:
>
> При додаванні кількох елементів з однаковим пріоритетом
> порядок слідування цих елементів у черзі не визначено.

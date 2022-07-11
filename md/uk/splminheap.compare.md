- [« SplMinHeap](class.splminheap.md)
- [SplPriorityQueue »](class.splpriorityqueue.md)

- [PHP Manual](index.md)
- [SplMinHeap](class.splminheap.md)
- Порівнює елементи, щоб під час сортування коректно розмістити
їх у купі

# SplMinHeap::compare

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplMinHeap::compare — Порівнює елементи, щоб під час сортування
коректно розмістити їх у купі

### Опис

protected**SplMinHeap::compare**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value1`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value2`): int

Порівнює `value1` з `value2`.

### Список параметрів

`value1`
Значення першого порівнюваного вузла.

`value2`
Значення другого порівнюваного вузла.

### Значення, що повертаються

Метод повертає позитивне значення, коли `value1` більше `value2`,
0 якщо вони рівні, і негативне в інших випадках.

> **Примітка**:
>
> Наявність кількох елементів з однаковим значенням у купі не
> рекомендується, оскільки неможливо буде відстежити точне положення
> конкретний елемент.

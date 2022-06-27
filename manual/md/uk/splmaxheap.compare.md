- [« SplMaxHeap](class.splmaxheap.md)
- [SplMinHeap »](class.splminheap.md)

- [PHP Manual](index.md)
- [SplMaxHeap](class.splmaxheap.md)
- Порівнює елементи, щоб під час сортування коректно розмістити
їх у купі

# SplMaxHeap::compare

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplMaxHeap::compare — Порівнює елементи, щоб під час сортування
коректно розмістити їх у купі

### Опис

protected
**SplMaxHeap::compare**([mixed](language.types.declarations.md#language.types.declarations.mixed)
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

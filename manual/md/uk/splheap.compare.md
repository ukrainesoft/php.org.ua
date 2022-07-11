- [«SplHeap](class.splheap.md)
- [SplHeap::count »](splheap.count.md)

- [PHP Manual](index.md)
- [SplHeap](class.splheap.md)
- Порівнює елементи, щоб під час сортування коректно розмістити
їх у купі

# SplHeap::compare

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplHeap::compare — Порівнює елементи, щоб під час сортування
коректно розмістити їх у купі

### Опис

protected
**SplHeap::compare**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value1`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value2`): int

Порівнює `value1` з `value2`.

**Увага**

Викидання виключень у методі **SplHeap::compare()** може порушити
цілісність купи та перевести її в заблокований стан.
Розблокувати купу можна методом
[SplHeap::recoverFromCorruption()](splheap.recoverfromcorruption.md).
Однак деякі елементи можуть бути поміщені некоректно, що порушує
сортування всередині купи.

### Список параметрів

`value1`
Значення першого порівнюваного вузла.

`value2`
Значення другого порівнюваного вузла.

### Значення, що повертаються

Метод повинен повертати позитивне значення, коли `value1` більше
`value2`, якщо вони рівні, і негативне в інших випадках.

> **Примітка**:
>
> Приміщенню до купи однакових елементів небажано, оскільки неможливо
> відстежуватиме точне положення конкретного елемента.

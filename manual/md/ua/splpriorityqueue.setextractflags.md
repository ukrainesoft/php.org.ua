- [« SplPriorityQueue::rewind](splpriorityqueue.rewind.md)
- [SplPriorityQueue::top »](splpriorityqueue.top.md)

- [PHP Manual](index.md)
- [SplPriorityQueue](class.splpriorityqueue.md)
- Задає режим вилучення вузлів

# SplPriorityQueue::setExtractFlags

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplPriorityQueue::setExtractFlags — Задає режим вилучення вузлів

### Опис

public **SplPriorityQueue::setExtractFlags**(int `$flags`): int

### Список параметрів

`flags`
Визначає, що витягуватиметься методами
[SplPriorityQueue::current()](splpriorityqueue.current.md),
[SplPriorityQueue::top()](splpriorityqueue.top.md) та
[SplPriorityQueue::extract()](splpriorityqueue.extract.md).

- **`SplPriorityQueue::EXTR_DATA`** (0x00000001): Витягувати дані
- **`SplPriorityQueue::EXTR_PRIORITY`** (0x00000002): Витягувати
пріоритет
- **`SplPriorityQueue::EXTR_BOTH`** (0x00000003): Витягувати дані та
пріоритет у вигляді масиву

За промовчанням працює режим **`SplPriorityQueue::EXTR_DATA`**.

### Значення, що повертаються

Повертає прапори вилучення.

- [« Ds\Queue::\_\_construct](ds-queue.construct.md)
- [Ds\Queue::count »](ds-queue.count.md)

- [PHP Manual](index.md)
- [Черга](class.ds-queue.md)
- Повертає поверхневу копію черги

# Ds\Queue::copy

(PECL ds \>u003d 1.0.0)

Ds\Queue::copy — Повертає поверхневу копію черги

### Опис

public **Ds\Queue::copy**(): [Ds\Queue](class.ds-queue.md)

Повертає поверхневу копію черги.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Поверхнева копія черги.

### Приклади

**Приклад #1 Приклад використання **Ds\Queue::copy()****

` <?php$a u003d new \Ds\Queue([1, 2, 3]);$b u003d $a->copy();// Зміна копії не відбивається на оригіналі$b->push(4); print_r($a);print_r($b);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Queue Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
)
Ds\Queue Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
[3] u003d> 4
)

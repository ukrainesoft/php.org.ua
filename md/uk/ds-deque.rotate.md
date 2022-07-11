- [« Ds\Deque::reversed](ds-deque.reversed.md)
- [Ds\Deque::set »](ds-deque.set.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Перемотує двосторонню чергу на задану кількість значень

# Ds\Deque::rotate

(PECL ds \>u003d 1.0.0)

Ds\Deque::rotate — Перемотує двосторонню чергу на задане число
значень

### Опис

public **Ds\Deque::rotate**(int `$rotations`): void

Перемотує двосторонню чергу на задану кількість значень. Дана
операція аналогічна до виконання задану кількість разів коду
`$deque->push($deque->shift())`, якщо кількість оборотів позитивна і
`$deque->unshift($deque->pop())`, якщо негативно.

### Список параметрів

`rotations`
Кількість значень, які треба "перемотати".

### Значення, що повертаються

Функція не повертає значення після виконання. Буде змінено поточну
двостороння черга.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::rotate()****

` <?php$deque u003d new \Ds\Deque(["a", "b", "c", "d"]);$deque->rotate(1); // Аналогічно $a u003d $sequence->deque(); $deque->push($a);print_r($deque);$deque->rotate(2);print_r($deque);?> `

Результатом виконання цього прикладу буде щось подібне:

(
[0] u003d> b
[1] u003d> c
[2] u003d> d
[3] u003d> a
)
Ds\Deque Object
(
[0] u003d> d
[1] u003d> a
[2] u003d> b
[3] u003d> c
)

- [« Ds\Sequence::reversed](ds-sequence.reversed.md)
- [Ds\Sequence::set »](ds-sequence.set.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Перемотує послідовність на задану кількість значень

# Ds\Sequence::rotate

(PECL ds \>u003d 1.0.0)

Ds\Sequence::rotate — Перемотує послідовність на задане число
значень

### Опис

abstract public **Ds\Sequence::rotate**(int `$rotations`): void

Перемотує послідовність на задану кількість значень. Дана
операція аналогічна до виконання заданого кількість разів коду
`$sequence->push($sequence->shift())`, якщо кількість оборотів позитивна
і `$sequence->unshift($sequence->pop())`, якщо негативно.

### Список параметрів

`rotations`
Кількість значень, які треба "перемотати".

### Значення, що повертаються

Функція не повертає значення після виконання. Буде змінено поточну
послідовність.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::rotate()****

` <?php$sequence u003d new \Ds\Vector(["a", "b", "c", "d"]);$sequence->rotate(1); // Аналогічно $a u003d $sequence->shift(); $sequence->push($a);print_r($sequence);$sequence->rotate(2);print_r($sequence);?> `

Результатом виконання цього прикладу буде щось подібне:

(
[0] u003d> b
[1] u003d> c
[2] u003d> d
[3] u003d> a
)
Ds\Vector Object
(
[0] u003d> d
[1] u003d> a
[2] u003d> b
[3] u003d> c
)

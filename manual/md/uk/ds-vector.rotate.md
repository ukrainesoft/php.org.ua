- [« Ds\Vector::reversed](ds-vector.reversed.md)
- [Ds\Vector::set »](ds-vector.set.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Перемотує вектор на задану кількість значень

# Ds\Vector::rotate

(PECL ds \>u003d 1.0.0)

Ds\Vector::rotate — Перемотує вектор на задану кількість значень

### Опис

public **Ds\Vector::rotate**(int `$rotations`): void

Перемотує вектор на задану кількість значень. Ця операція
аналогічна до виконання задану кількість разів коду
`$vector->push($vector->shift())`, якщо кількість оборотів позитивна і
`$vector->unshift($vector->pop())`, якщо негативно.

### Список параметрів

`rotations`
Кількість значень, які треба "перемотати".

### Значення, що повертаються

Функція не повертає значення після виконання. Буде змінено поточний
вектор.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::rotate()****

` <?php$vector u003d new \Ds\Vector(["a", "b", "c", "d"]);$vector->rotate(1); // Аналогічно $a u003d $vector->shift(); $vector->push($a);print_r($vector);$vector->rotate(2);print_r($vector);?> `

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

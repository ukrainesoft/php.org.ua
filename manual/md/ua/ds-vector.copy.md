- [« Ds\Vector::contains](ds-vector.contains.md)
- [Ds\Vector::count »](ds-vector.count.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Повертає поверхневу копію вектора

# Ds\Vector::copy

(PECL ds \>u003d 1.0.0)

Ds\Vector::copy — Повертає поверхневу копію вектора

### Опис

public **Ds\Vector::copy**(): [Ds\Vector](class.ds-vector.md)

Повертає поверхневу копію вектора.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Вектор поверхнева копія.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::copy()****

` <?php$a u003d new \Ds\Vector([1, 2, 3]);$b u003d $a->copy();// Зміна копії не відбивається на оригіналі$b->push(4); print_r($a);print_r($b);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
)
Ds\Vector Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
[3] u003d> 4
)

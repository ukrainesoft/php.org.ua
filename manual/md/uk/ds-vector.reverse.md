- [« Ds\Vector::remove](ds-vector.remove.md)
- [Ds\Vector::reversed »](ds-vector.reversed.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Перевертає поточний вектор

# Ds\Vector::reverse

(PECL ds \>u003d 1.0.0)

Ds\Vector::reverse — Перевертає поточний вектор

### Опис

public **Ds\Vector::reverse**(): void

Перевертає поточний вектор.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::reverse()****

` <?php$vector u003d new \Ds\Vector(["a", "b", "c"]);$vector->reverse();print_r($vector);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> c
[1] u003d> b
[2] u003d> a
)

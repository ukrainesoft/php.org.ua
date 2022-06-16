- [« Ds\Vector::capacity](ds-vector.capacity.md)
- [Ds\Vector::\_\_construct »](ds-vector.construct.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Видаляє всі значення

# Ds\Vector::clear

(PECL ds \>u003d 1.0.0)

Ds\Vector::clear — Видаляє всі значення

### Опис

public **Ds\Vector::clear**(): void

Видаляє всі значення вектора.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::clear()****

` <?php$vector u003d new \Ds\Vector([1, 2, 3]);print_r($vector);$vector->clear();print_r($vector);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
)
Ds\Vector Object
(
)

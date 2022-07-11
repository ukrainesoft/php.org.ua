- [« Ds\Vector::pop](ds-vector.pop.md)
- [Ds\Vector::reduce »](ds-vector.reduce.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Додає значення до кінця вектора

# Ds\Vector::push

(PECL ds \>u003d 1.0.0)

Ds\Vector::push — Додає значення до кінця вектора

### Опис

public
**Ds\Vector::push**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

Додає значення до кінця вектора.

### Список параметрів

`values`
Значення, що додаються.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::push()****

` <?php$vector u003d new \Ds\Vector();$vector->push("a");$vector->push("b");$vector->push("c", "d" );$vector->push(...["e", "f"]);print_r($vector);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> a
[1] u003d> b
[2] u003d> c
[3] u003d> d
[4] u003d> e
[5] u003d> f
)

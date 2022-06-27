- [« Ds\Vector::toArray](ds-vector.toarray.md)
- [Двостороння черга»](class.ds-deque.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Додає значення на початок вектора

# Ds\Vector::unshift

(PECL ds \>u003d 1.0.0)

Ds\Vector::unshift — Додає значення на початок вектора

### Опис

public
**Ds\Vector::unshift**([mixed](language.types.declarations.md#language.types.declarations.mixed)
$values u003d ?): void

Додає значення на початок вектора, зсуваючи всі елементи вперед, щоб
звільнити місце для нових.

### Список параметрів

`values`
Значення, що додаються.

> **Примітка**:
>
> Багато значень додаються в тому порядку, як вони були передані.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::unshift()****

` <?php$vector u003d new \Ds\Vector([1, 2, 3]);$vector->unshift("a");$vector->unshift("b", "c");print_r( $vector);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> b
[1] u003d> c
[2] u003d> a
[3] u003d> 1
[4] u003d> 2
[5] u003d> 3
)

- [« Ds\Set::reverse](ds-set.reverse.md)
- [Ds\Set::slice »](ds-set.slice.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Повертає перегорнуту копію колекції

# Ds\Set::reversed

(PECL ds \>u003d 1.0.0)

Ds\Set::reversed — Повертає перегорнуту копію колекції

### Опис

public **Ds\Set::reversed**(): [Ds\Set](class.ds-set.md)

Повертає копію колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Перегорнута копія колекції.

> **Примітка**:
>
> Поточна колекція не зміниться.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::reversed()****

` <?php$set u003d new \Ds\Set(["a", "b", "c"]);print_r($set->reversed());print_r($set);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Set Object
(
[0] u003d> c
[1] u003d> b
[2] u003d> a
)
Ds\Set Object
(
[0] u003d> a
[1] u003d> b
[2] u003d> c
)

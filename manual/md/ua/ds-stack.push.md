- [« Ds\Stack::pop](ds-stack.pop.md)
- [Ds\Stack::toArray »](ds-stack.toarray.md)

- [PHP Manual](index.md)
- [Стек](class.ds-stack.md)
- Додає значення у стек

# Ds\Stack::push

(PECL ds \>u003d 1.0.0)

Ds\Stack::push — Додає значення до стек

### Опис

public
**Ds\Stack::push**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

Додає значення `values` у стек

### Список параметрів

`values`
Значення, що додаються.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Stack::push()****

` <?php$stack u003d new \Ds\Stack();$stack->push("a");$stack->push("b");$stack->push("c", "d" );$stack->push(...["e", "f"]);print_r($stack);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Stack Object
(
[0] u003d> a
[1] u003d> b
[2] u003d> c
[3] u003d> d
[4] u003d> e
[5] u003d> f
)

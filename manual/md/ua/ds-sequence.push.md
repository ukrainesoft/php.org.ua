- [« Ds\Sequence::pop](ds-sequence.pop.md)
- [Ds\Sequence::reduce »](ds-sequence.reduce.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Додає значення до кінця послідовності

# Ds\Sequence::push

(PECL ds \>u003d 1.0.0)

Ds\Sequence::push — Додає значення до кінця послідовності

### Опис

abstract public
**Ds\Sequence::push**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

Додає значення до кінця послідовності.

### Список параметрів

`values`
Значення, що додаються.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::push()****

` <?php$sequence u003d new \Ds\Vector();$sequence->push("a");$sequence->push("b");$sequence->push("c", "d" );$sequence->push(...["e", "f"]);print_r($sequence);?> `

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

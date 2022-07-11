- [« Ds\Sequence::remove](ds-sequence.remove.md)
- [Ds\Sequence::reversed »](ds-sequence.reversed.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Перевертає поточну колекцію

# Ds\Sequence::reverse

(PECL ds \>u003d 1.0.0)

Ds\Sequence::reverse — Перевертає поточну колекцію

### Опис

abstract public **Ds\Sequence::reverse**(): void

Перевертає поточну колекцію.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::reverse()****

` <?php$sequence u003d new \Ds\Vector(["a", "b", "c"]);$sequence->reverse();print_r($sequence);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> c
[1] u003d> b
[2] u003d> a
)

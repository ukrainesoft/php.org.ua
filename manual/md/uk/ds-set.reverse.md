- [« Ds\Set::remove](ds-set.remove.md)
- [Ds\Set::reversed »](ds-set.reversed.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Перевертає поточну колекцію

# Ds\Set::reverse

(PECL ds \>u003d 1.0.0)

Ds\Set::reverse — Перевертає поточну колекцію

### Опис

public **Ds\Set::reverse**(): void

Перевертає поточну колекцію.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::reverse()****

` <?php$set u003d new \Ds\Set(["a", "b", "c"]);$set->reverse();print_r($set);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Set Object
(
[0] u003d> c
[1] u003d> b
[2] u003d> a
)

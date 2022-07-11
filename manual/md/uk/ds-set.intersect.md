- [« Ds\Set::get](ds-set.get.md)
- [Ds\Set::isEmpty »](ds-set.isempty.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Створює новий набір, створений перетином з іншим набором

# Ds\Set::intersect

(PECL ds \>u003d 1.0.0)

Ds\Set::intersect — Створення нового набору, створеного перетином з іншим
набором

### Опис

public **Ds\Set::intersect**([Ds\Set](class.ds-set.md) `$set`):
[Ds\Set](class.ds-set.md)

Створює новий набір, що містить значення, які є в поточному
наборі та наборі, переданому параметром `set`.

`A ∩ B u003d {x : x ∈ A ∧ x ∈ B}`

### Список параметрів

`set`
Новий набір типу Set.

### Значення, що повертаються

Перетин поточного набору та переданого в `set`.

### Також дивіться

- [» Перетин](https://en.wikipedia.org/wiki/Intersection_(set_theory))
на Вікіпедія

### Приклади

**Приклад #1 Приклад використання **Ds\Set::intersect()****

` <?php$a u003d new \Ds\Set([1, 2, 3]);$b u003d new \Ds\Set([3, 4, 5]);var_dump($a->intersect($b ));?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Set)#3 (1) {
[0]u003d>
int(3)
}

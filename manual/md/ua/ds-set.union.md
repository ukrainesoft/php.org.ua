- [« Ds\Set::toArray](ds-set.toarray.md)
- [Ds\Set::xor »](ds-set.xor.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Створює новий набір з елементів поточного та переданого наборів

# Ds\Set::union

(PECL ds \>u003d 1.0.0)

Ds\Set::union — Створення нового набору елементів поточного та переданого
наборів

### Опис

public **Ds\Set::union**([Ds\Set](class.ds-set.md) `$set`):
[Ds\Set](class.ds-set.md)

Створює новий набір з елементів поточного та переданого в set наборів.

`A ∪ B u003d {x: x ∈ A ∨ x ∈ B}`

### Список параметрів

`set`
Новий набір для об'єднання із поточним.

### Значення, що повертаються

Новий набір, що є об'єднанням поточного та переданого в `set`.

### Також дивіться

- [» Об'єднання](https://en.wikipedia.org/wiki/Union_(set_theory)) в
Вікіпедія

### Приклади

**Приклад #1 Приклад використання **Ds\Set::union()****

` <?php$a u003d new \Ds\Set([1, 2, 3]);$b u003d new \Ds\Set([3, 4, 5]);var_dump($a->union($b ));?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Set)#3 (5) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
[3]u003d>
int(4)
[4]u003d>
int(5)
}

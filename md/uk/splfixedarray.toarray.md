- [« SplFixedArray::setSize](splfixedarray.setsize.md)
- [SplFixedArray::valid »](splfixedarray.valid.md)

- [PHP Manual](index.md)
- [SplFixedArray](class.splfixedarray.md)
- Повертає звичайний PHP-масив зі значеннями фіксованого масиву

# SplFixedArray::toArray

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplFixedArray::toArray — Повертає звичайний PHP-масив зі значеннями
фіксованого масиву

### Опис

public **SplFixedArray::toArray**(): array

Повертає стандартний PHP-масив зі значеннями фіксованого масиву.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає PHP-масив (array), складений із значень фіксованого
масиву.

### Приклади

**Приклад #1 Приклад використання **SplFixedArray::toArray()****

` <?php$fa u003d new SplFixedArray(3);$fa[0] u003d 0;$fa[2] u003d 2;var_dump($fa->toArray());?> `

Результат виконання цього прикладу:

array(3) {
[0]u003d>
int(0)
[1]u003d>
NULL
[2]u003d>
int(2)
}

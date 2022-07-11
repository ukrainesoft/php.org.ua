- [« SplFixedArray::current](splfixedarray.current.md)
- [SplFixedArray::getSize »](splfixedarray.getsize.md)

- [PHP Manual](index.md)
- [SplFixedArray](class.splfixedarray.md)
- Імпортує PHP-масив у об'єкт класу SplFixedArray

# SplFixedArray::fromArray

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplFixedArray::fromArray — Імпортує PHP-масив в об'єкт класу
[SplFixedArray](class.splfixedarray.md)

### Опис

public static **SplFixedArray::fromArray**(array `$array`, bool
`$preserveKeys` u003d **`true`**): [SplFixedArray](class.splfixedarray.md)

Імпортує PHP-масив `array` у новий об'єкт класу
[SplFixedArray](class.splfixedarray.md)

### Список параметрів

`array`
Масив, який слід імпортувати.

`preserveKeys`
По можливості зберегти чисельні індекси, задані в оригінальному
масиві.

### Значення, що повертаються

Повертає об'єкт класу [SplFixedArray](class.splfixedarray.md),
містить дані з імпортованого масиву.

### Приклади

**Приклад #1 Приклад використання **SplFixedArray::fromArray()****

` <?php$fa u003d SplFixedArray::fromArray(array(1 u003d> 1, 0 u003d> 2, 3 u003d> 3));var_dump($fa);$fa u003d SplFixedArray::fromArray(array(1 1, 0 u003d> 2, 3 u003d> 3), false);var_dump($fa);?> `

Результат виконання цього прикладу:

object(SplFixedArray)#1 (4) {
[0]u003d>
int(2)
[1]u003d>
int(1)
[2]u003d>
NULL
[3]u003d>
int(3)
}
object(SplFixedArray)#2 (3) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
}

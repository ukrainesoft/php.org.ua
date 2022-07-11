- [« Ds\Set::first](ds-set.first.md)
- [Ds\Set::intersect »](ds-set.intersect.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Повертає значення за індексом

# Ds\Set::get

(PECL ds \>u003d 1.0.0)

Ds\Set::get — Повертає значення за індексом

### Опис

public **Ds\Set::get**(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає значення за заданим індексом.

### Список параметрів

`index`
Індекс. Перший елемент має індекс 0.

### Значення, що повертаються

Значення за заданим індексом.

### Помилки

Викидає виняток
[OutOfRangeException](class.outofrangeexception.md), якщо індекс
некоректний.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::get()****

` <?php$set u003d new \Ds\Set(["a", "b", "c"]);var_dump($set->get(0));var_dump($set->get(1) );var_dump($set->get(2));?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"

**Приклад #2 Приклад використання **Ds\Set::get()** із синтаксисом
масиву**

` <?php$set u003d new \Ds\Set(["a", "b", "c"]);var_dump($set[0]);var_dump($set[1]);var_dump($set [2]);?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"

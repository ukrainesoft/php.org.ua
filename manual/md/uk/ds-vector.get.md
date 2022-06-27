- [« Ds\Vector::first](ds-vector.first.md)
- [Ds\Vector::insert »](ds-vector.insert.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Повертає значення за індексом

# Ds\Vector::get

(PECL ds \>u003d 1.0.0)

Ds\Vector::get — Повертає значення за індексом

### Опис

public **Ds\Vector::get**(int `$index`):
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

**Приклад #1 Приклад використання **Ds\Vector::get()****

` <?php$vector u003d new \Ds\Vector(["a", "b", "c"]);var_dump($vector->get(0));var_dump($vector->get(1) );var_dump($vector->get(2));?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"

**Приклад #2 Приклад використання **Ds\Vector::get()** із синтаксисом
масиву**

` <?php$vector u003d new \Ds\Vector(["a", "b", "c"]);var_dump($vector[0]);var_dump($vector[1]);var_dump($vector [2]);?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"

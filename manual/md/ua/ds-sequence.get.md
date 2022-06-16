- [« Ds\Sequence::first](ds-sequence.first.md)
- [Ds\Sequence::insert »](ds-sequence.insert.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Повертає значення за індексом

# Ds\Sequence::get

(PECL ds \>u003d 1.0.0)

Ds\Sequence::get — Повертає значення за індексом

### Опис

abstract public **Ds\Sequence::get**(int `$index`):
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

**Приклад #1 Приклад використання **Ds\Sequence::get()****

` <?php$sequence u003d new \Ds\Vector(["a", "b", "c"]);var_dump($sequence->get(0));var_dump($sequence->get(1) );var_dump($sequence->get(2));?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"

**Приклад #2 Приклад використання **Ds\Sequence::get()** із синтаксисом
масиву**

` <?php$sequence u003d new \Ds\Vector(["a", "b", "c"]);var_dump($sequence[0]);var_dump($sequence[1]);var_dump($sequence [2]);?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"

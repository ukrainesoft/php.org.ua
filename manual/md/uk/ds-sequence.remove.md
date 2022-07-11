- [« Ds\Sequence::reduce](ds-sequence.reduce.md)
- [Ds\Sequence::reverse »](ds-sequence.reverse.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Видаляє та повертає значення за індексом

# Ds\Sequence::remove

(PECL ds \>u003d 1.0.0)

Ds\Sequence::remove — Видаляє та повертає значення за індексом

### Опис

abstract public **Ds\Sequence::remove**(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє та повертає значення за індексом.

### Список параметрів

`index`
Індекс, яким необхідно видалити значення.

### Значення, що повертаються

Віддалене значення.

### Помилки

Викидає виняток
[OutOfRangeException](class.outofrangeexception.md), якщо індекс
некоректний.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::remove()****

` <?php$sequence u003d new \Ds\Vector(["a", "b", "c"]);var_dump($sequence->remove(1));var_dump($sequence->remove(0) );var_dump($sequence->remove(0));?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "b"
string(1) "a"
string(1) "c"

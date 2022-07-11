- [« Ds\Sequence::set](ds-sequence.set.md)
- [Ds\Sequence::slice »](ds-sequence.slice.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Видаляє та повертає перше значення

# Ds\Sequence::shift

(PECL ds \>u003d 1.0.0)

Ds\Sequence::shift — Видаляє та повертає перше значення

### Опис

abstract public **Ds\Sequence::shift**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє та повертає перше значення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Перше віддалене значення.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо колекція
порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::shift()****

` <?php$sequence u003d new \Ds\Vector(["a", "b", "c"]);var_dump($sequence->shift());var_dump($sequence->shift()); var_dump($sequence->shift());?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"

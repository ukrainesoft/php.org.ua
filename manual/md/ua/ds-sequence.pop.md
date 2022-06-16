- [« Ds\Sequence::merge](ds-sequence.merge.md)
- [Ds\Sequence::push »](ds-sequence.push.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Видаляє та повертає останнє значення

# Ds\Sequence::pop

(PECL ds \>u003d 1.0.0)

Ds\Sequence::pop — Видаляє та повертає останнє значення

### Опис

abstract public **Ds\Sequence::pop**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє та повертає останнє значення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Останнє віддалене значення.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо колекція
порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::pop()****

` <?php$sequence u003d new \Ds\Vector([1, 2, 3]);var_dump($sequence->pop());var_dump($sequence->pop());var_dump($sequence-> pop());?> `

Результатом виконання цього прикладу буде щось подібне:

int(3)
int(2)
int(1)

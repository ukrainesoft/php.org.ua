- [« Ds\Sequence::find](ds-sequence.find.md)
- [Ds\Sequence::get »](ds-sequence.get.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Повертає перший елемент колекції

# Ds\Sequence::first

(PECL ds \>u003d 1.0.0)

Ds\Sequence::first — Повертає перший елемент колекції

### Опис

abstract public **Ds\Sequence::first**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає перший елемент колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Перший елемент колекції.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо колекція
порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::first()****

` <?php$sequence u003d new \Ds\Vector([1, 2, 3]);var_dump($sequence->first());?> `

Результатом виконання цього прикладу буде щось подібне:

int(1)

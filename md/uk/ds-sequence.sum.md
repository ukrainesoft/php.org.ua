- [« Ds\Sequence::sorted](ds-sequence.sorted.md)
- [Ds\Sequence::unshift »](ds-sequence.unshift.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Повертає суму всіх значень колекції

# Ds\Sequence::sum

(PECL ds \>u003d 1.0.0)

Ds\Sequence::sum — Повертає суму всіх значень колекції

### Опис

abstract public **Ds\Sequence::sum**(): int\|float

Повертає суму всіх значень колекції.

> **Примітка**:
>
> Масиви та об'єкти вважаються нулем.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Сума всіх значень колекції типів float чи int, залежно від
значень колекції.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::sum()** з цілими
значеннями**

` <?php$sequence u003d new \Ds\Vector([1, 2, 3]);var_dump($sequence->sum());?> `

Результатом виконання цього прикладу буде щось подібне:

int(6)

**Приклад #2 Приклад використання **Ds\Sequence::sum()** зі значеннями
типу float**

` <?php$sequence u003d new \Ds\Vector([1, 2.5, 3]);var_dump($sequence->sum());?> `

Результатом виконання цього прикладу буде щось подібне:

float(6.5)

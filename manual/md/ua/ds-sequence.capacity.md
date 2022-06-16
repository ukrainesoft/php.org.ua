- [« Ds\Sequence::apply](ds-sequence.apply.md)
- [Ds\Sequence::contains »](ds-sequence.contains.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Повертає поточну місткість

# Ds\Sequence::capacity

(PECL ds \>u003d 1.0.0)

Ds\Sequence::capacity — Повертає поточну місткість

### Опис

abstract public **Ds\Sequence::capacity**(): int

Повертає поточну місткість.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Поточна місткість.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::capacity()****

` <?php$sequence u003d new \Ds\Vector();var_dump($sequence->capacity());$sequence->push(...range(1, 50));var_dump($sequence->capacity ());$sequence[] u003d "a";var_dump($sequence->capacity());?> `

Результатом виконання цього прикладу буде щось подібне:

int(10)
int(50)
int(75)

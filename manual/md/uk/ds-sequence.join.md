- [« Ds\Sequence::insert](ds-sequence.insert.md)
- [Ds\Sequence::last »](ds-sequence.last.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Склеює всі значення в рядок

# Ds\Sequence::join

(PECL ds \>u003d 1.0.0)

Ds\Sequence::join — Склеює всі значення в рядок

### Опис

abstract public **Ds\Sequence::join**(string `$glue` u003d ?): string

Склеює всі значення в рядок, опціонально використовуючи заданий
роздільник.

### Список параметрів

`glue`
Необов'язковий параметр, який визначає роздільник між значеннями.

### Значення, що повертаються

Усі значення колекції, склеєні в один рядок.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::join()** з
роздільником**

` <?php$sequence u003d new \Ds\Vector(["a", "b", c", 1, 2, 3]);var_dump($sequence->join("|"));?> `

Результатом виконання цього прикладу буде щось подібне:

string(11) "a|b|c|1|2|3"

**Приклад #2 Приклад використання **Ds\Sequence::join()** без
роздільника**

` <?php$sequence u003d new \Ds\Vector(["a", "b", "c", 1, 2, 3]);var_dump($sequence->join());?> `

Результатом виконання цього прикладу буде щось подібне:

string(11) "abc123"

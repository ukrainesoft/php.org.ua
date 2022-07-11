- [« Ds\Vector::isEmpty](ds-vector.isempty.md)
- [Ds\Vector::jsonSerialize »](ds-vector.jsonserialize.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Склеює всі значення в рядок

# Ds\Vector::join

(PECL ds \>u003d 1.0.0)

Ds\Vector::join — Склеює всі значення в рядок

### Опис

public **Ds\Vector::join**(string `$glue` u003d ?): string

Склеює всі значення в рядок, опціонально використовуючи заданий
роздільник.

### Список параметрів

`glue`
Необов'язковий параметр, який визначає роздільник між значеннями.

### Значення, що повертаються

Всі значення вектора склеєні в один рядок.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::join()** з роздільником**

` <?php$vector u003d new \Ds\Vector(["a", "b", c", 1, 2, 3]);var_dump($vector->join("|"));?> `

Результатом виконання цього прикладу буде щось подібне:

string(11) "a|b|c|1|2|3"

**Приклад #2 Приклад використання **Ds\Vector::join()** без роздільника**

` <?php$vector u003d new \Ds\Vector(["a", "b", "c", 1, 2, 3]);var_dump($vector->join());?> `

Результатом виконання цього прикладу буде щось подібне:

string(11) "abc123"

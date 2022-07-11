- [« Ds\Pair::jsonSerialize](ds-pair.jsonserialize.md)
- [Набір »](class.ds-set.md)

- [PHP Manual](index.md)
- [Пара](class.ds-pair.md)
- Перетворює пару на масив (array)

# Ds\Pair::toArray

(PECL ds \>u003d 1.0.0)

Ds\Pair::toArray — Перетворює пару на масив (array)

### Опис

public **Ds\Pair::toArray**(): array

Перетворює пару на масив (array).

> **Примітка**:
>
> Приведення до масиву поки що не підтримується.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив, що містить елементи в тому самому порядку, як вони були в парі.

### Приклади

**Приклад #1 Приклад використання **Ds\Pair::toArray()****

` <?php$pair u003d new \Ds\Pair("a", 1);var_dump($pair->toArray());?> `

Результатом виконання цього прикладу буде щось подібне:

array(2) {
["key"]u003d>
string(1) "a"
["value"]u003d>
int(1)
}

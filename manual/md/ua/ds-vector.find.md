- [« Ds\Vector::filter](ds-vector.filter.md)
- [Ds\Vector::first »](ds-vector.first.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Пошук індексу за значенням

# Ds\Vector::find

(PECL ds \>u003d 1.0.0)

Ds\Vector::find — Пошук індексу за значенням

### Опис

public
**Ds\Vector::find**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає індекс значення `value` або **`false`**, якщо нічого не
знайдено.

### Список параметрів

`value`
Шукане значення.

### Значення, що повертаються

Індекс елемента або ** false , якщо значення не знайдено.

> **Примітка**:
>
> Елементи порівнюються суворо (за типом та значенням).

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::find()****

` <?php$vector u003d new \Ds\Vector(["a", 1, true]);var_dump($vector->find("a")); // 0var_dump($vector->find("b")); //falsevar_dump($vector->find("1")); //falsevar_dump($vector->find(1)); // 1?> `

Результатом виконання цього прикладу буде щось подібне:

int(0)
bool(false)
bool(false)
int(1)

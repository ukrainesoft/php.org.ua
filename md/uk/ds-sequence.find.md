- [« Ds\Sequence::filter](ds-sequence.filter.md)
- [Ds\Sequence::first »](ds-sequence.first.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Пошук індексу за значенням

# Ds\Sequence::find

(PECL ds \>u003d 1.0.0)

Ds\Sequence::find — Пошук індексу за значенням

### Опис

abstract public
**Ds\Sequence::find**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає індекс значення `value`, або **`false`**, якщо нічого не
знайдено.

### Список параметрів

`value`
Шукане значення.

### Значення, що повертаються

Індекс елемента, або **`false`**, якщо значення не знайдено.

> **Примітка**:
>
> Елементи порівнюються строго, за типом та значенням.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::find()****

` <?php$sequence u003d new \Ds\Vector(["a", 1, true]);var_dump($sequence->find("a")); // 0var_dump($sequence->find("b")); //falsevar_dump($sequence->find("1")); //falsevar_dump($sequence->find(1)); // 1?> `

Результатом виконання цього прикладу буде щось подібне:

int(0)
bool(false)
bool(false)
int(1)

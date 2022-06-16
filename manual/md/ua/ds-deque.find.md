- [« Ds\Deque::filter](ds-deque.filter.md)
- [Ds\Deque::first »](ds-deque.first.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Пошук індексу за значенням

# Ds\Deque::find

(PECL ds \>u003d 1.0.0)

Ds\Deque::find — Пошук індексу за значенням

### Опис

public
**Ds\Deque::find**([mixed](language.types.declarations.md#language.types.declarations.mixed)
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

**Приклад #1 Приклад використання **Ds\Deque::find()****

` <?php$deque u003d new \Ds\Deque(["a", 1, true]);var_dump($deque->find("a")); // 0var_dump($deque->find("b")); //falsevar_dump($deque->find("1")); //falsevar_dump($deque->find(1)); // 1?> `

Результатом виконання цього прикладу буде щось подібне:

int(0)
bool(false)
bool(false)
int(1)

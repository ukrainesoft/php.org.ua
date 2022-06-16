- [« Ds\Vector::push](ds-vector.push.md)
- [Ds\Vector::remove »](ds-vector.remove.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Зменшує вектор до одного значення, використовуючи callback-функцію

# Ds\Vector::reduce

(PECL ds \>u003d 1.0.0)

Ds\Vector::reduce — Зменшує вектор до одного значення, використовуючи
callback-функцію

### Опис

public **Ds\Vector::reduce**([callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$initial` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Сплескує вектор до одного значення, використовуючи callback-функцію.

### Список параметрів

`callback`
callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$carry`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`carry`
Значення, повернене попереднім запуском функції або initial, якщо
функція запущена вперше.

`value`
Значення поточної ітерації.

`initial`
Початкове значення параметра carry. Можна вказати **`null`**.

### Значення, що повертаються

Значення повернене остаточним запуском callback-функції.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::reduce()** з початковим
значенням**

` <?php$vector u003d new \Ds\Vector([1, 2, 3]);$callback u003d function($carry, $value) {    return $carry * $value;};var_dump($ ($callback, 5));// Iterations://// $carry u003d $initial u003d 5//// $carry u003d $carry * 1 u003d  5// $carry u003d $carry * 2 u003d $ carry u003d $carry * 3 u003d 30?> `

Результатом виконання цього прикладу буде щось подібне:

int(30)

**Приклад #2 Приклад використання **Ds\Vector::reduce()** без початкового
значення**

` <?php$vector u003d new \Ds\Vector([1, 2, 3]);var_dump($vector->reduce(function($carry, $value) {    return $carry + $value + ) );// Iterations://// $carry u003d $initial u003d null//// $carry u003d $carry + 1 + 5 u003d  6// $carry u003d $carry + 2 + $ $carry + 3 + 5 u003d 21?> `

Результатом виконання цього прикладу буде щось подібне:

int(21)

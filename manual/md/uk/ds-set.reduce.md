- [« Ds\Set::merge](ds-set.merge.md)
- [Ds\Set::remove »](ds-set.remove.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Зменшує колекцію до одного значення, використовуючи callback-функцію

# Ds\Set::reduce

(PECL ds \>u003d 1.0.0)

Ds\Set::reduce — Зменшує колекцію до одного значення, використовуючи
callback-функцію

### Опис

public **Ds\Set::reduce**([callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$initial` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Зменшує колекцію до одного значення, використовуючи callback-функцію.

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

Значення, повернене остаточним запуском callback-функції.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::reduce()** з початковим
значенням**

` <?php$set u003d new \Ds\Set([1, 2, 3]);$callback u003d function($carry, $value) {    return $carry * $value;};var_dump($set ($callback, 5));// Ітерації://// $carry u003d $initial u003d 5//// $carry u003d $carry * 1 u003d  5// $carry u003d $carry * 2 u003d carry u003d $carry * 3 u003d 30?> `

Результатом виконання цього прикладу буде щось подібне:

int(30)

**Приклад #2 Приклад використання **Ds\Set::reduce()** без початкового
значення**

` <?php$set u003d new \Ds\Set([1, 2, 3]);var_dump($set->reduce(function($carry, $value) {   return $carry + $value + 5); );// Ітерації://// $carry u003d $initial u003d null//// $carry u003d $carry + 1 + 5 u003d  6// $carry u003d $carry + 2 + $ $carry + 3 + 5 u003d 21?> `

Результатом виконання цього прикладу буде щось подібне:

int(21)

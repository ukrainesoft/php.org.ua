- [«Ds\Map::putAll](ds-map.putall.md)
- [Ds\Map::remove »](ds-map.remove.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Зменшує колекцію до одного значення, використовуючи callback-функцію

# Ds\Map::reduce

(PECL ds \>u003d 1.0.0)

Ds\Map::reduce — Зменшує колекцію до одного значення, використовуючи
callback-функцію

### Опис

public **Ds\Map::reduce**([callable](language.types.callable.md)
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
`$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`carry`
Значення, повернене попереднім запуском функції або initial, якщо
функцію запущено вперше.

`key`
Ключ поточної ітерації.

`value`
Значення поточної ітерації.

`initial`
Початкове значення для параметра carry. Можна вказати **`null`**.

### Значення, що повертаються

Значення, повернене остаточним запуском callback-функції.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::reduce()** з початковим
значенням**

` <?php$map u003d new \Ds\Map(["a" u003d> 1, "b" u003d> 2, c" u003d> 3]);$callback u003d function($carry, $key, $value ) {    return $carry * $value;};var_dump($map->reduce($callback, 5));// Ітерації://// $carry u003d $initial u003d 5/// $carry * 1 u003d  5// $carry u003d $carry * 2 u003d 10//$$carry u003d $carry * 3 u003d 30?> `

Результатом виконання цього прикладу буде щось подібне:

int(30)

**Приклад #2 Приклад використання **Ds\Map::reduce()** без початкового
значення**

` <?php$map u003d new \Ds\Map(["a" u003d> 1, "b" u003d> 2, c" u003d> 3]);var_dump($map->reduce(function($carry, $key, $value) {   return $carry + $value + 5;}));// Ітерації://// $carry u003d $initial u003d null///// $carry u003d $car          // $carry u003d $carry + 2 + 5 u003d 13// $carry u003d $carry + 3 + 5 u003d 21?> `

Результатом виконання цього прикладу буде щось подібне:

int(21)

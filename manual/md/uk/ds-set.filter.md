- [Ds\Set::diff](ds-set.diff.md)
- [Ds\Set::first »](ds-set.first.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Створює новий список із елементів, вибраних за допомогою заданої
callback-функції

# Ds\Set::filter

(PECL ds \>u003d 1.0.0)

Ds\Set::filter — Створення нового списку елементів, вибраних за допомогою
заданої callback-функції

### Опис

public **Ds\Set::filter**([callable](language.types.callable.md)
`$callback` u003d ?): [Ds\Set](class.ds-set.md)

Створює новий набір елементів, вибраних за допомогою заданої
callback-функції.

### Список параметрів

`callback`
callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Опціональний аргумент типу [callable](language.types.callable.md),
який повертає **`true`**, якщо значення має бути включене та
**`false`**, якщо ні.

Якщо callback-функція не задана, будуть включені тільки елементи,
які наводяться до логічного значення **`true`** (дивитися
[приведення до
boolean](language.types.boolean.md#language.types.boolean.casting)).

### Значення, що повертаються

Новий набір, що містить значення, для яких функція callback повернула
**`true`**, або всі елементи, які при приведенні до логічного типу
стають **`true`**, якщо параметр `callback` не заданий.

### Приклади

**Приклад #1 Приклад **Ds\Set::filter()** з використанням
callback-функції**

` <?php$set u003d new \Ds\Set([1, 2, 3, 4, 5]);var_dump($set->filter(function($value) {   return $value % 2 u003du003d 0); ));?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Set)#3 (2) {
[0]u003d>
int(2)
[1]u003d>
int(4)
}

**Приклад #2 Приклад **Ds\Set::filter()** без callback-функції**

` <?php$set u003d new \Ds\Set([0, 1, 'a', true, false]);var_dump($set->filter());?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Set)#2 (3) {
[0]u003d>
int(1)
[1]u003d>
string(1) "a"
[2]u003d>
bool(true)
}

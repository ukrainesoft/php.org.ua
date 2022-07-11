- [« Ds\Sequence::contains](ds-sequence.contains.md)
- [Ds\Sequence::find »](ds-sequence.find.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Створює нову послідовність елементів, вибраних за допомогою
заданої callback-функції

# Ds\Sequence::filter

(PECL ds \>u003d 1.0.0)

Ds\Sequence::filter — Створює нову послідовність елементів,
вибраних за допомогою заданої callback-функції

### Опис

abstract public
**Ds\Sequence::filter**([callable](language.types.callable.md)
`$callback` u003d ?): [Ds\Sequence](class.ds-sequence.md)

Створює нову послідовність елементів, вибраних за допомогою
заданої callback-функції.

### Список параметрів

`callback`
callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Необов'язковий аргумент типу [callable](language.types.callable.md),
який повертає **`true`**, якщо значення має бути включене та
**`false`**, якщо ні.

Якщо callback-функція не задана, будуть включені тільки елементи,
які наводяться до логічного значення **`true`** (дивись [приведення
до boolean](language.types.boolean.md#language.types.boolean.casting)).

### Значення, що повертаються

Нова послідовність, що містить значення, для яких функція
`callback` повернула **`true`**, або всі елементи, які при приведенні
до логічного типу стають **`true`**, якщо параметр `callback` не
заданий.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::filter()** з
callback-функцією**

` <?php$sequence u003d new \Ds\Vector([1, 2, 3, 4, 5]);var_dump($sequence->filter(function($value) {    return|$value % 2 u003du003du003d ));?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Vector)#3 (2) {
[0]u003d>
int(2)
[1]u003d>
int(4)
}

**Приклад #2 Приклад використання **Ds\Sequence::filter()** без
callback-функції**

` <?php$sequence u003d new \Ds\Vector([0, 1, 'a', true, false]);var_dump($sequence->filter());?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Vector)#2 (3) {
[0]u003d>
int(1)
[1]u003d>
string(1) "a"
[2]u003d>
bool(true)
}

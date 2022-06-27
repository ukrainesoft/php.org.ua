- [« Ds\Deque::count](ds-deque.count.md)
- [Ds\Deque::find »](ds-deque.find.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Створює нову двосторонню чергу з елементів, вибраних з
допомогою заданої callback-функції

# Ds\Deque::filter

(PECL ds \>u003d 1.0.0)

Ds\Deque::filter — Створює нову двосторонню чергу з елементів,
вибраних за допомогою заданої callback-функції

### Опис

public **Ds\Deque::filter**([callable](language.types.callable.md)
`$callback` u003d ?): [Ds\Deque](class.ds-deque.md)

Створює нову двосторонню чергу з елементів, вибраних за допомогою
заданої callback-функції.

### Список параметрів

`callback`
callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Опціональний аргумент типу [callable](language.types.callable.md),
який повертає **`true`**, якщо значення має бути включене та
**`false`**, якщо ні.

Якщо callback-функція не задана, будуть включені тільки елементи,
які наводяться до логічного значення **`true`** (дивіться
[приведення до
boolean](language.types.boolean.md#language.types.boolean.casting)).

### Значення, що повертаються

Нова двостороння черга, що містить значення, для яких функція
callback повернула **true`**, або всі елементи, які при приведенні
до логічного типу стають **`true`**, якщо параметр `callback` не
заданий.

### Приклади

**Приклад #1 Приклад **Ds\Deque::filter()** з використанням
callback-функції**

` <?php$deque u003d new \Ds\Deque([1, 2, 3, 4, 5]);var_dump($deque->filter(function($value) {    return $value % 2 u003du003d| ));?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Deque)#3 (2) {
[0]u003d>
int(2)
[1]u003d>
int(4)
}

**Приклад #2 Приклад **Ds\Deque::filter()** без callback-функції**

` <?php$deque u003d new \Ds\Deque([0, 1, 'a', true, false]);var_dump($deque->filter());?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Deque)#2 (3) {
[0]u003d>
int(1)
[1]u003d>
string(1) "a"
[2]u003d>
bool(true)
}

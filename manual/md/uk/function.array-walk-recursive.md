- [«array_values](function.array-values.md)
- [array_walk »](function.array-walk.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Рекурсивно застосовує функцію користувача до кожного елемента
масиву

#array_walk_recursive

(PHP 5, PHP 7, PHP 8)

array_walk_recursive — Рекурсивно застосовує функцію користувача до
кожному елементу масиву

### Опис

**array_walk_recursive**(array\|object `&$array`,
[callable](language.types.callable.md) `$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d **`null`**): bool

Застосовує функцію користувача `callback` до кожного елемента масиву
`input`. Ця функція обробляє кожен елемент багатовимірного масиву.

### Список параметрів

`array`
Вхідний масив.

`callback`
Зазвичай, callback приймає два параметри. Першим параметром є
значення елемента масиву `input`, а другим - його ключ.

> **Примітка**:
>
> Якщо потрібно, щоб функція callback змінила значення в масиві,
> визначте перший параметр `callback` як
> [Посилання](language.references.md). Тоді всі зміни будуть
> застосовані до елементів масиву.

`arg`
Якщо вказано необов'язковий параметр `arg`, він буде переданий третім
параметром функції callback.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **array_walk_recursive()****

` <?php$sweet u003d array('a' u003d> 'apple', 'b' u003d> 'banana');$fruits u003d array('sweet' u003d> $sweet, 'sour' u003d> 'lemon') ;function test_print($item, $key){   echo "$key містить $item
";}array_walk_recursive($fruits, 'test_print');?> `

Результат виконання цього прикладу:

a містить apple
b містить banana
sour містить lemon

Зверніть увагу, що ключ "sweet" ніколи не відображається. Будь-який
ключ, що містить значення типу array, не передаватиметься у функцію.

### Дивіться також

- [array_walk()](function.array-walk.md) - Застосовує задану
користувачем функцію до кожного елементу масиву

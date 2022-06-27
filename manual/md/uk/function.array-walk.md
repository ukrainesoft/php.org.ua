- [«array_walk_recursive](function.array-walk-recursive.md)
- [array »](function.array.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Застосовує задану користувачем функцію кожного елемента масиву

#array_walk

(PHP 4, PHP 5, PHP 7, PHP 8)

array_walk — Застосовує функцію, задану користувачем, до кожного елемента
масиву

### Опис

**array_walk**(array\|object `&$array`,
[callable](language.types.callable.md) `$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d **`null`**): bool

Застосовує функцію користувача `callback` до кожного елемента масиву
`array`.

**array_walk()** не схильна до впливу внутрішнього покажчика масиву
`array`. **array_walk()** обійде всі елементи масиву незалежно від
позиції вказівника.

### Список параметрів

`array`
Вхідний масив.

`callback`
Зазвичай функція callback приймає два параметри. Як перший
параметра йде значення елемента масиву `array`, а ключ - як
другого.

> **Примітка**:
>
> Якщо потрібно, щоб функція callback змінила значення в масиві,
> визначте перший параметр `callback` як
> [Посилання](language.references.md). Тоді всі зміни будуть
> застосовані до елементів оригінального масиву.

> **Примітка**:
>
> Багато вбудованих функцій (наприклад,
> [strtolower()](function.strtolower.md)) виводять попередження, якщо
> їм передано більше параметрів, ніж вони очікують, або які можуть
> безпосередньо використовуватися в callback.

Потенційно змінені можуть бути лише значення масиву `array`;
структура самого масиву може бути змінена, тобто не можна
додати, видалити або змінити порядок елементів. Якщо callback-функція
не відповідає цій вимогі, поведінка даної функції стане
невизначеним та непередбачуваним.

`arg`
Якщо вказано необов'язковий параметр `arg`, він буде переданий як
третього параметра в callback-функцію `callback`.

### Значення, що повертаються

Повертає **`true`**

### Помилки

Починаючи з PHP 7.1.0, якщо `callback`-функція вимагає більше
двох параметрів (значення та ключ елементу масиву) або більше 3
параметрів, якщо також передається параметр `arg`, буде викинуто
виняток [ArgumentCountError](class.argumentcounterror.md). Раніше в
такому разі при кожному викликі callback, генерувалася помилка рівня
[E_WARNING](errorfunc.constants.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | Якщо параметр callback очікує, що значення другого або третього параметра буде передано за посиланням, функція тепер видасть помилку рівня ** E_WARNING **. |

### Приклади

**Приклад #1 Приклад використання **array_walk()****

` <?php$fruits u003d array("d" u003d> "lemon", "a" u003d> "orange", "b" u003d> "banana", "c" u003d> "apple");function test_alter(& $item1, $key, $prefix){    $item1 u003d "$prefix: $item1";}function test_print($item2, $key){   echo "$key. $item2
";}echo "До ...:
";array_walk($fruits, 'test_print');array_walk($fruits, 'test_alter', 'fruit');echo "......і після:
";array_walk($fruits, 'test_print');?> `

Результат виконання цього прикладу:

До ...:
d. lemon
a. orange
b. banana
с. apple
... і після:
d. fruit: lemon
a. fruit: orange
b. fruit: banana
с. fruit: apple

### Дивіться також

- [array_walk_recursive()](function.array-walk-recursive.md) -
Рекурсивно застосовує функцію користувача до кожного елемента
масиву
- [iterator_apply()](function.iterator-apply.md) - Викликає функцію
для кожного елемента в ітераторі
- [list()](function.list.md) - Надає змінним зі списку
значення подібно до масиву
- [each()](function.each.md) - Повертає поточну пару ключ/значення
з масиву та зміщує його покажчик
- [call_user_func_array()](function.call-user-func-array.md) -
Викликає callback-функцію з масивом параметрів
- [array_map()](function.array-map.md) - Застосовує callback-функцію
до всіх елементів зазначених масивів
- [foreach](control-structures.foreach.md)

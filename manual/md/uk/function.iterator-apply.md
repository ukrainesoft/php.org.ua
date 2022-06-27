- [«class_uses](function.class-uses.md)
- [iterator_count »](function.iterator-count.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- Викликає функцію для кожного елемента в ітераторі

#iterator_apply

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

iterator_apply — Викликає функцію кожного елемента в ітераторі

### Опис

**iterator_apply**([Traversable](class.traversable.md) `$iterator`,
[callable](language.types.callable.md) `$callback`, ?array `$args` u003d
**`null`**): int

Викликає функцію кожного елемента в итераторе.

### Список параметрів

`iterator`
Об'єкт ітератора для перебору.

`callback`
Функція зворотного дзвінка, яка застосовується до кожного елемента. Ця
функція приймає тільки переданий `args`, тому він null по
замовчуванням. Наприклад, якщо `count($args) u003du003du003d 3`, функція зворотного
виклику – тернарна.

> **Примітка**: Функція повинна повертати **`true`** для того, щоб
> продовжувати процес ітерації над iterator.

`args`
Аргументи для передачі у функцію зворотного дзвінка. Масив (array)
аргументів; кожен елемент `args` передається у функцію зворотної функції
(`callback`) у вигляді окремого аргументу.

### Значення, що повертаються

Повертає кількість ітерацій.

### Приклади

**Приклад #1 Приклад використання **iterator_apply()****

` <?phpfunction print_caps(Iterator $iterator) {    echo strtoupper($iterator->current()) . "
";    return TRUE;}$it u003d new ArrayIterator(array("Apples", "Bananas", "Cherries"));iterator_apply($it, "print_caps", array($it));?> `

Результат виконання цього прикладу:

APPLES
BANANAS
CHERRIES

### Дивіться також

- [array_walk()](function.array-walk.md) - Застосовує задану
користувачем функцію до кожного елементу масиву

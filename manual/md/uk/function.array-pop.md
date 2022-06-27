- [«array_pad](function.array-pad.md)
- [array_product »](function.array-product.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Витягує останній елемент масиву

#array_pop

(PHP 4, PHP 5, PHP 7, PHP 8)

array_pop — Витягує останній елемент масиву

### Опис

**array_pop**(array `&$array`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**array_pop()** витягує та повертає значення останнього елемента
масиву `array`, зменшуючи розмір `array` на один елемент.

> **Примітка**: Ця функція під час дзвінка
> [скидає](function.reset.md) покажчик масиву, переданого
> параметром.

### Список параметрів

`array`
Масив, з якого береться значення.

### Значення, що повертаються

Повертає значення останнього елемента масиву `array`. Якщо `array`
порожній (або не є масивом), буде повернутий **`null`**.

### Помилки

При виклику цієї функції з не масивом буде викликана помилка рівня
[E_WARNING](errorfunc.constants.md).

### Приклади

**Приклад #1 Приклад використання **array_pop()****

` <?php$stack u003d array("orange", "banana", "apple", "raspberry");$fruit u003d array_pop($stack);print_r($stack);?> `

Після цього в $ stack буде тільки 3 елементи:

Array
(
[0] u003d> orange
[1] u003d> banana
[2] u003d> apple
)

і `raspberry` буде присвоєно змінною `$fruit`.

### Дивіться також

- [array_push()](function.array-push.md) - Додає один або
кілька елементів у кінець масиву
- [array_shift()](function.array-shift.md) - Витягує перший
елемент масиву
- [array_unshift()](function.array-unshift.md) - Додає один або
кілька елементів на початок масиву

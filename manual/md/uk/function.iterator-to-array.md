- [« iterator_count](function.iterator-count.md)
- [spl_autoload_call »](function.spl-autoload-call.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- Копіює ітератор у масив

#iterator_to_array

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

iterator_to_array - Копіює ітератор в масив

### Опис

**iterator_to_array**([Traversable](class.traversable.md) `$iterator`,
bool `$preserve_keys` u003d **`true`**): array

Копіює елементи ітератора масив.

### Список параметрів

`iterator`
Копіюваний ітератор.

`preserve_keys`
Чи слід використовувати ключі елементів ітератора як індекси?

Якщо ключ є масивом (array) чи об'єктом (object), то кидається
попередження. Ключі зі значенням **`null`** перетворюються на порожню
рядок, ключі у вигляді чисел з плаваючою точкою (float) обрізаються до них
цілих (int) частин, ключі з ресурсами (resource) кидають
попередження та перетворюються на їх ідентифікатори ресурсу, а логічні
(bool) ключі перетворюються на цілі числа.

> **Примітка**:
>
> Якщо параметр не заданий, або заданий як **`true`**, ключі, що дублюються
> буде перезаписано. Останнє значення із заданим ключем буде в
> результуючий масив. Встановіть цей параметр рівним **`false`**
> для отримання всіх значень.

### Значення, що повертаються

Масив, що містить елементи iterator.

### Приклади

**Приклад #1 Приклад використання **iterator_to_array()****

` <?php$iterator u003d new ArrayIterator(array('recipe'u003d>'pancakes', 'egg', 'milk', 'flour'));var_dump(iterator_to_array($iterator, true));var_dump(itera $iterator, false));?> `

Результат виконання цього прикладу:

array(4) {
["recipe"]u003d>
string(8) "pancakes"
[0]u003d>
string(3) "egg"
[1]u003d>
string(4) "milk"
[2]u003d>
string(5) "flour"
}
array(4) {
[0]u003d>
string(8) "pancakes"
[1]u003d>
string(3) "egg"
[2]u003d>
string(4) "milk"
[3]u003d>
string(5) "flour"
}

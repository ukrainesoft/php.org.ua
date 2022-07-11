- [«class_parents](function.class-parents.md)
- [iterator_apply »](function.iterator-apply.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- Повертає список трейтів, які використовуються заданим класом

#class_uses

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

class_uses — Повертає список трейтів, що використовуються заданим класом

### Опис

**class_uses**(object\|string `$object_or_class`, bool `$autoload` u003d
**`true`**): array\|false

Ця функція повертає масив із іменами трейтів, які використовує
заданий клас `object_or_class`. До цього масиву, однак, не потраплять
трейти, що використовуються у класах-батьках.

### Список параметрів

`object_or_class`
Об'єкт (примірник класу) або рядок (ім'я класу).

`autoload`
Чи викликати за промовчанням [\_\_autoload](language.oop5.autoload.md).

### Значення, що повертаються

У разі успішного виконання буде повернено масив, якщо заданий
клас не існує, повертається **`false`**.

### Приклади

**Приклад #1 Приклад використання **class_uses()****

` <?phptrait foo { }class bar {  use foo;}print_r(class_uses(new bar));print_r(class_uses('bar'));spl_autoload_register();// використання автозавантаження для  | (class_uses('not_loaded', true));?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[foo] u003d> foo
)
Array
(
[foo] u003d> foo
)
Array
(
[trait_of_not_loaded] u003d> trait_of_not_loaded
)

### Дивіться також

- [class_parents()](function.class-parents.md) - Повертає список
батьківських класів заданого класу
- [get_declared_traits()](function.get-declared-traits.md) -
Повертає масив з усіма оголошеними трейтами

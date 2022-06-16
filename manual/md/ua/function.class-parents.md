- [«class_implements](function.class-implements.md)
- [class_uses »](function.class-uses.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- повертає список батьківських класів заданого класу

#class_parents

(PHP 5, PHP 7, PHP 8)

class_parents — Повертає список батьківських класів заданого класу

### Опис

**class_parents**(object\|string `$object_or_class`, bool `$autoload` u003d
**`true`**): array\|false

Ця функція повертає масив із іменами батьківських класів заданого
класу `object_or_class`.

### Список параметрів

`object_or_class`
Об'єкт (примірник класу) або рядок (ім'я класу).

`autoload`
Чи викликати за промовчанням [\_\_autoload](language.oop5.autoload.md).

### Значення, що повертаються

У разі успішного виконання буде повернено масив, якщо заданий
клас не існує, повертається **`false`**.

### Приклади

**Приклад #1 Приклад використання **class_parents()****

`<?phpclass foo { }class bar extends foo {}print_r(class_parents(new bar)); незавантаженого класу 'not_loaded'print_r(class_parents('not_loaded', true));?> `

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
[parent_of_not_loaded] u003d> parent_of_not_loaded
)

### Дивіться також

- [class_implements()](function.class-implements.md) - Повертає
список інтерфейсів, реалізованих у заданому класі чи інтерфейсі

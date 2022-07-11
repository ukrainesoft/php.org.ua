- [« runkit7_method_add](function.runkit7-method-add.md)
- [runkit7_method_redefine »](function.runkit7-method-redefine.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- Копіює метод з одного класу до іншого

# runkit7_method_copy

(PECL runkit7 \>u003d Unknown)

runkit7_method_copy — Копіює метод з одного класу до іншого

### Опис

**runkit7_method_copy**(
string `$destination_class`,
string `$destination_method_name`,
string `$source_class`,
string `$source_method_name` u003d ?
): bool

### Список параметрів

`destination_class`
Цільовий клас для скопійованого методу.

`destination_method_name`
Назва методу призначення.

`source_class`
Вихідний клас скопійованого способу.

`source_method_name`
Ім'я методу копіювання з вихідного класу. Якщо цей параметр
опущено, передбачається значення `destination_method_name`.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **runkit7_method_copy()****

` <?phpclass Foo {   function example() {        return "foo!
";    }}class Bar {    // спочатку ніякіх методів}// копіювання методу example() з класу Foo в класс Bar як baz()' ' / функція висновку скопійованаecho Bar::baz();?> `

Результат виконання цього прикладу:

foo!

### Дивіться також

- [runkit7_method_add()](function.runkit7-method-add.md) -
Динамічно додає новий метод у заданий клас
- [runkit7_method_redefine()](function.runkit7-method-redefine.md) -
Динамічно змінює код заданого методу
- [runkit7_method_remove()](function.runkit7-method-remove.md) -
Динамічно видаляє заданий метод
- [runkit7_method_rename()](function.runkit7-method-rename.md) -
Динамічно змінює ім'я заданого методу
- [runkit7_function_copy()](function.runkit7-function-copy.md) -
Копіює функцію у нове ім'я функції

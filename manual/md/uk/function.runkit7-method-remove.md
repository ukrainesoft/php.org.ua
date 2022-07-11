- [« runkit7_method_redefine](function.runkit7-method-redefine.md)
- [runkit7_method_rename »](function.runkit7-method-rename.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- Динамічно видаляє заданий метод

# runkit7_method_remove

(PECL runkit7 \>u003d Unknown)

runkit7_method_remove - Динамічно видаляє заданий метод

### Опис

**runkit7_method_remove**(string `$class_name`, string `$method_name`):
bool

> **Примітка**: Ця функція не може бути використана для впливу на
> працюючі на даний момент (або ланцюгові) методи.

### Список параметрів

`class_name`
Клас, де потрібно видалити метод.

`method_name`
Ім'я методу, що видаляється.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **runkit7_method_remove()****

` <?phpclass Example {   function foo() {        return "foo!
";    }    function bar() {        return "bar!
";    }}//Remove the 'foo' methodrunkit7_method_remove(   'Example',   'foo');echo implode(' ', get_class_methods('Example

Результат виконання цього прикладу:

bar

### Дивіться також

- [runkit7_method_add()](function.runkit7-method-add.md) -
Динамічно додає новий метод у заданий клас
- [runkit7_method_copy()](function.runkit7-method-copy.md) -
Копіює метод з одного класу до іншого
- [runkit7_method_redefine()](function.runkit7-method-redefine.md) -
Динамічно змінює код заданого методу
- [runkit7_method_rename()](function.runkit7-method-rename.md) -
Динамічно змінює ім'я заданого методу
- [runkit7_function_remove()](function.runkit7-function-remove.md) -
Видаляє визначення функції

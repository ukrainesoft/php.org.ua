- [«runkit7_method_remove](function.runkit7-method-remove.md)
- [runkit7_object_id »](function.runkit7-object-id.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- Динамічно змінює ім'я заданого методу

# runkit7_method_rename

(PECL runkit7 \>u003d Unknown)

runkit7_method_rename - Динамічно змінює ім'я заданого методу

### Опис

**runkit7_method_rename**(string `$class_name`, string
`$source_method_name`, string `$target_method_name`): bool

> **Примітка**: Ця функція не може бути використана для впливу на
> працюючі на даний момент (або ланцюгові) методи.

### Список параметрів

`class_name`
Клас, у якому необхідно перейменувати спосіб.

`source_method_name`
Метод, який слід перейменувати.

`target_method_name`
Нове ім'я методу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **runkit7_method_rename()****

` <?phpclass Example {   function foo() {        return "foo!
";    }}// Перейменування методу 'foo' в 'bar'runkit7_method_rename(    'Example',   ''foo',    'bar');// Ві  

Результат виконання цього прикладу:

foo!

### Дивіться також

- [runkit7_method_add()](function.runkit7-method-add.md) -
Динамічно додає новий метод у заданий клас
- [runkit7_method_copy()](function.runkit7-method-copy.md) -
Копіює метод з одного класу до іншого
- [runkit7_method_redefine()](function.runkit7-method-redefine.md) -
Динамічно змінює код заданого методу
- [runkit7_method_remove()](function.runkit7-method-remove.md) -
Динамічно видаляє заданий метод
- [runkit7_function_rename()](function.runkit7-function-rename.md) -
Змінює ім'я функції

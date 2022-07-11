- [«runkit7_method_copy](function.runkit7-method-copy.md)
- [runkit7_method_remove »](function.runkit7-method-remove.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- Динамічно змінює код заданого методу

# runkit7_method_redefine

(PECL runkit7 \>u003d Unknown)

runkit7_method_redefine - Динамічно змінює код заданого методу

### Опис

**runkit7_method_redefine**(
string `$class_name`,
string `$method_name`,
string `$argument_list`,
string `$code`,
int `$flags` u003d RUNKIT7_ACC_PUBLIC,
string `$doc_comment` u003d **`null`**,
string `$return_type` u003d ?,
bool `$is_strict` u003d ?
): bool

**runkit7_method_redefine**(
string `$class_name`,
string `$method_name`,
[Closure](class.closure.md) `$closure`,
int `$flags` u003d RUNKIT7_ACC_PUBLIC,
string `$doc_comment` u003d **`null`**,
string `$return_type` u003d ?,
bool `$is_strict` u003d ?
): bool

### Список параметрів

`class_name`
Клас, у якому необхідно перевизначити спосіб.

`method_name`
Ім'я методу, який необхідно перевизначити.

`argument_list`
Розділений комами список аргументів для перевизначеного методу.

`code`
Новий код, який буде виконуватись під час виклику `method_name`.

`closure`
Замикання ([closure](class.closure.md)), що визначає метод.

`flags`
Перевизначений метод може бути **`RUNKIT7_ACC_PUBLIC`**,
**`RUNKIT7_ACC_PROTECTED`** або **`RUNKIT7_ACC_PRIVATE`**, і, при
необхідності, об'єднаний за допомогою побітового АБО з
**`RUNKIT7_ACC_STATIC`**.

`doc_comment`
Документальний коментар методу.

`return_type`
Тип методу, що повертається.

`is_strict`
Визначає, чи буде метод поводитися так, начебто він був оголошений в
файл з `strict_typesu003d1`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **runkit7_method_redefine()****

` <?phpclass Example {   function foo() {        return "foo!
";    }}// створення об'єкту Example$e u003d new Example();// висновок Example::foo() (до перевизначення)echo "До: " . $e->foo()о/ '| 'runkit7_method_redefine(   'Example',   'foo',    '',   'return "bar!"
";',    RUNKIT7_ACC_PUBLIC);// виведення Example::foo() (після перевизначення)echo "Після: " . $e->foo();?> `

Результат виконання цього прикладу:

До: foo!
Після: bar!

### Дивіться також

- [runkit7_method_add()](function.runkit7-method-add.md) -
Динамічно додає новий метод у заданий клас
- [runkit7_method_copy()](function.runkit7-method-copy.md) -
Копіює метод з одного класу до іншого
- [runkit7_method_remove()](function.runkit7-method-remove.md) -
Динамічно видаляє заданий метод
- [runkit7_method_rename()](function.runkit7-method-rename.md) -
Динамічно змінює ім'я заданого методу
- [runkit7_function_redefine()](function.runkit7-function-redefine.md) -
Замінює визначення функції новою реалізацією

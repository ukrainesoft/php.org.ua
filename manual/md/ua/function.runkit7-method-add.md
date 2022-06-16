- [« runkit7_import](function.runkit7-import.md)
- [runkit7_method_copy »](function.runkit7-method-copy.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- Динамічно додає новий метод у заданий клас

# runkit7_method_add

(PECL runkit7 \>u003d Unknown)

runkit7_method_add — Динамічно додає новий метод у заданий клас

### Опис

**runkit7_method_add**(
string `$class_name`,
string `$method_name`,
string `$argument_list`,
string `$code`,
int `$flags` u003d RUNKIT7_ACC_PUBLIC,
string `$doc_comment` u003d **`null`**,
string `$return_type` u003d ?,
bool `$is_strict` u003d ?
): bool

**runkit7_method_add**(
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
Клас, у якому потрібно додати метод.

`method_name`
Ім'я методу, який потрібно додати.

`argument_list`
Розділений комами список аргументів для нового методу.

`code`
Код, який буде виконуватись під час виклику `method_name`.

`closure`
Замикання ([closure](class.closure.md)), що визначає метод.

`flags`
Метод може бути **`RUNKIT7_ACC_PUBLIC`**, **`RUNKIT7_ACC_PROTECTED`**
або **`RUNKIT7_ACC_PRIVATE`**, і, при необхідності, об'єднаний за допомогою
побітового АБО з **`RUNKIT7_ACC_STATIC`**.

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

**Приклад #1 Приклад використання **runkit7_method_add()****

` <?phpclass Example {   function foo() {        echo "foo!
";    }}// создание объекта Example$e u003d new Example();// добавление нового общедоступного методаrunkit7_method_add(    'Example',    'add',    '$num1, $num2',    'return $num1 + $num2;', RUNKIT7_ACC_PUBLIC);// додавання 12 + 4echo $e->add(12, 4);?> `

Результат виконання цього прикладу:

16

### Дивіться також

- [runkit7_method_copy()](function.runkit7-method-copy.md) -
Копіює метод з одного класу до іншого
- [runkit7_method_redefine()](function.runkit7-method-redefine.md) -
Динамічно змінює код заданого методу
- [runkit7_method_remove()](function.runkit7-method-remove.md) -
Динамічно видаляє заданий метод
- [runkit7_method_rename()](function.runkit7-method-rename.md) -
Динамічно змінює ім'я заданого методу
- [runkit7_function_add()](function.runkit7-function-add.md) -
Додає нову функцію, функція аналогічна create_function

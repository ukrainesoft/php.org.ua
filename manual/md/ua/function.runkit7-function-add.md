- [«runkit7_constant_remove](function.runkit7-constant-remove.md)
- [runkit7_function_copy »](function.runkit7-function-copy.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- Додає нову функцію, функція аналогічна create_function

# runkit7_function_add

(PECL runkit7 \>u003d Unknown)

runkit7_function_add — Додає нову функцію, функція аналогічна
[create_function()](function.create-function.md)

### Опис

**runkit7_function_add**(
string `$function_name`,
string `$argument_list`,
string `$code`,
bool `$return_by_reference` u003d **`null`**,
string `$doc_comment` u003d **`null`**,
string `$return_type` u003d ?,
bool `$is_strict` u003d ?
): bool

**runkit7_function_add**(
string `$function_name`,
[Closure](class.closure.md) `$closure`,
string `$doc_comment` u003d **`null`**,
string `$return_type` u003d ?,
bool `$is_strict` u003d ?
): bool

### Список параметрів

`function_name`
Ім'я функції, що створюється.

`argument_list`
Список аргументів, розділених комами.

`code`
Код, що становить функцію.

`closure`
Замикання ([closure](class.closure.md)), що визначає функцію.

`return_by_reference`
Визначає, чи функція повинна повертатися за посиланням.

`doc_comment`
Документальний коментар функції.

`return_type`
Тип значення функції, що повертається.

`is_strict`
Визначає, чи повинна функція поводитися так, якби вона була
оголошено у файлі з `strict_typesu003d1`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **runkit7_function_add()****

` <?phprunkit7_function_add('testme','$a,$b','echo "Значення A - $a
"; echo "Значення B - $b
"; '); testme (1,2);?> `

Результат виконання цього прикладу:

Значення A - 1
Значення B-2

### Дивіться також

- [create_function()](function.create-function.md) - Створює функцію
динамічно, оцінюючи рядок коду
- [runkit7_function_redefine()](function.runkit7-function-redefine.md) -
Замінює визначення функції новою реалізацією
- [runkit7_function_copy()](function.runkit7-function-copy.md) -
Копіює функцію у нове ім'я функції
- [runkit7_function_rename()](function.runkit7-function-rename.md) -
Змінює ім'я функції
- [runkit7_function_remove()](function.runkit7-function-remove.md) -
Видаляє визначення функції
- [runkit7_method_add()](function.runkit7-method-add.md) -
Динамічно додає новий метод у заданий клас

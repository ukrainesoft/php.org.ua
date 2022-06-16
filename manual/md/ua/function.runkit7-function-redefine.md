- [« runkit7_function_copy](function.runkit7-function-copy.md)
- [runkit7_function_remove »](function.runkit7-function-remove.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- замінює визначення функції новою реалізацією

# runkit7_function_redefine

(PECL runkit7 \>u003d Unknown)

runkit7_function_redefine — Замінює визначення функції нової
реалізацією

### Опис

**runkit7_function_redefine**(
string `$function_name`,
string `$argument_list`,
string `$code`,
bool `$return_by_reference` u003d **`null`**,
string `$doc_comment` u003d **`null`**,
string `$return_type` u003d ?,
bool `$is_strict` u003d ?
): bool

**runkit7_function_redefine**(
string `$function_name`,
[Closure](class.closure.md) `$closure`,
string `$doc_comment` u003d **`null`**,
string `$return_type` u003d ?,
bool `$is_strict` u003d ?
): bool

> **Примітка**: За замовчуванням, лише функції користувача можуть
> бути видалені, перейменовані чи змінені. Для перекриття внутрішніх
> функцій необхідно включити в `php.ini` опцію
> `runkit.internal_override`.

### Список параметрів

`function_name`
Ім'я функції для перевизначення.

`argument_list`
Новий список аргументів, які приймаються функцією.

`code`
Реалізація нового коду.

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

**Приклад #1 Приклад використання **runkit7_function_redefine()****

` <?phpfunction testme() { echo "Оригінальна реалізація Testme
";}testme();runkit7_function_redefine('testme','','echo "Нова реалізація Testme
";');testme();?> `

Результат виконання цього прикладу:

Оригінальна реалізація Testme
Нова реалізація Testme

### Дивіться також

- [runkit7_function_add()](function.runkit7-function-add.md) -
Додає нову функцію, функція аналогічна create_function
- [runkit7_function_copy()](function.runkit7-function-copy.md) -
Копіює функцію у нове ім'я функції
- [runkit7_function_rename()](function.runkit7-function-rename.md) -
Змінює ім'я функції
- [runkit7_function_remove()](function.runkit7-function-remove.md) -
Видаляє визначення функції
- [runkit7_method_redefine()](function.runkit7-method-redefine.md) -
Динамічно змінює код заданого методу

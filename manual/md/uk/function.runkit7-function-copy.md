- [« runkit7_function_add](function.runkit7-function-add.md)
- [runkit7_function_redefine
»](function.runkit7-function-redefine.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- Копіює функцію в нове ім'я функції

# runkit7_function_copy

(PECL runkit7 \>u003d Unknown)

runkit7_function_copy — Копіює функцію до нового імені функції

### Опис

**runkit7_function_copy**(string `$source_name`, string `$target_name`):
bool

### Список параметрів

`source_name`
Ім'я наявної функції.

`target_name`
Ім'я нової функції, яку потрібно скопіювати визначення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **runkit7_function_copy()****

`<?phpfunction original() { echo "У функції
";}runkit7_function_copy('original','duplicate');original();duplicate();?> `

Результат виконання цього прикладу:

У функції
У функції

### Дивіться також

- [runkit7_function_add()](function.runkit7-function-add.md) -
Додає нову функцію, функція аналогічна create_function
- [runkit7_function_redefine()](function.runkit7-function-redefine.md) -
Замінює визначення функції новою реалізацією
- [runkit7_function_rename()](function.runkit7-function-rename.md) -
Змінює ім'я функції
- [runkit7_function_remove()](function.runkit7-function-remove.md) -
Видаляє визначення функції

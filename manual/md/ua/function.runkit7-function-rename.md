- [« runkit7_function_remove](function.runkit7-function-remove.md)
- [runkit7_import »](function.runkit7-import.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- Змінює ім'я функції

# runkit7_function_rename

(PECL runkit7 \>u003d Unknown)

runkit7_function_rename — Змінює ім'я функції

### Опис

**runkit7_function_rename**(string `$source_name`, string
`$target_name`): bool

> **Примітка**: За замовчуванням, лише функції користувача можуть
> бути видалені, перейменовані чи змінені. Для перекриття внутрішніх
> функцій необхідно включити в `php.ini` опцію
> `runkit.internal_override`.

### Список параметрів

`source_name`
Поточне ім'я функції.

`target_name`
Нове ім'я функції.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [runkit7_function_add()](function.runkit7-function-add.md) -
Додає нову функцію, функція аналогічна create_function
- [runkit7_function_copy()](function.runkit7-function-copy.md) -
Копіює функцію у нове ім'я функції
- [runkit7_function_redefine()](function.runkit7-function-redefine.md) -
Замінює визначення функції новою реалізацією
- [runkit7_function_remove()](function.runkit7-function-remove.md) -
Видаляє визначення функції

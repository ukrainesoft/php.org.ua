- [«
runkit7_function_redefine](function.runkit7-function-redefine.md)
- [runkit7_function_rename »](function.runkit7-function-rename.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- Видаляє визначення функції

# runkit7_function_remove

(PECL runkit7 \>u003d Unknown)

runkit7_function_remove — Видалення визначення функції

### Опис

**runkit7_function_remove**(string `$function_name`): bool

> **Примітка**: За замовчуванням, лише функції користувача можуть
> бути видалені, перейменовані чи змінені. Для перекриття внутрішніх
> функцій необхідно включити в `php.ini` опцію
> `runkit.internal_override`.

### Список параметрів

`function_name`
Ім'я функції, що видаляється.

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
- [runkit7_function_rename()](function.runkit7-function-rename.md) -
Змінює ім'я функції

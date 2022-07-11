- [«get_current_user](function.get-current-user.md)
- [get_extension_funcs »](function.get-extension-funcs.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Повертає асоціативний масив з іменами всіх констант та їх
значень

#get_defined_constants

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

get_defined_constants - Повертає асоціативний масив з іменами всіх
констант та їх значень

### Опис

**get_defined_constants**(bool `$categorize` u003d **`false`**): array

Повертає асоціативний масив з іменами та значеннями всіх певних
нині констант. Масив буде включати константи,
визначені модулями, а також створені функцією
[define()](function.define.md).

### Список параметрів

`categorize`
Використання цього аргументу дає можливість отримати багатовимірний
масив, в якому в першому вимірі будуть утримуватися категорії
констант, а в другому відповідні імена та значення.

` <?phpdefine("MY_CONSTANT", 1);print_r(get_defined_constants(true));?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[Core] u003d> Array
(
[E_ERROR] u003d> 1
[E_WARNING] u003d> 2
[E_PARSE] u003d> 4
[E_NOTICE] u003d> 8
[E_CORE_ERROR] u003d> 16
[E_CORE_WARNING] u003d> 32
[E_COMPILE_ERROR] u003d> 64
[E_COMPILE_WARNING] u003d> 128
[E_USER_ERROR] u003d> 256
[E_USER_WARNING] u003d> 512
[E_USER_NOTICE] u003d> 1024
[E_ALL] u003d> 2047
[TRUE] u003d> 1
)

[pcre] u003d> Array
(
[PREG_PATTERN_ORDER] u003d> 1
[PREG_SET_ORDER] u003d> 2
[PREG_OFFSET_CAPTURE] u003d> 256
[PREG_SPLIT_NO_EMPTY] u003d> 1
[PREG_SPLIT_DELIM_CAPTURE] u003d> 2
[PREG_SPLIT_OFFSET_CAPTURE] u003d> 4
[PREG_GREP_INVERT] u003d> 1
)

[user] u003d> Array
(
[MY_CONSTANT] u003d> 1
)

)

### Значення, що повертаються

Повертає масив виду "ім'я константи" u003d\> "значення константи", з
можливістю згрупувати його на ім'я модуля, що зареєстрував
константи.

### Приклади

**Приклад #1 Приклад використання **get_defined_constants()****

` <?phpprint_r(get_defined_constants());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[E_ERROR] u003d> 1
[E_WARNING] u003d> 2
[E_PARSE] u003d> 4
[E_NOTICE] u003d> 8
[E_CORE_ERROR] u003d> 16
[E_CORE_WARNING] u003d> 32
[E_COMPILE_ERROR] u003d> 64
[E_COMPILE_WARNING] u003d> 128
[E_USER_ERROR] u003d> 256
[E_USER_WARNING] u003d> 512
[E_USER_NOTICE] u003d> 1024
[E_ALL] u003d> 2047
[TRUE] u003d> 1
)

### Дивіться також

- [defined()](function.defined.md) - Перевіряє існування
зазначеної іменованої константи
- [get_loaded_extensions()](function.get-loaded-extensions.md) -
Повертає масив імен усіх скомпілованих та завантажених модулів
- [get_defined_functions()](function.get-defined-functions.md) -
Повертає масив усіх певних функцій
- [get_defined_vars()](function.get-defined-vars.md) - Повертає
масив усіх певних змінних

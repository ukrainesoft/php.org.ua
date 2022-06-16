- [«function_exists](function.function-exists.md)
- [register_shutdown_function
»](function.register-shutdown-function.md)

- [PHP Manual](index.md)
- [Функції керування функціями](ref.funchand.md)
- Повертає масив усіх певних функцій

#get_defined_functions

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

get_defined_functions — Повертає масив усіх функцій

### Опис

**get_defined_functions**(bool `$exclude_disabled` u003d **`true`**): array

Отримує масив усіх функцій.

### Список параметрів

`exclude_disabled`
Чи слід виключати з результату вимкнені функції.

### Значення, що повертаються

Ця функція повертає багатовимірний масив, що містить список усіх
певних функцій як вбудованих (внутрішніх), так і
користувальницьких. Внутрішні функції будуть перелічені в елементі
масиву `$arr["internal"]`, а певні користувачем - в елементі
`$arr["user"]` (див. приклад нижче).

### Список змін

| Версія | Опис |
|---------------|--------------------------------- -------------------------------------------------- ------------|
| 8.0.0 | Значення параметра `exclude_disabled` за замовчуванням було змінено з **`false`** на **`true`**. |
| 7.0.15, 7.1.1 | Доданий параметр `exclude_disabled`. |

### Приклади

**Приклад #1 Приклад використання **get_defined_functions()****

` <?phpfunction myrow($id, $data){    return "<tr><th>$id</th><td>$data</td></tr>
";}$arr u003d get_defined_functions();print_r($arr);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[internal] u003d> Array
(
[0] u003d> zend_version
[1] u003d> func_num_args
[2] u003d> func_get_arg
[3] u003d> func_get_args
[4] u003d> strlen
[5] u003d> strcmp
[6] u003d> strncmp
...
[750] u003d> bcscale
[751] u003d> bccomp
)

[user] u003d> Array
(
[0] u003d> myrow
)

)

### Дивіться також

- [function_exists()](function.function-exists.md) - Повертає
true, якщо зазначена функція визначена
- [get_defined_vars()](function.get-defined-vars.md) - Повертає
масив усіх певних змінних
- [get_defined_constants()](function.get-defined-constants.md) -
Повертає асоціативний масив з іменами всіх констант та їх
значень
- [get_declared_classes()](function.get-declared-classes.md) -
Повертає масив із іменами оголошених класів

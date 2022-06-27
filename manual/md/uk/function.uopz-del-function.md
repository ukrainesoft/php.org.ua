- [«uopz_copy](function.uopz-copy.md)
- [uopz_delete »] (function.uopz-delete.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Видаляє раніше додану функцію або метод

#uopz_del_function

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_del_function — Видалення раніше доданої функції або методу

### Опис

**uopz_del_function**(string `$function`): bool

**uopz_del_function**(string `$class`, string `$function`, int `&$all` u003d
**`true`**): bool

Видаляє раніше додану функцію або метод.

### Список параметрів

`class`
Назва класу.

`function`
Ім'я функції чи методу.

`all`
Чи торкнуться всі класи, які походять від класу (`class`).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

**uopz_del_function()** викидає
[RuntimeException](class.runtimeexception.md), якщо функція видаляється
або метод не були додані за допомогою
[uopz_add_function()](function.uopz-add-function.md).

### Приклади

**Приклад #1 Просте використання **uopz_del_function()****

` <?phpuopz_add_function('foo', function () {echo 'bar';});var_dump(function_exists('foo'));uopz_del_function('foo');var_dump(function_exists('foo'));?> `

Результат виконання цього прикладу:

bool(true)
bool(false)

### Дивіться також

- [uopz_add_function()](function.uopz-add-function.md) - Додає
неіснуючу функцію чи метод
- [uopz_unset_return()](function.uopz-unset-return.md) - Скасує
раніше встановлене значення, що повертається для функції

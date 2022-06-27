- [« Функції Uopz](ref.uopz.md)
- [uopz_allow_exit »] (function.uopz-allow-exit.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Додає неіснуючу функцію чи метод

#uopz_add_function

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_add_function — Додає неіснуючу функцію або метод

### Опис

**uopz_add_function**(string `$function`, [Closure](class.closure.md)
`$handler`, int `&$flags` u003d ZEND_ACC_PUBLIC): bool

**uopz_add_function**(
string `$class`,
string `$function`,
[Closure](class.closure.md) `$handler`,
int `&$flags` u003d ZEND_ACC_PUBLIC,
int `&$all` u003d **`true`**
): bool

Додає неіснуючу функцію чи метод.

### Список параметрів

`class`
Назва класу.

`function`
Ім'я функції чи методу.

`handler`
Об'єкт [Closure](class.closure.md), який визначає нову функцію
чи метод.

`flags`
Прапори для встановлення нової функції або методу.

`all`
Чи торкнуться всі класи, які походять від класу (`class`).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

**uopz_add_function()** викидає
[RuntimeException](class.runtimeexception.md), якщо додається
функція чи метод вже існує.

### Приклади

**Приклад #1 Просте використання **uopz_add_function()****

` <?phpuopz_add_function('foo', function () {echo 'bar';});foo();?> `

Результат виконання цього прикладу:

bar

### Дивіться також

- [uopz_del_function()](function.uopz-del-function.md) - Видаляє
раніше додану функцію чи метод
- [uopz_set_return()](function.uopz-set-return.md) - Надати
значення, що повертається для існуючої функції

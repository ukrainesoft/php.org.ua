- [«uopz_undefine](function.uopz-undefine.md)
- [uopz_unset_mock »](function.uopz-unset-mock.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Видаляє раніше встановлену функцію чи метод

#uopz_unset_hook

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_unset_hook — Видалення раніше встановленої функції або методу

### Опис

**uopz_unset_hook**(string `$function`): bool

**uopz_unset_hook**(string `$class`, string `$function`): bool

Видаляє раніше встановлену функцію або метод.

### Список параметрів

`class`
Назва класу.

`function`
Ім'я функції чи методу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Просте використання **uopz_unset_hook()****

` <?phpfunction foo() {    echo 'foo';}uopz_set_hook('foo', function () {echo 'bar';});foo();echo PHP_EOL;uopz_unset_hook('fo' ?> `

Результат виконання цього прикладу:

barfoo
foo

### Дивіться також

- [uopz_set_hook()](function.uopz-set-hook.md) - Встановлює
обробник для виконання під час виклику функції або методу
- [uopz_get_hook()](function.uopz-get-hook.md) - Отримує раніше
встановлений обробник на функцію чи метод

- [«uopz_get_exit_status](function.uopz-get-exit-status.md)
- [uopz_get_mock »](function.uopz-get-mock.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- отримує раніше встановлений обробник на функцію або метод

#uopz_get_hook

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_get_hook — Отримує раніше встановлений обробник на функцію або
метод

### Опис

**uopz_get_hook**(string `$function`): [Closure](class.closure.md)

**uopz_get_hook**(string `$class`, string `$function`):
[Closure](class.closure.md)

Отримує встановлений обробник на функцію або метод.

### Список параметрів

`class`
Назва класу.

`function`
Ім'я функції чи методу.

### Значення, що повертаються

Повертає раніше встановлений обробник на функцію або метод, або
**`null`**, якщо обробник не було встановлено.

### Приклади

**Приклад #1 Просте використання **uopz_get_hook()****

` <?phpfunction foo() {    echo 'foo';}uopz_set_hook('foo', function () {echo 'bar';});var_dump(uopz_get_hook('foo'));?> `

Результатом виконання цього прикладу буде щось подібне:

object(Closure)#2 (0) {
}

### Дивіться також

- [uopz_set_hook()](function.uopz-set-hook.md) - Встановлює
обробник для виконання під час виклику функції або методу
- [uopz_unset_hook()](function.uopz-unset-hook.md) - Видаляє раніше
встановлену функцію чи метод

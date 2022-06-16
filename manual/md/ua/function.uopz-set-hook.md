- [«uopz_restore](function.uopz-restore.md)
- [uopz_set_mock »](function.uopz-set-mock.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Встановлює обробник для виконання під час виклику функції або
методу

#uopz_set_hook

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_set_hook — Встановлює обробник для дзвінка
функції або методу

### Опис

**uopz_set_hook**(string `$function`, [Closure](class.closure.md)
`$hook`): bool

**uopz_set_hook**(string `$class`, string `$function`,
[Closure](class.closure.md) `$hook`): bool

Встановлює обробник для виконання виклику функції або методу.

### Список параметрів

`class`
Назва класу.

`function`
Ім'я функції чи методу.

`hook`
Замикання, яке виконується під час виклику функції або методу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Просте використання **uopz_set_hook()****

` <?phpfunction foo() {    echo 'foo';}uopz_set_hook('foo', function () {echo 'bar';});foo();?> `

Результат виконання цього прикладу:

barfoo

### Дивіться також

- [uopz_get_hook()](function.uopz-get-hook.md) - Отримує раніше
встановлений обробник на функцію чи метод
- [uopz_unset_hook()](function.uopz-unset-hook.md) - Видаляє раніше
встановлену функцію чи метод

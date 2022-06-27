- [«uopz_set_static](function.uopz-set-static.md)
- [uopz_unset_hook »](function.uopz-unset-hook.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- скасовує визначення константи

#uopz_undefine

(PECL uopz 1, PECL uopz 2, PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_undefine — Скасує визначення константи

### Опис

**uopz_undefine**(string `$constant`): bool

**uopz_undefine**(string `$class`, string `$constant`): bool

Видаляє константу під час виконання

### Список параметрів

`class`
Назва класу, що містить `constant`

`constant`
Ім'я існуючої константи

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **uopz_undefine()****

` <?phpdefine("MY", true);uopz_undefine("MY");var_dump(defined("MY"));?> `

Результат виконання цього прикладу:

bool(false)

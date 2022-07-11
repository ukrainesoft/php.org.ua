- [«
register_shutdown_function](function.register-shutdown-function.md)
- [unregister_tick_function »](function.unregister-tick-function.md)

- [PHP Manual](index.md)
- [Функції керування функціями](ref.funchand.md)
- Реєструє функцію для виконання при кожному тику

# register_tick_function

(PHP 4 \>u003d 4.0.3, PHP 5, PHP 7, PHP 8)

register_tick_function — Реєструє функцію для виконання при кожному
тиці

### Опис

**register_tick_function**([callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`): bool

Реєструє функцію callback, яка повинна викликатися при кожному
[тике](control-structures.declare.md#control-structures.declare.ticks).

### Список параметрів

`callback`
Реєстрована функція.

`args`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **register_tick_function()****

` <?phpdeclare(ticks u003d 1); , true);?> `

### Дивіться також

- [declare](control-structures.declare.md)
- [unregister_tick_function()](function.unregister-tick-function.md) -
Видаляє функцію зі списку зареєстрованих для виконання на
кожному тиці

- [« register_tick_function](function.register-tick-function.md)
- [Reflection »](book.reflection.md)

- [PHP Manual](index.md)
- [Функції керування функціями](ref.funchand.md)
- Видаляє функцію зі списку зареєстрованих для виконання на
кожному тиці

#unregister_tick_function

(PHP 4 \>u003d 4.0.3, PHP 5, PHP 7, PHP 8)

unregister_tick_function — Видалення функції зі списку зареєстрованих
для виконання на кожному тику

### Опис

**unregister_tick_function**([callable](language.types.callable.md)
`$callback`): void

Видаляє `function` зі списку функцій, тому вона більше не виконується
при кожному тику (дивіться [tick](control-structures.declare.md)).

### Список параметрів

`callback`
Функція, що видаляється.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [register_tick_function()](function.register-tick-function.md) -
Реєструє функцію для виконання при кожному тику

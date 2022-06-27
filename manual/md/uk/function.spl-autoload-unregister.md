- [« spl_autoload_register](function.spl-autoload-register.md)
- [spl_autoload »](function.spl-autoload.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- Скасування реєстрації функції як реалізацію методу
\_\_autoload()

# spl_autoload_unregister

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

spl_autoload_unregister — Скасувати реєстрацію функції як
реалізації методу \_\_autoload()

### Опис

**spl_autoload_unregister**([callable](language.types.callable.md)
`$callback`): bool

Видаляє функцію із черги автозавантаження. Якщо черга була активна та
після видалення функції виявиться порожньою, вона буде автоматично
деактивовано.

Коли ця функція призводить до деактивації черги, будь-яка функція
\_\_autoload, яка раніше існувала, не буде повторно
активовано.

### Список параметрів

`callback`
Функція автозавантаження, реєстрацію якої потрібно зняти.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

- [« spl_autoload_extensions](function.spl-autoload-extensions.md)
- [spl_autoload_register »](function.spl-autoload-register.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- Отримання списку всіх зареєстрованих функцій \_\_autoload()

# spl_autoload_functions

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

spl_autoload_functions — Отримати список усіх зареєстрованих
функцій \_\_autoload()

### Опис

**spl_autoload_functions**(): array

Отримує список усіх зареєстрованих функцій \_\_autoload().

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив (array) всіх зареєстрованих у \_\_autoload функцій. Якщо
черга автозавантаження не активована, поверне **`false`**. Якщо жодна
функція не зареєстрована, поверне порожній масив.

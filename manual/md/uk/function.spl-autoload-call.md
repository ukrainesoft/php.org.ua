- [« iterator_to_array](function.iterator-to-array.md)
- [spl_autoload_extensions »](function.spl-autoload-extensions.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- Спроба завантажити клас усіма зареєстрованими функціями
\_\_autoload()

# spl_autoload_call

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

spl_autoload_call — Спроба завантажити клас усіма зареєстрованими
функціями \_\_autoload()

### Опис

**spl_autoload_call**(string `$class`): void

Цю функцію можна використовувати для ручного пошуку класу або інтерфейсу,
використовуючи всі зареєстровані методи \_\_autoload.

### Список параметрів

`class`
Ім'я класу, що шукається.

### Значення, що повертаються

Функція не повертає значення після виконання.

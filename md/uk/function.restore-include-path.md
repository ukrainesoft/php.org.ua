- [«putenv](function.putenv.md)
- [set_include_path »](function.set-include-path.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Відновлює початкове значення налаштування конфігурації
include_path

# restore_include_path

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7)

restore_include_path — Відновлює початкове значення налаштування
конфігурації include_path

**Увага**

Ця функція *ЗАСТАРІЛА*, починаючи з PHP 7.4.0 і була *ВИДАЛЕНА*, починаючи з
PHP 8.0.0 Використовувати цю функцію не рекомендується.

### Опис

**restore_include_path**(): void

Відновлює вихідне значення конфігураційної установки
[include_path](ini.core.md#ini.include-path), яке записано в
`php.ini`

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **restore_include_path()****

`<?phpecho get_include_path(); // .:/usr/local/lib/phpset_include_path('/inc');echo get_include_path(); // /increstore_include_path();// або такini_restore('include_path');echo get_include_path(); // .:/usr/local/lib/php?> `

### Дивіться також

- [ini_restore()](function.ini-restore.md) - Відновлює
значення налаштування конфігурації
- [get_include_path()](function.get-include-path.md) - Отримання
поточного значення конфігураційної установки include_path
- [set_include_path()](function.set-include-path.md) - Встановлює
значення налаштування конфігурації include_path
- [include](function.include.md) - include

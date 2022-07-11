- [«get_extension_funcs](function.get-extension-funcs.md)
- [get_included_files »](function.get-included-files.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Отримання поточного значення конфігураційної установки include_path

#get_include_path

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

get_include_path — Отримання поточного значення конфігураційної установки
include_path

### Опис

**get_include_path**(): string\|false

Отримує значення налаштування конфігурації
[include_path](ini.core.md#ini.include-path).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає шлях до файлу у вигляді рядка або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **get_include_path()****

` <?phpecho get_include_path();// або використовуючи ini_get()echo ini_get('include_path');?> `

### Дивіться також

- [ini_get()](function.ini-get.md) - Отримує значення налаштування
конфігурації
- [restore_include_path()](function.restore-include-path.md) -
Відновлює початкове значення конфігурації
include_path
- [set_include_path()](function.set-include-path.md) - Встановлює
значення налаштування конфігурації include_path
- [include](function.include.md) - include

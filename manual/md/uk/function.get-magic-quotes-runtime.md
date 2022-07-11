- [«get_magic_quotes_gpc](function.get-magic-quotes-gpc.md)
- [get_required_files »](function.get-required-files.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Отримання поточного значення налаштування конфігурації
magic_quotes_runtime

#get_magic_quotes_runtime

(PHP 4, PHP 5, PHP 7)

get_magic_quotes_runtime — Отримання поточного значення налаштування
конфігурації magic_quotes_runtime

**Увага**

Ця функція *ЗАСТАРІЛА*, починаючи з PHP 7.4.0 і була *ВИДАЛЕНА*, починаючи з
PHP 8.0.0 Використовувати цю функцію не рекомендується.

### Опис

**get_magic_quotes_runtime**(): bool

Повертає поточне значення налаштування
[magic_quotes_runtime](info.configuration.md#ini.magic-quotes-runtime).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає 0, якщо опція magic_quotes_runtime вимкнена, 1 в іншому
випадку. З версії PHP 5.4.0 завжди повертає **`false`**.

### Список змін

| Версія | Опис |
|--------|-------------------------------|
| 7.4.0 | Функція оголошена застарілою. |

### Приклади

**Приклад #1 Приклад використання **get_magic_quotes_runtime()****

` <?php// Перевірка, працює ли magic_quotes_runtimeif (get_magic_quotes_runtime()){    // відключення   set_magic_quotes_runtime(false);}?> ``

### Дивіться також

- [get_magic_quotes_gpc()](function.get-magic-quotes-gpc.md) -
Отримання поточного значення конфігурації magic_quotes_gpc

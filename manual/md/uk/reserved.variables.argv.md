- [«$argc](reserved.variables.argc.md)
- [Предвизначені винятки »](reserved.exceptions.md)

- [PHP Manual](index.md)
- [Предвизначені змінні](reserved.variables.md)
- Масив переданих скрипту аргументів

# $argv

(PHP 4, PHP 5, PHP 7, PHP 8)

$argv — Масив переданих скрипту аргументів

### Опис

Містить масив (array) всіх аргументів, переданих скрипту під час запуску
з [командного рядка](features.commandline.md).

> **Примітка**: Перший аргумент `$argv[0]` завжди містить ім'я файлу
> запущеного сценарію.

> **Примітка**: Ця змінна недоступна, якщо
> [register_argc_argv](ini.core.md#ini.register-argc-argv) вимкнено.

### Приклади

**Приклад #1 Приклад використання `$argv`**

` <?phpvar_dump($argv);?> `

Запустимо приклад у командному рядку: php script.php arg1 arg2 arg3

Результатом виконання цього прикладу буде щось подібне:

array(4) {
[0]u003d>
string(10) "script.php"
[1]u003d>
string(4) "arg1"
[2]u003d>
string(4) "arg2"
[3]u003d>
string(4) "arg3"
}

### Примітки

> **Примітка**:
>
> Доступно як `$_SERVER['argv']`.

### Дивіться також

- [getopt()](function.getopt.md) - Отримує параметри зі списку
аргументів командного рядка
- [`$argc`](reserved.variables.argc.md)

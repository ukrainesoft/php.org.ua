- [«
$http_response_header](reserved.variables.httpresponseheader.md)
- [$argv »](reserved.variables.argv.md)

- [PHP Manual](index.md)
- [Предвизначені змінні](reserved.variables.md)
- Кількість аргументів, переданих скрипту

# $argc

(PHP 4, PHP 5, PHP 7, PHP 8)

$argc — Кількість аргументів, переданих скрипту

### Опис

Містить кількість аргументів, переданих поточному скрипту під час запуску
з [командного рядка](features.commandline.md).

> **Примітка**: Ім'я файлу скрипта завжди передається як перший
> аргументу, таким чином, мінімальне значення `$argc` дорівнює `1`.

> **Примітка**: Ця змінна недоступна, якщо
> [register_argc_argv](ini.core.md#ini.register-argc-argv) вимкнено.

### Приклади

**Приклад #1 Приклад використання `$argc`**

` <?phpvar_dump($argc);?> `

Запустимо приклад у командному рядку: php script.php arg1 arg2 arg3

Результатом виконання цього прикладу буде щось подібне:

int(4)

### Примітки

> **Примітка**:
>
> Доступно як `$_SERVER['argc']`.

### Дивіться також

- [getopt()](function.getopt.md) - Отримує параметри зі списку
аргументів командного рядка
- [`$argv`](reserved.variables.argv.md)

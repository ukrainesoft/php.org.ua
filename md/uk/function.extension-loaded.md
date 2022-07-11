- [«dl](function.dl.md)
- [gc_collect_cycles »](function.gc-collect-cycles.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Визначає, чи завантажений модуль

# extension_loaded

(PHP 4, PHP 5, PHP 7, PHP 8)

extension_loaded — Визначає, чи завантажено модуль

### Опис

**extension_loaded**(string `$extension`): bool

Визначає, чи вказаний модуль завантажено.

### Список параметрів

`extension`
Ім'я модуль. Цей параметр реєстронезалежний.

Щоб переглянути всі імена модулів, скористайтеся функцією
[phpinfo()](function.phpinfo.md). Якщо ви працюєте з `CGI`- або
`CLI`-версією PHP, використовуйте параметр **-m** для відображення списку
доступних модулів:

$php-m
[PHP Modules]
xml
tokenizer
standard
sockets
session
posix
pcre
overload
mysql
mbstring
ctype

[Zend Modules]

### Значення, що повертаються

Повертає **`true`**, якщо модуль із заданим ім'ям `extension`
завантажений або **`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **extension_loaded()****

` <?phpif (!extension_loaded('gd')) {   if (!dl('gd.so')) {         exit; }}?> `

### Дивіться також

- [get_loaded_extensions()](function.get-loaded-extensions.md) -
Повертає масив імен усіх скомпілованих та завантажених модулів
- [get_extension_funcs()](function.get-extension-funcs.md) -
Повертає масив імен функцій модуля
- [phpinfo()](function.phpinfo.md) - Виводить інформацію про поточну
конфігурації PHP
- [dl()](function.dl.md) - Завантажує модуль PHP під час виконання
- [function_exists()](function.function-exists.md) - Повертає
true, якщо зазначена функція визначена

- [«restore_include_path](function.restore-include-path.md)
- [set_time_limit »](function.set-time-limit.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Встановлює значення конфігурації include_path

#set_include_path

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

set_include_path — Встановлює налаштування конфігурації
include_path

### Опис

**set_include_path**(string `$include_path`): string\|false

Задає значення конфігураційної установки
[include_path](ini.core.md#ini.include-path) на час виконання
скрипт.

### Список параметрів

`include_path`
Нове значення налаштування [include_path](ini.core.md#ini.include-path)

### Значення, що повертаються

Повертає старе значення
[include_path](ini.core.md#ini.include-path) у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **set_include_path()****

` <?phpset_include_path('/usr/lib/pear');// Або такini_set('include_path', '/usr/lib/pear');?> `

**Приклад #2 Упорядкування більш довгого шляху include path**

Використовуючи константу **`PATH_SEPARATOR`**, можна додати до шляху
вкладені директорії незалежно від операційної системи.

У цьому прикладі ми додамо `/usr/lib/pear` до кінця існуючого шляху
`include_path`.

` <?php$path u003d '/usr/lib/pear';set_include_path(get_include_path() . PATH_SEPARATOR . $path);?> `

### Дивіться також

- [ini_set()](function.ini-set.md) - Встановлює значення
налаштування конфігурації
- [get_include_path()](function.get-include-path.md) - Отримання
поточного значення конфігураційної установки include_path
- [restore_include_path()](function.restore-include-path.md) -
Відновлює початкове значення конфігурації
include_path
- [include](function.include.md) - include

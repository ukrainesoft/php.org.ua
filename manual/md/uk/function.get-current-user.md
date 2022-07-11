- [«get_cfg_var](function.get-cfg-var.md)
- [get_defined_constants »](function.get-defined-constants.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- отримує ім'я власника поточного скрипта PHP

#get_current_user

(PHP 4, PHP 5, PHP 7, PHP 8)

get_current_user — Отримує ім'я власника поточного скрипта PHP

### Опис

**get_current_user**(): string

Повертає ім'я власника поточного PHP-скрипту.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я користувача як рядок.

### Приклади

**Приклад #1 Приклад використання **get_current_user()****

`<?phpecho 'Поточний власник|скрипта: ' . get_current_user();?> `

Результатом виконання цього прикладу буде щось подібне:

Поточний власник скрипту: SYSTEM

### Дивіться також

- [getmyuid()](function.getmyuid.md) - Отримання UID власника
скрипта PHP
- [getmygid()](function.getmygid.md) - Отримати GID власника
скрипта PHP
- [getmypid()](function.getmypid.md) - Отримання ID процесу PHP
- [getmyinode()](function.getmyinode.md) - Отримує значення inode
поточного скрипту
- [getlastmod()](function.getlastmod.md) - Отримує час останнього
модифікації сторінки

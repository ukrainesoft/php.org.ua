- [«posix_setgid](function.posix-setgid.md)
- [posix_setrlimit »](function.posix-setrlimit.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Встановлює ідентифікатор групи процесу менеджера задач

#posix_setpgid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_setpgid — Встановлює ідентифікатор групи процесу
менеджера завдань

### Опис

**posix_setpgid**(int `$process_id`, int `$process_group_id`): bool

Додає до процесу 'process_id' ідентифікатор групи
`process_group_id`.

### Список параметрів

`process_id`
Ідентифікатор процесу.

`process_group_id`
Ідентифікатор групи процесу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- Для отримання більш повної інформації про процеси та управління
Завданнями зверніться до POSIX.1 та setsid(2) керівництва в POSIX
системах.

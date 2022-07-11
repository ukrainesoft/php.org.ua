- [«assert](function.assert.md)
- [cli_set_process_title »](function.cli-set-process-title.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Повертає заголовок поточного процесу

#cli_get_process_title

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

cli_get_process_title — Повертає заголовок поточного процесу

### Опис

**cli_get_process_title**(): ?string

Повертає заголовок поточного процесу, встановлений
[cli_set_process_title()](function.cli-set-process-title.md). Зверніть
увагу, що в залежності від вашої операційної системи, це ім'я може
не співпадати з тим, що покажуть утиліти **ps** та **top**.

Ця функція доступна лише у режимі [CLI](features.commandline.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Поверне рядок із заголовком процесу або **`null`** у разі
виникнення помилки.

### Помилки

Якщо команда не підтримується вашою операційною системою, буде
викликана помилка рівня **`E_WARNING`**.

### Приклади

**Приклад #1 Приклад використання **cli_get_process_title()****

`<?phpecho "Заголовок процесу: " . cli_get_process_title() . "
";?> `

### Дивіться також

- [cli_set_process_title()](function.cli-set-process-title.md) -
Встановлює заголовок процесу

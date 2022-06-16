- [«cli_get_process_title](function.cli-get-process-title.md)
- [dl »] (function.dl.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Встановлює заголовок процесу

#cli_set_process_title

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

cli_set_process_title — Встановлює заголовок процесу

### Опис

**cli_set_process_title**(string `$title`): bool

Встановлює заголовок процесу, видиме утилітами **top** та **ps**.
Ця функція доступна лише у режимі [CLI](features.commandline.md).

### Список параметрів

`title`
Нове ім'я.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Якщо команда не підтримується вашою операційною системою, буде
викликана помилка рівня **`E_WARNING`**.

### Приклади

**Приклад #1 Приклад використання **cli_set_process_title()****

` <?php$title u003d "Мій приголомшливий PHP-скрипт";$pid u003d getmypid(); // ви можете використовувати це, щоб бачити заголовок процесу в psif (!cli_set_process_title($title)) {    echo "Не удалося встановити заголовок$ ...
";   exit(1);} else {    echo "Заголовок процесу '$title' для PID $pid буввстановлений!
";    sleep(5);}?> `

### Дивіться також

- [cli_get_process_title()](function.cli-get-process-title.md) -
Повертає заголовок поточного процесу
- **setproctitle()**

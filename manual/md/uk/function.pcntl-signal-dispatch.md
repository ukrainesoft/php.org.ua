- [« pcntl_setpriority](function.pcntl-setpriority.md)
- [pcntl_signal_get_handler »](function.pcntl-signal-get-handler.md)

- [PHP Manual](index.md)
- [Функції PCNTL](ref.pcntl.md)
- Викликає обробники для сигналів очікування

#pcntl_signal_dispatch

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

pcntl_signal_dispatch — Викликає обробники для сигналів очікування

### Опис

**pcntl_signal_dispatch**(): bool

Функція **pcntl_signal_dispatch()** викликає обробники сигналів,
встановлені функцією [pcntl_signal()](function.pcntl-signal.md), для
кожного сигналу очікування.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **pcntl_signal_dispatch()**:**

`<?phpecho "Установка обробника сигналу SIGHUP...
";pcntl_signal(SIGHUP, function($signo) {     echo "Викликаний обробник сигналу SIGHUP
";});echo "Посилаємо сигнал SIGHUP самому собі...
";posix_kill(posix_getpid(), SIGHUP);echo "Отравка всіх сигналів...
";pcntl_signal_dispatch();echo "Завершено.
";?> `

Результатом виконання цього прикладу буде щось подібне:

Установка обробника сигналу SIGHUP...
Надсилаємо сигнал SIGHUP самому собі...
Отруєння всіх сигналів...
Викликаний обробник сигналу SIGHUP
Завершено.

### Дивіться також

- [pcntl_signal()](function.pcntl-signal.md) - Встановлення обробника
сигналу
- [pcntl_sigprocmask()](function.pcntl-sigprocmask.md) - Задає та
витягує список сигналів, що блокуються
- [pcntl_sigwaitinfo()](function.pcntl-sigwaitinfo.md) - Очікування
сигналів
- [pcntl_sigtimedwait()](function.pcntl-sigtimedwait.md) - Очікує
сигнали протягом заданого часу

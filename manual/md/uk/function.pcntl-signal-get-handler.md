- [« pcntl_signal_dispatch](function.pcntl-signal-dispatch.md)
- [pcntl_signal »](function.pcntl-signal.md)

- [PHP Manual](index.md)
- [Функції PCNTL](ref.pcntl.md)
- Отримати поточний обробник вказаного сигналу

#pcntl_signal_get_handler

(PHP 7 \>u003d 7.1.0, PHP 8)

pcntl_signal_get_handler — Отримати поточний обробник зазначеного
сигналу

### Опис

**pcntl_signal_get_handler**(int `$signal`):
[callable](language.types.callable.md)\|int

Функція **pcntl_signal_get_handler()** отримає поточний обробник
вказаного сигналу `signal`.

### Список параметрів

`signal`
Номер сигналу.

### Значення, що повертаються

Функція поверне ціле значення, що вказує на константи
**`SIG_DFL`** або **`SIG_IGN`**. Якщо заданий обробник користувача,
повертається цей [callable](language.types.callable.md). функції.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----------------|
| 7.1.0 | Додано функцію **pcntl_signal_get_handler()**. |

### Приклади

**Приклад #1 Приклад використання **pcntl_signal_get_handler()****

` <?phpvar_dump(pcntl_signal_get_handler(SIGUSR1)); // Висновок: int(0)function pcntl_test($signo) {}pcntl_signal(SIGUSR1, 'pcntl_test');var_dump(pcntl_signal_get_handler(SIGUSR1)); // Висновок: string (10) pcntl_test pcntl_signal (SIGUSR1, SIG_DFL); var_dump (pcntl_signal_get_handler (SIGUSR1)); // Висновок: int (0) pcntl_signal (SIGUSR1, SIG_IGN); var_dump (pcntl_signal_get_handler (SIGUSR1)); // Висновок: int (1)?

### Дивіться також

- [pcntl_signal()](function.pcntl-signal.md) - Встановлення обробника
сигналу

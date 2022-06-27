- [«pcntl_signal](function.pcntl-signal.md)
- [pcntl_sigtimedwait »](function.pcntl-sigtimedwait.md)

- [PHP Manual](index.md)
- [Функції PCNTL](ref.pcntl.md)
- Задає та витягує список сигналів, що блокуються.

#pcntl_sigprocmask

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

pcntl_sigprocmask — Задає та витягує список сигналів, що блокуються.

### Опис

**pcntl_sigprocmask**(int `$mode`, array `$signals`, array
`&$old_signals` u003d **`null`**): bool

Функція **pcntl_sigprocmask()** додає, видаляє або задає список
блокованих процесів в залежності від значення переданого в
аргумент "mode".

### Список параметрів

`mode`
Задає поведінку функції **pcntl_sigprocmask()**. Можливі значення:

- **`SIG_BLOCK`**: Додати сигнал до списку вже блокованих сигналів.
- **`SIG_UNBLOCK`**: Видалити сигнал зі списку блокованих.
- **`SIG_SETMASK`**: Замінити список сигналів, що блокуються, новим
списком.

`signals`
Список сигналів

`old_signals`
Функція передасть за посиланням у аргумент `old_signals` раніше заданий
список сигналів, що блокуються.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **pcntl_sigprocmask()****

` <?phppcntl_sigprocmask(SIG_BLOCK, array(SIGHUP));$oldset u003d array();pcntl_sigprocmask(SIG_UNBLOCK, array(SIGHUP), $oldset);?> `

### Дивіться також

- [pcntl_sigwaitinfo()](function.pcntl-sigwaitinfo.md) - Очікування
сигналів
- [pcntl_sigtimedwait()](function.pcntl-sigtimedwait.md) - Очікує
сигнали протягом заданого часу

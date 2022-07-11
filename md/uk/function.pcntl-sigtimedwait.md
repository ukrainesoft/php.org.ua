- [« pcntl_sigprocmask](function.pcntl-sigprocmask.md)
- [pcntl_sigwaitinfo »](function.pcntl-sigwaitinfo.md)

- [PHP Manual](index.md)
- [Функції PCNTL](ref.pcntl.md)
- Очікує сигнали протягом заданого часу

#pcntl_sigtimedwait

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

pcntl_sigtimedwait — Очікує сигнали протягом заданого часу

### Опис

**pcntl_sigtimedwait**(
array `$signals`,
array `&$info` u003d \[\],
int `$seconds` u003d 0,
int `$nanoseconds` u003d 0
): int\|false

Функція **pcntl_sigtimedwait()** поводиться так само як і функція
[pcntl_sigwaitinfo()](function.pcntl-sigwaitinfo.md) за винятком
того, що приймає два додаткові аргументи, `seconds` і
`nanoseconds`, які встановлюють верхню межу часу, який
скрипт може простоювати.

### Список параметрів

`signals`
Масив очікуваних сигналів.

`info`
`info` містить інформацію про сигнал. Дивіться функцію
[pcntl_sigwaitinfo()](function.pcntl-sigwaitinfo.md).

`seconds`
Час очікування за секунди.

`nanoseconds`
Час очікування у наносекундах.

### Значення, що повертаються

У разі успішного виконання **pcntl_sigtimedwait()** повертає номер
сигналу або **`false`** у разі виникнення помилки.

### Дивіться також

- [pcntl_sigprocmask()](function.pcntl-sigprocmask.md) - Задає та
витягує список сигналів, що блокуються
- [pcntl_sigwaitinfo()](function.pcntl-sigwaitinfo.md) - Очікування
сигналів

- [« pcntl_sigtimedwait](function.pcntl-sigtimedwait.md)
- [pcntl_strerror »](function.pcntl-strerror.md)

- [PHP Manual](index.md)
- [Функції PCNTL](ref.pcntl.md)
- Очікування сигналів

#pcntl_sigwaitinfo

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

pcntl_sigwaitinfo — Очікування сигналів

### Опис

**pcntl_sigwaitinfo**(array `$signals`, array `&$info` u003d \[\]):
int\|false

Функція **pcntl_sigwaitinfo()** припиняє виконання викликаючого
скрипта до тих пір, поки не буде доставлено один із сигналів, вказаних
в `signals`. Якщо один із сигналів вже очікує обробки (наприклад,
заблокований
[pcntl_sigprocmask()](function.pcntl-sigprocmask.md)),**pcntl_sigwaitinfo()**
негайно поверне управління.

### Список параметрів

`signals`
Масив очікуваних сигналів.

`info`
Аргумент `info` масив, що містить інформацію про сигнал.

Наступні ключі масиву (аргументу) застосовуються для всіх сигналів

- signo: Номер сигналу
- errno: Номер помилки
- код: Код сигналу

Наступні елементи масиву застосовуються для сигналу **`SIGCHLD`**:

- status: Статус виходу дочірнього процесу або сигнал, що змусив
дочірній процес змінити стан
- utime: Потрібний час користувача
- stime: Потрібен системний час
- pid: ID процесу-відправника
- uid: ID користувача, що володіє процесом-відправником

Наступні елементи масиву застосовуються для сигналів **`SIGILL`**,
**`SIGFPE`**, **`SIGSEGV`** та **`SIGBUS`**:

- addr: Адреса пам'яті, в якій стався збій

Наступні елементи масиву застосовуються для сигналу **`SIGPOLL`**

- band: Подія введення-виводу
- fd: Номер файлового дескриптора

### Значення, що повертаються

У разі успішного виконання функція **pcntl_sigwaitinfo()** повертає
номер сигналу або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **pcntl_sigwaitinfo()****

`<?phpecho "Блокування сигналу SIGHUP
";pcntl_sigprocmask(SIG_BLOCK, array(SIGHUP));echo "Відправка сигналу SIGHUP самому собі
";posix_kill(posix_getpid(), SIGHUP);echo "Чекання сигналів
";$info u003d array();pcntl_sigwaitinfo(array(SIGHUP), $info);?> `

### Дивіться також

- [pcntl_sigprocmask()](function.pcntl-sigprocmask.md) - Задає та
витягує список сигналів, що блокуються
- [pcntl_sigtimedwait()](function.pcntl-sigtimedwait.md) - Очікує
сигнали протягом заданого часу

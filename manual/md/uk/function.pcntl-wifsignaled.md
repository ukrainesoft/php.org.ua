- [« pcntl_wifexited](function.pcntl-wifexited.md)
- [pcntl_wifstopped »](function.pcntl-wifstopped.md)

- [PHP Manual](index.md)
- [Функції PCNTL](ref.pcntl.md)
- Перевірити, чи відповідає код завершення процесу завершення
сигналу

#pcntl_wifsignaled

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_wifsignaled — Перевірити, чи код завершення процесу відповідає
завершення по сигналу

### Опис

**pcntl_wifsignaled**(int `$status`): bool

Перевірити, чи відповідає код завершення процесу завершення
сигналу.

### Список параметрів

`status`
Параметр `status` - це параметр статусу, який передається для успішного
виклик функції [pcntl_waitpid()](function.pcntl-waitpid.md).

### Значення, що повертаються

Повертає **`true`**, якщо дочірній процес було завершено через
неперехопленого сигналу. Якщо ні, то повертає **`false`**.

### Дивіться також

- [pcntl_waitpid()](function.pcntl-waitpid.md) - Очікує або
повертає статус породженого дочірнього процесу
- [pcntl_signal()](function.pcntl-signal.md) - Встановлення обробника
сигналу

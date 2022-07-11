- [« pcntl_wifstopped](function.pcntl-wifstopped.md)
- [pcntl_wtermsig »](function.pcntl-wtermsig.md)

- [PHP Manual](index.md)
- [Функції PCNTL](ref.pcntl.md)
- Отримати сигнал, через який було зупинено дочірній процес

#pcntl_wstopsig

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_wstopsig — Отримати сигнал, через який було зупинено дочірній
процес

### Опис

**pcntl_wstopsig**(int `$status`): int\|false

Повертає сигнал, через який було зупинено дочірній процес.
Функція має сенс лише якщо
[pcntl_wifstopped()](function.pcntl-wifstopped.md) повернула **`true`**.

### Список параметрів

`status`
Параметр `status` - це параметр статусу, який передається для успішного
виклик функції [pcntl_waitpid()](function.pcntl-waitpid.md).

### Значення, що повертаються

Повертає номер сигналу. Якщо ця функція не підтримується ОС,
повертається **`false`**.

### Дивіться також

- [pcntl_waitpid()](function.pcntl-waitpid.md) - Очікує або
повертає статус породженого дочірнього процесу
- [pcntl_wifstopped()](function.pcntl-wifstopped.md) - Перевірити,
чи зупинено дочірній процес

- [« pcntl_wifsignaled](function.pcntl-wifsignaled.md)
- [pcntl_wstopsig »](function.pcntl-wstopsig.md)

- [PHP Manual](index.md)
- [Функції PCNTL](ref.pcntl.md)
- Перевірити, чи зупинено дочірній процес

#pcntl_wifstopped

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_wifstopped — Перевірити, чи зупинено дочірній процес

### Опис

**pcntl_wifstopped**(int `$status`): bool

Перевіряє, чи зупинено дочірній процес, що викликало повернення; це
можливо тільки якщо функція
[pcntl_waitpid()](function.pcntl-waitpid.md) викликалася з опцією
`WUNTRACED`.

### Список параметрів

`status`
Параметр `status` - це параметр статусу, який передається для успішного
виклик функції [pcntl_waitpid()](function.pcntl-waitpid.md).

### Значення, що повертаються

Повертає **`true`**, якщо дочірній процес викликав повернення зараз
зупинено. Якщо ні, то повертає **`false`**.

### Дивіться також

- [pcntl_waitpid()](function.pcntl-waitpid.md) - Очікує або
повертає статус породженого дочірнього процесу

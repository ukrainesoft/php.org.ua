- [« pcntl_wexitstatus](function.pcntl-wexitstatus.md)
- [pcntl_wifsignaled »](function.pcntl-wifsignaled.md)

- [PHP Manual](index.md)
- [Функції PCNTL](ref.pcntl.md)
- Перевіряє, чи код завершення процесу відповідає нормальному
завершенню

#pcntl_wifexited

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_wifexited — Перевіряє, чи код завершення процесу відповідає
нормальному завершенню

### Опис

**pcntl_wifexited**(int `$status`): bool

Перевіряє, чи відповідає код завершення процесу нормальному
завершення.

### Список параметрів

`status`
Параметр `status` - це параметр статусу, який передається для успішного
виклик функції [pcntl_waitpid()](function.pcntl-waitpid.md).

### Значення, що повертаються

Повертає **`true`**, якщо код завершення дочірнього процесу
відповідає нормальному завершенню. Якщо ні, то повертає
**`false`**.

### Дивіться також

- [pcntl_waitpid()](function.pcntl-waitpid.md) - Очікує або
повертає статус породженого дочірнього процесу
- [pcntl_wexitstatus()](function.pcntl-wexitstatus.md) - Отримати
код повернення завершеного дочірнього процесу

- [« pcntl_waitpid](function.pcntl-waitpid.md)
- [pcntl_wifexited »](function.pcntl-wifexited.md)

- [PHP Manual](index.md)
- [Функції PCNTL](ref.pcntl.md)
- Отримати код повернення завершеного дочірнього процесу

# pcntl_wexitstatus

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_wexitstatus — Отримати код повернення завершеного дочірнього
процесу

### Опис

**pcntl_wexitstatus**(int `$status`): int\|false

Повертає код повернення завершеного дочірнього процесу. Функція
застосовна лише якщо функція
[pcntl_wifexited()](function.pcntl-wifexited.md) повернула **`true`**.

### Список параметрів

`status`
Параметр `status` - це параметр статусу, який передається для успішного
виклик функції [pcntl_waitpid()](function.pcntl-waitpid.md).

### Значення, що повертаються

Повертає код повернення дочірнього процесу. Якщо ця функція не
підтримується ОС, повертається **`false`**.

### Дивіться також

- [pcntl_waitpid()](function.pcntl-waitpid.md) - Очікує або
повертає статус породженого дочірнього процесу
- [pcntl_wifexited()](function.pcntl-wifexited.md) - Перевіряє,
чи відповідає код завершення процесу нормальному завершенню

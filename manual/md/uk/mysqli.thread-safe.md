- [« mysqli::$thread_id](mysqli.thread-id.md)
- [mysqli::use_result »](mysqli.use-result.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Показує, чи безпечна робота із процесами

# mysqli::thread_safe

# mysqli_thread_safe

(PHP 5, PHP 7, PHP 8)

mysqli::thread_safe -- mysqli_thread_safe — Показує, чи безпечна
робота з процесами

### Опис

Об'єктно-орієнтований стиль

public **mysqli::thread_safe**(): bool

Процедурний стиль

**mysqli_thread_safe**(): bool

Показує, що клієнтська бібліотека скомпільована як потокобезпечна
чи ні.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`**, якщо клієнтська бібліотека потокобезпечна, інакше
випадку **`false`**.

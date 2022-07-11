- [« Функціональний API](functional.parallel.md)
- [Parallelun »](parallel.run.md)

- [PHP Manual](index.md)
- [Функціональний API](functional.parallel.md)
- Початкове завантаження

# parallel ootstrap

(1.0.0)

parallel ootstrap — Початкове завантаження

### Опис

**parallel ootstrap**(string `$file`): void

Повинен використовувати наданий `file` для початкового завантаження всіх
середовищ виконання, створених для автоматичного планування за допомогою
[Parallelun()](parallel.run.md).

### Список параметрів

`file`
Шлях до файлу для початкового завантаження всіх середовищ виконання.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

**Увага**

Викидає parallel\Runtime\Error\Bootstrap, якщо цей процес вже був
раніше викликаний.

**Увага**

Викидає parallel\Runtime\Error\Bootstrap, якщо викликається після
[Parallelun()](parallel.run.md).

### Дивіться також

- [parallel\Runtime::run](parallel-runtime.run.md)

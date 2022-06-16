- [« parallel\Events::remove](parallel-events.remove.md)
- [parallel\Events\Input »](class.parallel-events-input.md)

- [PHP Manual](index.md)
- [parallel\Events](class.parallel-events.md)
- Опитування

# parallel\Events::poll

(0.9.0)

parallel\Events::poll — Опитування

### Опис

public **parallel\Events::poll**():
?[parallel\Events\Event](class.parallel-events-event.md)

Опитує для наступної події

### Значення, що повертаються

Якщо цілей не залишилося, повертається **`null`**.

Якщо це буде неблокуючий цикл та відбудеться блокування, буде
повернуто значення **`null`**.

В іншому випадку
[parallel\Events\Event](class.parallel-events-event.md) повертає
опис події.

### Помилки

**Увага**

Викидає parallel\Events\Error\Timeout, якщо час очікування
використано та досягнуто.

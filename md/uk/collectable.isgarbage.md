- [« Collectable](class.collectable.md)
- [Pool »](class.pool.md)

- [PHP Manual](index.md)
- [Collectable](class.collectable.md)
- Визначає, чи позначений об'єкт як сміття

# Collectable::isGarbage

(PECL pthreads \>u003d 2.0.8)

Collectable::isGarbage — Визначає, чи позначений об'єкт як сміття

### Опис

public **Collectable::isGarbage**(): bool

Можна викликати [Pool::collect()](pool.collect.md) для визначення,
чи є об'єкт сміттям.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Дивіться також

- [Pool::collect()](pool.collect.md) - Збирає посилання на
виконані завдання

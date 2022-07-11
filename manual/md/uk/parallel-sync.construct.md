- [«parallel\Sync](class.parallel-sync.md)
- [parallel\Sync::get »](parallel-sync.get.md)

- [PHP Manual](index.md)
- [parallel\Sync](class.parallel-sync.md)
- Конструктор класу

# parallel\Sync::\_\_construct

(1.1.0)

parallel\Sync::\_\_construct - Конструктор класу

### Опис

public **parallel\Sync::\_\_construct**()

Створює новий об'єкт синхронізації без значення.

public **parallel\Sync::\_\_construct**(scalar `$value`)

Створює новий об'єкт синхронізації, що містить задане скалярне
значення.

### Помилки

**Увага**

Викидає parallel\Sync\Error\IllegalValue, якщо `value` не є
скалярним значенням.

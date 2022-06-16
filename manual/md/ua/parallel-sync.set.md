- [« parallel\Sync::get](parallel-sync.get.md)
- [parallel\Sync::wait »](parallel-sync.wait.md)

- [PHP Manual](index.md)
- [parallel\Sync](class.parallel-sync.md)
- Доступ

# parallel\Sync::set

(1.1.0)

parallel\Sync::set — Доступ

### Опис

public **parallel\Sync::set**(scalar `$value`)

Атомарно встановлює значення синхронізації.

### Помилки

**Увага**

Викидає parallel\Sync\Error\IllegalValue, якщо `value` не є
скалярним значенням.

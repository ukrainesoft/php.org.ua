- [«EvStat::createStopped](evstat.createstopped.md)
- [EvStat::set »](evstat.set.md)

- [PHP Manual](index.md)
- [EvStat](class.evstat.md)
- Повертає попередній набір значень, які повертаються EvStat::attr

# EvStat::prev

(PECL ev \>u003d 0.2.0)

EvStat::prev — Повертає попередній набір значень, що повертаються
EvStat::attr

### Опис

public **EvStat::prev**(): void

Як і [EvStat::attr()](evstat.attr.md) , але повертає попередній
набір значень.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив з тією ж структурою, що і масив, що повертається
[EvStat::attr()](evstat.attr.md). Масив містить попередній набір
значень.

### Дивіться також

- [EvStat::attr()](evstat.attr.md) - Повертає значення нещодавно
виявлені Ev
- [EvStat::stat()](evstat.stat.md) - Ініціює виклик статистики

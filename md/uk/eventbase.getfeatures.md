- [«EventBase::free](eventbase.free.md)
- [EventBase::getMethod »](eventbase.getmethod.md)

- [PHP Manual](index.md)
- [EventBase](class.eventbase.md)
- Повертає бітову маску підтримуваних функцій

# EventBase::getFeatures

(PECL event \>u003d 1.2.6-beta)

EventBase::getFeatures — Повертає бітову маску підтримуваних функцій

### Опис

public **EventBase::getFeatures**(): int

Повертає бітову маску підтримуваних функцій

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає бітову маску функцій, що підтримуються. Дивіться константи
[EventConfig::FEATURE\_\*](class.eventconfig.md#eventconfig.constants)
.

### Приклади

**Приклад #1 Приклад використання **EventBase::getFeatures()****

` <?php// Avoiding "select"
";}$base u003d new EventBase($cfg);echo "Характеристики:
";$features u003d $base->getFeatures();($features & EventConfig::FEATURE_ET) and print("ET - edge-triggered IO
");($features & EventConfig::FEATURE_O1) and print("O1 - O(1) operation for adding/deletting events
");($features & EventConfig::FEATURE_FDS) and print("FDS - arbitrary file descriptor types, and not just sockets
");?> `

### Дивіться також

- [EventBase::getMethod()](eventbase.getmethod.md) - Повертає
використовуваний метод події
- [EventConfig](class.eventconfig.md)

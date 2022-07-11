- [« SyncSharedMemory::read](syncsharedmemory.read.md)
- [SyncSharedMemory::write »](syncsharedmemory.write.md)

- [PHP Manual](index.md)
- [SyncSharedMemory](class.syncsharedmemory.md)
- Повертає розмір іменованої пам'яті, що розділяється

# SyncSharedMemory::size

(PECL sync \>u003d 1.1.0)

SyncSharedMemory::size — Повертає розмір іменованої розділяється
пам'яті

### Опис

public **SyncSharedMemory::size**(): int

Виймає розмір пам'яті об'єкта, що розділяється.
[SyncSharedMemory](class.syncsharedmemory.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ціле число, що містить розмір пам'яті, що розділяється. Це буде той самий
розмір, який було передано конструктору.

### Приклади

**Приклад #1 Приклад використання **SyncSharedMemory::size()****

` <?php$mem u003d new SyncSharedMemory("AppReportName", 1024);var_dump($mem->size());?> `

Результатом виконання цього прикладу буде щось подібне:

int(1024)

### Дивіться також

- [SyncSharedMemory::\_\_construct()](syncsharedmemory.construct.md) -
Створює новий об'єкт SyncSharedMemory
- [SyncSharedMemory::write()](syncsharedmemory.write.md) - Копіює
дані в іменовану пам'ять, що розділяється
- [SyncSharedMemory::read()](syncsharedmemory.read.md) - Копіює
дані з іменованої пам'яті

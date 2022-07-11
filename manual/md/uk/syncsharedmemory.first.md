- [«SyncSharedMemory::\_\_construct](syncsharedmemory.construct.md)
- [SyncSharedMemory::read »](syncsharedmemory.read.md)

- [PHP Manual](index.md)
- [SyncSharedMemory](class.syncsharedmemory.md)
- Перевіряє, чи є об'єкт першим загальносистемним екземпляром
іменованої роздільної пам'яті

# SyncSharedMemory::first

(PECL sync \>u003d 1.1.0)

SyncSharedMemory::first — Перевіряє, чи є об'єкт першим
загальносистемним екземпляром іменованої пам'яті, що розділяється

### Опис

public **SyncSharedMemory::first**(): bool

Отримує загальносистемний статус першого екземпляра об'єкта
[SyncSharedMemory](class.syncsharedmemory.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SyncSharedMemory::first()****

` <?php$mem u003d new SyncSharedMemory("AppReportName", 1024);if ($mem->first()){    // Do first time initialization work here.}var_dump($m mem2 u003d new SyncSharedMemory("AppReportName", 1024);var_dump($mem2->first());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(false)

### Дивіться також

- [SyncSharedMemory::write()](syncsharedmemory.write.md) - Копіює
дані в іменовану пам'ять, що розділяється
- [SyncSharedMemory::read()](syncsharedmemory.read.md) - Копіює
дані з іменованої пам'яті

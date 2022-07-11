- [«SyncMutex::lock](syncmutex.lock.md)
- [SyncSemaphore »](class.syncsemaphore.md)

- [PHP Manual](index.md)
- [SyncMutex](class.syncmutex.md)
- Розблокує м'ютекс

# SyncMutex::unlock

(PECL sync \>u003d 1.0.0)

SyncMutex::unlock — Розблокує м'ютекс

### Опис

public **SyncMutex::unlock**(bool `$all` u003d **`false`**): bool

Зменшує внутрішній лічильник об'єкта [SyncMutex](class.syncmutex.md).
Коли внутрішній лічильник досягає нуля, фактичне блокування об'єкта
знімається.

### Список параметрів

`all`
Визначає, чи встановлювати внутрішній лічильник на нуль та,
отже, знімати блокування.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SyncMutex::unlock()****

` <?php$mutex u003d new SyncMutex("UniqueName");$mutex->lock();/* ... */$mutex->unlock();?> `

### Дивіться також

- [SyncMutex::lock()](syncmutex.lock.md) - Чекає ексклюзивної
блокування

- [« SyncReaderWriter::writelock](syncreaderwriter.writelock.md)
- [SyncSharedMemory »](class.syncsharedmemory.md)

- [PHP Manual](index.md)
- [SyncReaderWriter](class.syncreaderwriter.md)
- Знімає блокування запису

# SyncReaderWriter::writeunlock

(PECL sync \>u003d 1.0.0)

SyncReaderWriter::writeunlock — Знімає блокування запису

### Опис

public **SyncReaderWriter::writeunlock**(): bool

Знімає блокування запису об'єкта
[SyncReaderWriter](class.syncreaderwriter.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SyncReaderWriter::writeunlock()****

` <?php$readwrite u003d new SyncReaderWriter("FileCacheLock");$readwrite->writelock();/* ... */$readwrite->writeunlock();?> `

### Дивіться також

- [SyncReaderWriter::writelock()](syncreaderwriter.writelock.md) -
Чекає ексклюзивного блокування запису

- [«SyncReaderWriter::readlock](syncreaderwriter.readlock.md)
- [SyncReaderWriter::writelock »](syncreaderwriter.writelock.md)

- [PHP Manual](index.md)
- [SyncReaderWriter](class.syncreaderwriter.md)
- Знімає блокування читання

# SyncReaderWriter::readunlock

(PECL sync \>u003d 1.0.0)

SyncReaderWriter::readunlock — Знімає блокування читання

### Опис

public **SyncReaderWriter::readunlock**(): bool

Знімає блокування читання об'єкта
[SyncReaderWriter](class.syncreaderwriter.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SyncReaderWriter::readunlock()****

` <?php$readwrite u003d new SyncReaderWriter("FileCacheLock");$readwrite->readlock();/* ... */$readwrite->readunlock();?> `

### Дивіться також

- [SyncReaderWriter::readlock()](syncreaderwriter.readlock.md) -
Чекає на блокування читання

- [«SyncReaderWriter::\_\_construct](syncreaderwriter.construct.md)
- [SyncReaderWriter::readunlock »](syncreaderwriter.readunlock.md)

- [PHP Manual](index.md)
- [SyncReaderWriter](class.syncreaderwriter.md)
- Очікує блокування читання

# SyncReaderWriter::readlock

(PECL sync \>u003d 1.0.0)

SyncReaderWriter::readlock — Очікує блокування читання

### Опис

public **SyncReaderWriter::readlock**(int `$wait` u003d -1): bool

Отримує блокування читання об'єкта
[SyncReaderWriter](class.syncreaderwriter.md).

### Список параметрів

`wait`
Кількість мілісекунд очікування блокування. Значення -1 нескінченне.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SyncReaderWriter::readlock()****

` <?php$readwrite u003d new SyncReaderWriter("FileCacheLock");$readwrite->readlock();/* ... */$readwrite->readunlock();?> `

### Дивіться також

- [SyncReaderWriter::readunlock()](syncreaderwriter.readunlock.md) -
Знімає блокування читання

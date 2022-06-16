- [«SyncReaderWriter::readunlock](syncreaderwriter.readunlock.md)
- [SyncReaderWriter::writeunlock »](syncreaderwriter.writeunlock.md)

- [PHP Manual](index.md)
- [SyncReaderWriter](class.syncreaderwriter.md)
- Чекає ексклюзивного блокування запису

# SyncReaderWriter::writelock

(PECL sync \>u003d 1.0.0)

SyncReaderWriter::writelock — Очікує ексклюзивного блокування запису

### Опис

public **SyncReaderWriter::writelock**(int `$wait` u003d -1): bool

Отримує ексклюзивне блокування запису для об'єкту
[SyncReaderWriter](class.syncreaderwriter.md).

### Список параметрів

`wait`
Кількість мілісекунд очікування блокування. Значення -1 нескінченне.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SyncReaderWriter::writelock()****

` <?php$readwrite u003d new SyncReaderWriter("FileCacheLock");$readwrite->writelock();/* ... */$readwrite->writeunlock();?> `

### Дивіться також

- [SyncReaderWriter::writeunlock()](syncreaderwriter.writeunlock.md) -
Знімає блокування запису

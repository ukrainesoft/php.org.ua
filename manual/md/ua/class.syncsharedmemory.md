- [« SyncReaderWriter::writeunlock](syncreaderwriter.writeunlock.md)
- [SyncSharedMemory::\_\_construct »](syncsharedmemory.construct.md)

- [PHP Manual](index.md)
- [Sync](book.sync.md)
- Клас SyncSharedMemory

# Клас SyncSharedMemory

(PECL sync \>u003d 1.1.0)

## Вступ

Кросплатформова, нативна, узгоджена реалізація іменованих
об'єктів загальної пам'яті

Пам'ять, що спільно використовується, дозволяє двом окремим процесам
обмінюватися даними без необхідності у складних каналах чи сокетах.
Існує кілька реалізацій із загальною пам'яттю для PHP. Іменована
загальна пам'ять є альтернативою.

Об'єкти синхронізації (наприклад, SyncMutex) все ще необхідні
захисту більшості видів використання загальної пам'яті

## Огляд класів

class **SyncSharedMemory** {

/\* Методи \*/

public [\_\_construct](syncsharedmemory.construct.md)(string `$name`,
int `$size`)

public [first](syncsharedmemory.first.md)(): bool

public [read](syncsharedmemory.read.md)(int `$start` u003d 0, int
`$length` u003d ?)

public [size](syncsharedmemory.size.md)(): int

public [write](syncsharedmemory.write.md)(string `$string` u003d ?, int
`$start` u003d 0)

}

## Зміст

- [SyncSharedMemory::\_\_construct](syncsharedmemory.construct.md) -
Створює новий об'єкт SyncSharedMemory
- [SyncSharedMemory::first](syncsharedmemory.first.md) — Перевіряє,
чи є об'єкт першим загальносистемним екземпляром іменованої
пам'яті
- [SyncSharedMemory::read](syncsharedmemory.read.md) — Копіює
дані з іменованої пам'яті
- [SyncSharedMemory::size](syncsharedmemory.size.md) — Повертає
розмір іменованої пам'яті
- [SyncSharedMemory::write](syncsharedmemory.write.md) — Копіює
дані в іменовану пам'ять, що розділяється

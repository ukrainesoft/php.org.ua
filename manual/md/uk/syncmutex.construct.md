- [«SyncMutex](class.syncmutex.md)
- [SyncMutex::lock »](syncmutex.lock.md)

- [PHP Manual](index.md)
- [SyncMutex](class.syncmutex.md)
- Створює новий об'єкт SyncMutex

# SyncMutex::\_\_construct

(PECL sync \>u003d 1.0.0)

SyncMutex::\_\_construct — Створює новий об'єкт SyncMutex

### Опис

public **SyncMutex::\_\_construct**(string `$name` u003d ?)

Створює іменований або безіменний лічильний м'ютекс.

### Список параметрів

`name`
Ім'я мьютексу, якщо це названий об'єкт мьютексу.

> **Примітка**:
>
> Якщо ім'я вже існує, воно має бути доступним для відкриття поточним
> користувачем, від імені якого запущено процес, інакше буде
> викинуто виняток із безглуздим повідомленням про помилку.

### Значення, що повертаються

Новий об'єкт [SyncMutex](class.syncmutex.md).

### Помилки

Якщо м'ютекс не може бути створений або відкритий, викидається виняток.

### Приклади

**Приклад #1 Приклад використання **SyncMutex::\_\_construct()** для
створення іменованого м'ютексу з часом очікування**

` <?php$mutex u003d new SyncMutex("UniqueName");if (!$mutex->lock(3000)){    echo "Неможливо створити м'ютеккс."; exit();}/* ... */$mutex->unlock();?> `

**Приклад #2 Приклад використання **SyncMutex::\_\_construct()** для
створення безіменного м'ютексу**

` <?php$mutex u003d new SyncMutex();$mutex->lock();/* ... */$mutex->unlock();?> `

### Дивіться також

- [SyncMutex::lock()](syncmutex.lock.md) - Чекає ексклюзивної
блокування
- [SyncMutex::unlock()](syncmutex.unlock.md) - Розблокує м'ютекс

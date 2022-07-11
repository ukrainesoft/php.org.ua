- [«SyncSemaphore::\_\_construct](syncsemaphore.construct.md)
- [SyncSemaphore::unlock »](syncsemaphore.unlock.md)

- [PHP Manual](index.md)
- [SyncSemaphore](class.syncsemaphore.md)
- Зменшує рахунок семафору або чекає

# SyncSemaphore::lock

(PECL sync \>u003d 1.0.0)

SyncSemaphore::lock — Зменшує рахунок семафору або чекає

### Опис

public **SyncSemaphore::lock**(int `$wait` u003d -1): bool

Зменшує лічильник об'єкта [SyncSemaphore](class.syncsemaphore.md) або
чекає, поки семафор стане відмінним від нуля.

### Список параметрів

`wait`
Кількість мілісекунд очікування на семафор. Значення -1 нескінченне.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SyncSemaphore::lock()****

` <?php$semaphore u003d new SyncSemaphore("LimitedResource_2clients", 2);if (!$semaphore->lock(3000)){   echo "Неможливо заблокувати семафор."; exit();}/* ... */$semaphore->unlock();?> `

### Дивіться також

- [SyncSemaphore::unlock()](syncsemaphore.unlock.md) - Збільшує
рахунок семафору

- [«SyncSemaphore::lock](syncsemaphore.lock.md)
- [SyncEvent »](class.syncevent.md)

- [PHP Manual](index.md)
- [SyncSemaphore](class.syncsemaphore.md)
- Збільшує рахунок семафору

# SyncSemaphore::unlock

(PECL sync \>u003d 1.0.0)

SyncSemaphore::unlock — Збільшує рахунок семафору

### Опис

public **SyncSemaphore::unlock**(int `&$prevcount` u003d ?): bool

Збільшує об'єкт [SyncSemaphore](class.syncsemaphore.md).

### Список параметрів

`prevcount`
Повертає попереднє значення лічильника семафору.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SyncSemaphore::unlock()****

` <?php$semaphore u003d new SyncSemaphore("LimitedResource_2clients", 2);if (!$semaphore->lock(3000)){   echo "Неможливо заблокувати семафор."; exit();}/* ... */$semaphore->unlock();?> `

### Дивіться також

- [SyncSemaphore::lock()](syncsemaphore.lock.md) - Зменшує рахунок
семафора чи чекає

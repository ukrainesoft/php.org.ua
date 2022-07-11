- [«SyncMutex::\_\_construct](syncmutex.construct.md)
- [SyncMutex::unlock »](syncmutex.unlock.md)

- [PHP Manual](index.md)
- [SyncMutex](class.syncmutex.md)
- Чекає на ексклюзивне блокування

# SyncMutex::lock

(PECL sync \>u003d 1.0.0)

SyncMutex::lock — Чекає на ексклюзивне блокування

### Опис

public **SyncMutex::lock**(int `$wait` u003d -1): bool

Отримує ексклюзивне блокування об'єкту
[SyncMutex](class.syncmutex.md). Якщо блокування вже встановлено,
внутрішній лічильник збільшується.

### Список параметрів

`wait`
Кількість мілісекунд очікування на ексклюзивне блокування. Значення -1
означає нескінченний час очікування.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SyncMutex::lock()****

` <?php$mutex u003d new SyncMutex("UniqueName");if (!$mutex->lock(3000)){    echo "Неможливо заблокувати м'ютекс."; exit();}/* ... */$mutex->unlock();?> `

### Дивіться також

- [SyncMutex::unlock()](syncmutex.unlock.md) - Розблокує м'ютекс

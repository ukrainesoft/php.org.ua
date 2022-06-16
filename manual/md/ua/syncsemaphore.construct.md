- [«SyncSemaphore](class.syncsemaphore.md)
- [SyncSemaphore::lock »](syncsemaphore.lock.md)

- [PHP Manual](index.md)
- [SyncSemaphore](class.syncsemaphore.md)
- Створює новий об'єкт SyncSemaphore

# SyncSemaphore::\_\_construct

(PECL sync \>u003d 1.0.0)

SyncSemaphore::\_\_construct — Створює новий об'єкт SyncSemaphore

### Опис

public **SyncSemaphore::\_\_construct**(string `$name` u003d ?, int
`$initialval` u003d 1, bool `$autounlock` u003d **`true`**)

Створює іменований чи безіменний семафор.

### Список параметрів

`name`
Ім'я семафора, якщо це названий об'єкт семафора.

> **Примітка**:
>
> Якщо ім'я вже існує, воно має бути доступним для відкриття поточним
> користувачем, від імені якого запущено процес, інакше буде
> викинуто виняток із безглуздим повідомленням про помилку.

`initialval`
Початкове значення семафору. Це кількість блокувань, яку можна
отримати.

`autounlock`
Вказує, чи слід автоматично розблокувати семафор при
завершення скрипта PHP.

**Увага**
Якщо об'єкт - це: іменований семафор з autounlock зі значенням
**`false`**, об'єкт заблокований та скрипт PHP завершується до того, як
об'єкт розблокується, то базовий семафор опиниться у неузгодженому
стані.

### Значення, що повертаються

Новий об'єкт [SyncSemaphore](class.syncsemaphore.md).

### Помилки

Якщо семафор може бути створений або відкритий, викидається виняток.

### Приклади

**Приклад #1 Приклад використання **SyncSemaphore::\_\_construct()****

` <?php$semaphore u003d new SyncSemaphore("LimitedResource_2clients", 2);if (!$semaphore->lock(3000)){   echo "Неможливо заблокувати семафор."; exit();}/* ... */$semaphore->unlock();?> `

### Дивіться також

- [SyncSemaphore::lock()](syncsemaphore.lock.md) - Зменшує рахунок
семафора чи чекає
- [SyncSemaphore::unlock()](syncsemaphore.unlock.md) - Збільшує
рахунок семафору

- [«sem_get](function.sem-get.md)
- [sem_remove »](function.sem-remove.md)

- [PHP Manual](index.md)
- [Функції семафорів](ref.sem.md)
- Звільнення семафору

# sem_release

(PHP 4, PHP 5, PHP 7, PHP 8)

sem_release - Звільнення семафору

### Опис

**sem_release**([SysvSemaphore](class.sysvsemaphore.md) `$semaphore`):
bool

**sem_release()** звільняє семафор, якщо він був захоплений зухвалим
процесом, інакше генерується попередження.

Після звільнення семафор може бути захоплений повторно через виклик
[sem_acquire()](function.sem-acquire.md).

### Список параметрів

`semaphore`
Семафор, повернутий [sem_get()](function.sem-get.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------------|
| 8.0.0 | Параметр `semaphore` тепер очікує на екземпляр [SysvSemaphore](class.sysvsemaphore.md); раніше очікували ресурс (resource). |

### Дивіться також

- [sem_get()](function.sem-get.md) - Отримання ідентифікатора
семафора
- [sem_acquire()](function.sem-acquire.md) - Захоплення семафору

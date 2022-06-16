- [«sem_release](function.sem-release.md)
- [shm_attach »](function.shm-attach.md)

- [PHP Manual](index.md)
- [Функції семафорів](ref.sem.md)
- Видалення семафору

# sem_remove

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

sem_remove - Видалення семафору

### Опис

**sem_remove**([SysvSemaphore](class.sysvsemaphore.md) `$semaphore`):
bool

**sem_remove()** видаляє цей семафор.

Після видалення семафору він стає недоступним.

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
- [sem_release()](function.sem-release.md) - Звільнення семафору
- [sem_acquire()](function.sem-acquire.md) - Захоплення семафору

- [«shm_remove_var](function.shm-remove-var.md)
- [SysvMessageQueue »](class.sysvmessagequeue.md)

- [PHP Manual](index.md)
- [Функції семафорів](ref.sem.md)
- Видаляє пам'ять, що розділяється, з систем Unix

#shm_remove

(PHP 4, PHP 5, PHP 7, PHP 8)

shm_remove — Видалення пам'яті, що розділяється, із систем Unix

### Опис

**shm_remove**([SysvSharedMemory](class.sysvsharedmemory.md) `$shm`):
bool

**shm_remove()** видаляє пам'ять `shm`. Всі дані будуть
знищено.

### Список параметрів

`shm`
Сегмент пам'яті, що розділяється, отриманий з
[shm_attach()](function.shm-attach.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------|
| 8.0.0 | `shm` тепер чекає екземпляр [SysvSharedMemory](class.sysvsharedmemory.md); раніше очікували ресурс (resource). |

### Дивіться також

- [shm_remove_var()](function.shm-remove-var.md) - Видаляє
змінну з пам'яті, що розділяється

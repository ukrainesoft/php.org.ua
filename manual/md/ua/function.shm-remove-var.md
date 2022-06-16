- [«shm_put_var](function.shm-put-var.md)
- [shm_remove »](function.shm-remove.md)

- [PHP Manual](index.md)
- [Функції семафорів](ref.sem.md)
- Видаляє змінну з пам'яті, що розділяється

#shm_remove_var

(PHP 4, PHP 5, PHP 7, PHP 8)

shm_remove_var — Видалення змінної з пам'яті, що розділяється.

### Опис

**shm_remove_var**([SysvSharedMemory](class.sysvsharedmemory.md)
`$shm`, int `$key`): bool

Видаляє змінну із заданим ключем `key` та звільняє зайняту пам'ять.

### Список параметрів

`shm`
Сегмент пам'яті, що розділяється, отриманий з
[shm_attach()](function.shm-attach.md).

`key`
Ключ змінної.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------|
| 8.0.0 | `shm` тепер чекає екземпляр [SysvSharedMemory](class.sysvsharedmemory.md); раніше очікували ресурс (resource). |

### Дивіться також

- [shm_remove()](function.shm-remove.md) - Видаляє розділену
пам'ять із систем Unix

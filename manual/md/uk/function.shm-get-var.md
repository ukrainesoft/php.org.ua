- [«shm_detach](function.shm-detach.md)
- [shm_has_var »](function.shm-has-var.md)

- [PHP Manual](index.md)
- [Функції семафорів](ref.sem.md)
- Повертає змінну з пам'яті, що розділяється

#shm_get_var

(PHP 4, PHP 5, PHP 7, PHP 8)

shm_get_var — Повертає змінну з пам'яті, що розділяється

### Опис

**shm_get_var**([SysvSharedMemory](class.sysvsharedmemory.md) `$shm`,
int `$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**shm_get_var()** повертає змінну за ключом `key` у вказаному
сегменті пам'яті, що розділяється. Змінна все ще присутня в
пам'яті, що розділяється.

### Список параметрів

`shm`
Сегмент пам'яті, що розділяється, отриманий з
[shm_attach()](function.shm-attach.md).

`key`
Ключ змінної.

### Значення, що повертаються

Повертає змінну із заданим ключем.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------|
| 8.0.0 | `shm` тепер чекає екземпляр [SysvSharedMemory](class.sysvsharedmemory.md); раніше очікували ресурс (resource). |

### Дивіться також

- [shm_has_var()](function.shm-has-var.md) - Перевіряє, чи існує
конкретний запис
- [shm_put_var()](function.shm-put-var.md) - Вставляє або оновлює
змінну в пам'яті, що розділяється

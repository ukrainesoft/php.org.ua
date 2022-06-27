- [«shm_attach](function.shm-attach.md)
- [shm_get_var »](function.shm-get-var.md)

- [PHP Manual](index.md)
- [Функції семафорів](ref.sem.md)
- Вимикається від сегмента пам'яті, що розділяється

#shm_detach

(PHP 4, PHP 5, PHP 7, PHP 8)

shm_detach — Вимикається від сегмента пам'яті, що розділяється

### Опис

**shm_detach**([SysvSharedMemory](class.sysvsharedmemory.md) `$shm`):
bool

**shm_detach()** відключається від сегмента пам'яті, що розділяється, вказаного
в `shm`, створеного [shm_attach()](function.shm-attach.md). Пам'ятайте,
що розділена пам'ять все ще існує в системі Unix і дані все
ще присутні.

### Список параметрів

`shm`
Сегмент пам'яті, що розділяється, отриманий з
[shm_attach()](function.shm-attach.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `shm` чекає екземпляр [SysvSharedMemory](class.sysvsharedmemory.md); раніше очікували ресурс (resource). |

### Дивіться також

- [shm_attach()](function.shm-attach.md) - Створює або відкриває
сегмент розділеної пам'яті
- [shm_remove()](function.shm-remove.md) - Видаляє розділену
пам'ять із систем Unix
- [shm_remove_var()](function.shm-remove-var.md) - Видаляє
змінну з пам'яті, що розділяється

- [«shm_get_var](function.shm-get-var.md)
- [shm_put_var »](function.shm-put-var.md)

- [PHP Manual](index.md)
- [Функції семафорів](ref.sem.md)
- Перевіряє, чи існує конкретний запис

#shm_has_var

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

shm_has_var — Перевіряє, чи існує конкретний запис

### Опис

**shm_has_var**([SysvSharedMemory](class.sysvsharedmemory.md) `$shm`,
int `$key`): bool

Перевіряє, чи існує конкретний ключ у сегменті пам'яті, що розділяється.

### Список параметрів

`shm`
Сегмент пам'яті, що розділяється, отриманий з
[shm_attach()](function.shm-attach.md).

`key`
Ключ змінної.

### Значення, що повертаються

Повертає **`true`**, якщо запис існує, інакше
повертає **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------|
| 8.0.0 | `shm` тепер чекає екземпляр [SysvSharedMemory](class.sysvsharedmemory.md); раніше очікували ресурс (resource). |

### Дивіться також

- [shm_get_var()](function.shm-get-var.md) - Повертає змінну
з роздільної пам'яті
- [shm_put_var()](function.shm-put-var.md) - Вставляє або оновлює
змінну в пам'яті, що розділяється

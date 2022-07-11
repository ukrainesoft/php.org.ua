- [«shm_has_var](function.shm-has-var.md)
- [shm_remove_var »](function.shm-remove-var.md)

- [PHP Manual](index.md)
- [Функції семафорів](ref.sem.md)
- Вставляє або оновлює змінну в пам'яті, що розділяється

#shm_put_var

(PHP 4, PHP 5, PHP 7, PHP 8)

shm_put_var — Вставляє або оновлює змінну в пам'яті, що розділяється.

### Опис

**shm_put_var**([SysvSharedMemory](class.sysvsharedmemory.md) `$shm`,
int `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

**shm_put_var()** додає або оновлює `value` із заданим ключем
`key`.

Буде видана помилка (рівня **`E_WARNING`**), якщо `shm` не є
допустимим індексом пам'яті SysV, що розділяється, або якщо пам'яті, що розділяється
недостатньо для виконання вашого запиту.

### Список параметрів

`shm`
Сегмент пам'яті, що розділяється, отриманий з
[shm_attach()](function.shm-attach.md).

`key`
Ключ змінної.

`value`
Змінна. Можуть використовуватися всі [типи
змінної](language.types.md), які підтримують
[serialize()](function.serialize.md): зазвичай це означає всі типи,
крім ресурсів та деяких внутрішніх об'єктів, які не можуть бути
серіалізовані.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------|
| 8.0.0 | `shm` тепер чекає екземпляр [SysvSharedMemory](class.sysvsharedmemory.md); раніше очікували ресурс (resource). |

### Дивіться також

- [shm_get_var()](function.shm-get-var.md) - Повертає змінну
з роздільної пам'яті
- [shm_has_var()](function.shm-has-var.md) - Перевіряє, чи існує
конкретний запис

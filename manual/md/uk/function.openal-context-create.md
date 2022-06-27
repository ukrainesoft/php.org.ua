- [«openal_buffer_loadwav](function.openal-buffer-loadwav.md)
- [openal_context_current »](function.openal-context-current.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Створити контекст обробки звуку

#openal_context_create

(PECL openal u003d 0.1.0)

openal_context_create — Створити контекст обробки звуку

### Опис

**openal_context_create**(resource `$device`): resource

### Список параметрів

`device`
Ресурс [Open AL(Device)](openal.resources.md) (заснований раніше з
за допомогою **openal_device_create()**).

### Значення, що повертаються

Повертає ресурс [Open AL(Context)](openal.resources.md) у разі
успішного виконання, **`false`** у разі виникнення помилки.

### Дивіться також

- [openal_device_open()](function.openal-device-open.md) -
Ініціалізувати звуковий рівень OpenAL
- [openal_context_destroy()](function.openal-context-destroy.md) -
Знищує контекст

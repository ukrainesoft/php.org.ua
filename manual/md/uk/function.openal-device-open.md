- [« openal_device_close](function.openal-device-close.md)
- [openal_listener_get »](function.openal-listener-get.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Ініціалізувати звуковий рівень OpenAL

#openal_device_open

(PECL openal u003d 0.1.0)

openal_device_open — Ініціалізувати звуковий рівень OpenAL

### Опис

**openal_device_open**(string `$device_desc` u003d ?): resource

### Список параметрів

`device_desc`
При необхідності відкрити аудіопристрій, вказавши значення параметра
`device_desc`. Якщо `device_desc` не вказано, буде використано перше
аудіопристрій.

### Значення, що повертаються

Повертає ресурс [Open AL(Device)](openal.resources.md) у разі
успішного виконання або **`false`** у разі виникнення помилки.

### Дивіться також

- [openal_device_close()](function.openal-device-close.md) - Закрити
пристрій OpenAL
- [openal_context_create()](function.openal-context-create.md) -
Створити контекст обробки звуку

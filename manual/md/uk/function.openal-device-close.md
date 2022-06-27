- [«openal_context_suspend](function.openal-context-suspend.md)
- [openal_device_open »](function.openal-device-open.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Закрити пристрій OpenAL

#openal_device_close

(PECL openal u003d 0.1.0)

openal_device_close — Закрити пристрій OpenAL

### Опис

**openal_device_close**(resource `$device`): bool

### Список параметрів

`device`
Ресурс [Open AL(Device)](openal.resources.md) (заснований раніше з
за допомогою [openal_device_open()](function.openal-device-open.md)),
який потрібно закрити.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [openal_device_open()](function.openal-device-open.md) -
Ініціалізувати звуковий рівень OpenAL

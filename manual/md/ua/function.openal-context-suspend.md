- [«openal_context_process](function.openal-context-process.md)
- [openal_device_close »](function.openal-device-close.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- призупинити зазначений контекст

#openal_context_suspend

(PECL openal u003d 0.1.0)

openal_context_suspend — Зупинити вказаний контекст

### Опис

**openal_context_suspend**(resource `$context`): bool

### Список параметрів

`context`
Ресурс [Open AL(Context)](openal.resources.md) (заснований раніше з
за допомогою [openal_context_create()](function.openal-context-create.md)).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [openal_context_create()](function.openal-context-create.md) -
Створити контекст обробки звуку
- [openal_context_current()](function.openal-context-current.md) -
Зробити вказаний контекст поточним
- [openal_context_process()](function.openal-context-process.md) -
Обробити вказаний контекст

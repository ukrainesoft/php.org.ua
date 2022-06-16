- [«openal_buffer_data](function.openal-buffer-data.md)
- [openal_buffer_get »](function.openal-buffer-get.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Знищує буфер OpenAL

#openal_buffer_destroy

(PECL openal u003d 0.1.0)

openal_buffer_destroy — Знищує буфер OpenAL

### Опис

**openal_buffer_destroy**(resource `$buffer`): bool

### Список параметрів

`buffer`
Ресурс [Open AL(Buffer)](openal.resources.md) (раніше створений з
за допомогою [openal_buffer_create()](function.openal-buffer-create.md)).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [openal_buffer_create()](function.openal-buffer-create.md) -
Згенерувати буфер OpenAL

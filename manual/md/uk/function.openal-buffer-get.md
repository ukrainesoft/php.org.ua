- [«openal_buffer_destroy](function.openal-buffer-destroy.md)
- [openal_buffer_loadwav »](function.openal-buffer-loadwav.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Отримати властивість буфера OpenAL

#openal_buffer_get

(PECL openal u003d 0.1.0)

openal_buffer_get — Отримати властивість буфера OpenAL

### Опис

**openal_buffer_get**(resource `$buffer`, int `$property`): int\|false

### Список параметрів

`buffer`
Ресурс [Open AL(Buffer)](openal.resources.md) (заснований раніше з
за допомогою [openal_buffer_create()](function.openal-buffer-create.md)).

`property`
Одна з властивостей, задана у вигляді константи: **`AL_FREQUENCY`**,
**`AL_BITS`**, **`AL_CHANNELS`** та **`AL_SIZE`**.

### Значення, що повертаються

Повертає ціле значення, що відповідає запитаній властивості
`property` або **`false`** у разі виникнення помилки.

### Дивіться також

- [openal_buffer_create()](function.openal-buffer-create.md) -
Згенерувати буфер OpenAL

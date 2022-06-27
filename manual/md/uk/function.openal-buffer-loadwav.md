- [«openal_buffer_get](function.openal-buffer-get.md)
- [openal_context_create »](function.openal-context-create.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Завантажити файл у форматі wav у буфер

#openal_buffer_loadwav

(PECL openal u003d 0.1.0)

openal_buffer_loadwav — Завантажити файл у форматі wav у буфер

### Опис

**openal_buffer_loadwav**(resource `$buffer`, string `$wavfile`): bool

### Список параметрів

`buffer`
Ресурс [Open AL(Buffer)](openal.resources.md) (раніше створений з
за допомогою [openal_buffer_create()](function.openal-buffer-create.md)).

`wavfile`
Шлях до файлу `.wav` у файловій системі *local*.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [openal_buffer_data()](function.openal-buffer-data.md) - Завантаження
буфера з даними
- [openal_stream()](function.openal-stream.md) - Почати потокову
передачу з джерела

- [«openal_buffer_create](function.openal-buffer-create.md)
- [openal_buffer_destroy »](function.openal-buffer-destroy.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Завантаження буфера з даними

#openal_buffer_data

(PECL openal u003d 0.1.0)

openal_buffer_data — Завантаження буфера з даними

### Опис

**openal_buffer_data**(
resource `$buffer`,
int `$format`,
string `$data`,
int `$freq`
): bool

### Список параметрів

`buffer`
Ресурс [Open AL(Buffer)](openal.resources.md) (заснований раніше з
за допомогою [openal_buffer_create()](function.openal-buffer-create.md)).

`format`
Формат `data`, представлений однією з констант: **`AL_FORMAT_MONO8`**,
**`AL_FORMAT_MONO16`**, **`AL_FORMAT_STEREO8`** та
**`AL_FORMAT_STEREO16`**

`data`
Блок двійкових аудіоданих у вказаному форматі `format` та з частотою
`freq`.

`freq`
Частота `data`, задана у герцах.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [openal_buffer_loadwav()](function.openal-buffer-loadwav.md) -
Завантажити файл у форматі wav у буфер
- [openal_stream()](function.openal-stream.md) - Почати потокову
передачу з джерела

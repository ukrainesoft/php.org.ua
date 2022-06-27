- [«openal_source_stop](function.openal-source-stop.md)
- [Служби автентифікації »](refs.remote.auth.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Почати потокову передачу із джерела

#openal_stream

(PECL openal u003d 0.1.0)

openal_stream — Почати потокову передачу з джерела

### Опис

**openal_stream**(resource `$source`, int `$format`, int `$rate`):
resource\|false

### Список параметрів

`source`
Ресурс [Open AL(Source)](openal.resources.md) (створений раніше з
за допомогою [openal_source_create()](function.openal-source-create.md)).

`format`
Формат даних `data`, представлений однією з констант:
**`AL_FORMAT_MONO8`**, **`AL_FORMAT_MONO16`**, **`AL_FORMAT_STEREO8`** та
**`AL_FORMAT_STEREO16`**

`rate`
Частота передачі в потік задається в герцах.

### Значення, що повертаються

Повертає ресурс потоку у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Дивіться також

- [openal_source_create()](function.openal-source-create.md) -
Згенерувати джерело ресурсу
- [fwrite()](function.fwrite.md) - Бінарно-безпечний запис у файл

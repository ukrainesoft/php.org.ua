- [«openal_source_destroy](function.openal-source-destroy.md)
- [openal_source_pause »](function.openal-source-pause.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Отримати властивість джерела OpenAL

#openal_source_get

(PECL openal u003d 0.1.0)

openal_source_get — Отримати властивість джерела OpenAL

### Опис

**openal_source_get**(resource `$source`, int `$property`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

### Список параметрів

`source`
Ресурс [Open AL(Source)](openal.resources.md) (створений раніше з
за допомогою [openal_source_create()](function.openal-source-create.md)).

`property`
Отримувана властивість, представлена однією з констант:
**`AL_SOURCE_RELATIVE`** (int), **`AL_SOURCE_STATE`** (int),
**`AL_PITCH`** (float), **`AL_GAIN`** (float), **`AL_MIN_GAIN`**
(float), **`AL_MAX_GAIN`** (float), **`AL_MAX_DISTANCE`** (float),
**`AL_ROLLOFF_FACTOR`** (float), **`AL_CONE_OUTER_GAIN`** (float),
**`AL_CONE_INNER_ANGLE`** (float), **`AL_CONE_OUTER_ANGLE`** (float),
**`AL_REFERENCE_DISTANCE`** (float), **`AL_POSITION`**
(array(float,float,float)), **`AL_VELOCITY`**
(array(float,float,float)), **`AL_DIRECTION`**
(array(float,float,float)).

### Значення, що повертаються

Повертає тип, пов'язаний з видобувною властивістю або **`false`**
у разі виникнення помилки.

### Дивіться також

- [openal_source_create()](function.openal-source-create.md) -
Згенерувати джерело ресурсу
- [openal_source_set()](function.openal-source-set.md) - Встановити
властивість джерела
- [openal_source_play()](function.openal-source-play.md) - Почати
відтворення джерела

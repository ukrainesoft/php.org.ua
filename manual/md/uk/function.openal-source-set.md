- [«openal_source_rewind](function.openal-source-rewind.md)
- [openal_source_stop »](function.openal-source-stop.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Встановити властивість джерела

#openal_source_set

(PECL openal u003d 0.1.0)

openal_source_set — Встановити властивість джерела

### Опис

**openal_source_set**(resource `$source`, int `$property`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$setting`): bool

### Список параметрів

`source`
Ресурс [Open AL(Source)](openal.resources.md) (створений раніше з
за допомогою [openal_source_create()](function.openal-source-create.md)).

`property`
Встановлювана властивість, що представляє одну з констант:
**`AL_BUFFER`** (OpenAL (джерело)), **`AL_LOOPING`** (bool),
**`AL_SOURCE_RELATIVE`** (int), **`AL_SOURCE_STATE`** (int),
**`AL_PITCH`** (float), **`AL_GAIN`** (float), **`AL_MIN_GAIN`**
(float), **`AL_MAX_GAIN`** (float), **`AL_MAX_DISTANCE`** (float),
**`AL_ROLLOFF_FACTOR`** (float), **`AL_CONE_OUTER_GAIN`** (float),
**`AL_CONE_INNER_ANGLE`** (float), **`AL_CONE_OUTER_ANGLE`** (float),
**`AL_REFERENCE_DISTANCE`** (float), **`AL_POSITION`**
(array(float,float,float)), **`AL_VELOCITY`**
(array(float,float,float)), **`AL_DIRECTION`**
(array(float,float,float)).

`setting`
Значення для присвоєння вказаною властивістю `property`. Зверніться до
опис параметра `property` для опису очікуваних параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [openal_source_create()](function.openal-source-create.md) -
Згенерувати джерело ресурсу
- [openal_source_get()](function.openal-source-get.md) - Отримати
властивість джерела OpenAL
- [openal_source_play()](function.openal-source-play.md) - Почати
відтворення джерела

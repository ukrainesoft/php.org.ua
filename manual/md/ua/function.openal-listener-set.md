- [«openal_listener_get](function.openal-listener-get.md)
- [openal_source_create »](function.openal-source-create.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Встановлення якості прослуховувача

#openal_listener_set

(PECL openal u003d 0.1.0)

openal_listener_set — Встановлення якості прослуховувача

### Опис

**openal_listener_set**(int `$property`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$setting`): bool

### Список параметрів

`property`
Встановлювана властивість, представлена однією з констант:
**`AL_GAIN`** (float), **`AL_POSITION`** (array(float,float,float)),
**`AL_VELOCITY`** (array(float,float,float)) та **`AL_ORIENTATION`**
(array(float,float,float)).

`setting`
Значення для установки, або число з плаваючою точкою, або масив
числами з плаваючими точками.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [openal_listener_get()](function.openal-listener-get.md) -
Отримати властивість прослуховувача

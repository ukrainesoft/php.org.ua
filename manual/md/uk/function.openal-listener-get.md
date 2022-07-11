- [«openal_device_open](function.openal-device-open.md)
- [openal_listener_set »](function.openal-listener-set.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Отримати властивість прослуховувача

#openal_listener_get

(PECL openal u003d 0.1.0)

openal_listener_get — Отримати властивість прослуховувача

### Опис

**openal_listener_get**(int `$property`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

### Список параметрів

`property`
Запитана властивість, представлена однією з констант: **`AL_GAIN`**
(float), **`AL_POSITION`** (array(float,float,float)), **`AL_VELOCITY`**
(array(float,float,float)) і **`AL_ORIENTATION`**
(array(float,float,float)).

### Значення, що повертаються

Повертає число з плаваючою точкою або масив чисел із плаваючими
точками (при необхідності) або **`false`** у разі виникнення
помилки.

### Дивіться також

- [openal_listener_set()](function.openal-listener-set.md) -
Встановлення якості прослуховувача

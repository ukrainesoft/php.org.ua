- [« Gmagick::setsamplingfactors](gmagick.setsamplingfactors.md)
- [Gmagick::shearimage »](gmagick.shearimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Встановлює розмір об'єкта Gmagick

# Gmagick::setsize

(PECL gmagick \>u003d Unknown)

Gmagick::setsize — Встановлює розмір об'єкта Gmagick

### Опис

public **Gmagick::setsize**(int `$columns`, int `$rows`):
[Gmagick](class.gmagick.md)

Встановлює розмір об'єкта Gmagick. Встановіть його, перш ніж читати
сирий формат зображення, такий як **`Gmagick::COLORSPACE_RGB`**,
**`Gmagick::COLORSPACE_GRAY`** або **`Gmagick::COLORSPACE_CMYK`**.

### Список параметрів

`columns`
Ширина у пікселях.

`rows`
Висота у пікселях.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.

- [«Gmagick::mapimage](gmagick.mapimage.md)
- [Gmagick::minifyimage »](gmagick.minifyimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Застосовує цифровий фільтр

# Gmagick::medianfilterimage

(PECL gmagick \>u003d Unknown)

Gmagick::medianfilterimage — Застосовує цифровий фільтр

### Опис

public **Gmagick::medianfilterimage**(float `$radius`): void

Застосовує цифровий фільтр, який покращує якість зашумленого зображення.
Кожен піксель замінюється медіаною в наборі сусідніх пікселів,
що визначаються радіусом.

### Список параметрів

`radius`
Радіус навколо пікселя.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) із застосованим медіанним фільтром.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.

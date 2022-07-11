- [« Gmagick::blurimage](gmagick.blurimage.md)
- [Gmagick::charcoalimage »](gmagick.charcoalimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Додати рамку до зображення

# Gmagick::borderimage

(PECL gmagick \>u003d Unknown)

Gmagick::borderimage — Додати рамку до зображення

### Опис

public **Gmagick::borderimage**([GmagickPixel](class.gmagickpixel.md)
`$color`, int `$width`, int `$height`): [Gmagick](class.gmagick.md)

Додати рамку до зображення. Колір рамки задається рядком або кольором
фону [GmagickPixel](class.gmagickpixel.md).

### Список параметрів

`col`
Об'єкт [GmagickPixel](class.gmagickpixel.md) object або рядок,
визначальна колір рамки.

`width`
Товщина кадру.

`height`
Висота кадру.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) із доданою рамкою.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.

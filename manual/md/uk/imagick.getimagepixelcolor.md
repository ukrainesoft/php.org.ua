- [« Imagick::getImagePage](imagick.getimagepage.md)
- [Imagick::getImageProfile »](imagick.getimageprofile.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає колір вказаного пікселя

# Imagick::getImagePixelColor

(PECL imagick 2, PECL imagick 3)

Imagick::getImagePixelColor — Повертає колір вказаного пікселя

### Опис

public **Imagick::getImagePixelColor**(int `$x`, int `$y`):
[ImagickPixel](class.imagickpixel.md)

Повертає колір вказаного пікселя.

### Список параметрів

`x`
Координата x пікселя.

`y`
Координата у пікселя.

### Значення, що повертаються

Повертає екземпляр ImagickPixel для кольору у заданих координатах.

### Помилки

Викликає ImagickException у разі виникнення помилки.

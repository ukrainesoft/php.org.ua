- [« Imagick::getImageRedPrimary](imagick.getimageredprimary.md)
- [Imagick::getImageRenderingIntent
»](imagick.getimagerenderingintent.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Виймає область зображення

# Imagick::getImageRegion

(PECL imagick 2, PECL imagick 3)

Imagick::getImageRegion — Витягує область зображення

### Опис

public **Imagick::getImageRegion**(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): [Imagick](class.imagick.md)

Виймає область зображення та повертає її у вигляді нового об'єкта
Imagick.

### Список параметрів

`width`
Ширина витягнутої області.

`height`
Висота витягнутої області.

`x`
Координата X лівого верхнього кута одержаної області.

`y`
Координата Y лівого верхнього кута витягнутої області.

### Значення, що повертаються

Витягує область зображення та повертає її у вигляді нової палички.

### Помилки

Викликає ImagickException у разі виникнення помилки.

- [«
Imagick::getImageChannelStatistics](imagick.getimagechannelstatistics.md)
- [Imagick::getImageColormapColor
»](imagick.getimagecolormapcolor.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає відсічну маску зображення

# Imagick::getImageClipMask

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::getImageClipMask — Повертає відсічну маску зображення

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::getImageClipMask**(): [Imagick](class.imagick.md)

Повертає відсічну маску зображення. Відсічна маска - об'єкт
Imagick, що містить відсічну маску. Цей метод доступний, якщо Imagick
був скомпільований з версією ImageMagick 6.3.6 або старшим.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт Imagick, що містить відсічні маски.

### Помилки

Викликає ImagickException у разі виникнення помилки.

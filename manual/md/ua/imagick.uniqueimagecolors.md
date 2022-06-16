- [« Imagick::trimImage](imagick.trimimage.md)
- [Imagick::unsharpMaskImage »](imagick.unsharpmaskimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Відкидає все, крім одного, будь-якого кольору пікселя

# Imagick::uniqueImageColors

(PECL imagick 2, PECL imagick 3)

Imagick::uniqueImageColors - Відкидає все, крім одного, будь-якого кольору
пікселя

### Опис

public **Imagick::uniqueImageColors**(): bool

Відкидає все, крім одного будь-якого кольору пікселя. Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.2.9 або
старше.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::uniqueImageColors()****

` <?phpfunction uniqueImageColors($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); //Reduce the image to 256 colours nicely. $imagick->quantizeImage(256, \Imagick::COLORSPACE_YIQ, 0, false, false); $imagick->uniqueImageColors(); $imagick->scaleimage($imagick->getImageWidth(), $imagick->getImageHeight() * 20); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `

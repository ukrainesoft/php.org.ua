- [« Imagick::setImageCompression](imagick.setimagecompression.md)
- [Imagick::setImageDelay »](imagick.setimagedelay.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює якість стиснення зображення

# Imagick::setImageCompressionQuality

(PECL imagick 2, PECL imagick 3)

Imagick::setImageCompressionQuality — Встановлює якість стиснення
зображення

### Опис

public **Imagick::setImageCompressionQuality**(int `$quality`): bool

Встановлює якість стиснення зображення.

### Список параметрів

`quality`
Якість стиснення зображення у вигляді цілого числа

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання
**Imagick::setImageCompressionQuality()****

`<?phpfunction setImageCompressionQuality($imagePath, $quality) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->setImageCompressionQuality($quality); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `

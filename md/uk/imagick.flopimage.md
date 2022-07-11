- [« Imagick::floodFillPaintImage](imagick.floodfillpaintimage.md)
- [Imagick::forwardFourierTransformImage
»](imagick.forwardfouriertransformimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Створює горизонтальне дзеркальне відображення

# Imagick::flopImage

(PECL imagick 2, PECL imagick 3)

Imagick::flopImage — Створює дзеркальне горизонтальне відображення

### Опис

public **Imagick::flopImage**(): bool

Створює горизонтальне дзеркало зображення, відображаючи пікселі навколо
центральної осі Y.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::flopImage()****

`<?phpfunction flopImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->flopImage(); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `

### Дивіться також

- [Imagick::flipimage()](imagick.flipimage.md) - Створює
вертикальне дзеркало зображення
